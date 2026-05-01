// Build monthly KPI Orders (Sales / BD) from JSON inputs into local PDFs.
// Local-only: writes to output/orders/, does NOT mirror into Docs/ and is not deployed.
//
// Usage:
//   npm run orders                     — process all orders/inputs/*.json
//   npm run orders -- 2026-05-sales    — process a single file (without extension)
//
// JSON shape per Order:
//   {
//     "type": "sales" | "bd",
//     "month": "May 2026",
//     "monthRu": "Май 2026",
//     "monthSlug": "2026-05",
//     "orderNumber": "01-2026",
//     "issuanceDateEn": "April 30, 2026",
//     "issuanceDateRu": "30 апреля 2026 г.",
//     "effectiveDateEn": "May 1, 2026",
//     "effectiveDateRu": "1 мая 2026 г.",
//     "plans": [...],
//     "kpi": {...},
//     "criticalMetrics": [...],
//     "disciplinaryScale": { "rollingWindowDays": 90, "thresholdsCount": [5, 10, 20, 30, 50] },
//     // sales-only:
//     "stageTimeLimitsDays": { "Discovery / QLF / Demo": 7, ... }
//   }

const fs = require('fs');
const path = require('path');
const { ICONS, generateHTML } = require('./render.js');

const ROOT = path.join(__dirname, '..');
const INPUTS_DIR = path.join(ROOT, 'orders', 'inputs');
const OUTPUT_DIR = path.join(ROOT, 'output', 'orders');

fs.mkdirSync(INPUTS_DIR, { recursive: true });
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ═══════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════

function fmtUSD(n) {
  return `$${Number(n).toLocaleString('en-US')}`;
}

function fmtNum(n) {
  return Number(n).toLocaleString('en-US');
}

function plural(n, one, few, many) {
  // Russian plural for nouns: 1, 2-4, 5+
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

// ═══════════════════════════════════════════
// SALES ORDER → DOC
// ═══════════════════════════════════════════

function buildSalesOrderDoc(input, lang) {
  const isRu = lang === 'ru';
  const monthLabel = isRu ? input.monthRu : input.month;
  const issuanceDate = isRu ? input.issuanceDateRu : input.issuanceDateEn;
  const effectiveDate = isRu ? input.effectiveDateRu : input.effectiveDateEn;
  const orderNum = input.orderNumber || input.monthSlug;

  const id = `Order-Sales-${input.monthSlug}-${lang.toUpperCase()}`;

  const k = input.kpi || {};
  const ds = input.disciplinaryScale || {};
  const stages = input.stageTimeLimitsDays || {};

  // Plans table
  const plansHeaders = isRu
    ? ['Сотрудник', 'Сумма, USD', 'Продукты']
    : ['Employee', 'Revenue, USD', 'Products'];
  const plansRows = (input.plans || []).map(p => {
    const products = (p.products || []).map(pr => {
      const star = pr.mandatory ? ' <strong>*</strong>' : '';
      return `${pr.name} — ${fmtNum(pr.count)}${star}`;
    }).join('<br>');
    return [
      `<strong>${p.employee}</strong>`,
      fmtUSD(p.revenuePlanUSD),
      products
    ];
  });
  const plansFootnote = isRu
    ? '<strong>*</strong> — обязательный продукт. План должен быть выполнен по нему без исключений.'
    : '<strong>*</strong> — mandatory product. The plan must be met for this product without exception.';

  // KPI normatives
  const kpiActivity = isRu
    ? [
        ['Закрытые задачи', `${k.activity?.closedTasksPerDay ?? '—'} в день`],
        ['Новые сделки в Sales', `${k.activity?.newDealsPerMonth ?? '—'} в месяц`],
        ['Квалифицированные встречи', `${k.activity?.qualifiedMeetingsPerWeek ?? '—'} в неделю`]
      ]
    : [
        ['Closed tasks', `${k.activity?.closedTasksPerDay ?? '—'} per day`],
        ['New deals in Sales', `${k.activity?.newDealsPerMonth ?? '—'} per month`],
        ['Qualified meetings', `${k.activity?.qualifiedMeetingsPerWeek ?? '—'} per week`]
      ];

  const slaItems = [];
  if (k.sla?.firstTouchOnNewLeadMinutes != null) {
    slaItems.push(isRu
      ? ['Первый контакт по новому Лиду / Сделке', `${k.sla.firstTouchOnNewLeadMinutes} минут в рабочее время`]
      : ['First touch on a new Lead / Deal', `${k.sla.firstTouchOnNewLeadMinutes} minutes during business hours`]);
  }

  const hygieneItems = [];
  if (k.hygiene?.maxOverdueTasksPerMonth != null) {
    hygieneItems.push(isRu
      ? ['Допустимо просроченных задач за месяц', `${k.hygiene.maxOverdueTasksPerMonth}`]
      : ['Tolerated overdue tasks per month', `${k.hygiene.maxOverdueTasksPerMonth}`]);
  }
  if (k.hygiene?.maxAbandonedDealsPerMonth != null) {
    hygieneItems.push(isRu
      ? ['Допустимо «брошенных» Сделок за месяц', `${k.hygiene.maxAbandonedDealsPerMonth}`]
      : ['Tolerated "abandoned" Deals per month', `${k.hygiene.maxAbandonedDealsPerMonth}`]);
  }

  const qualityItems = [];
  if (k.qualityMinReviewScore != null) {
    qualityItems.push(isRu
      ? ['Минимальная средняя оценка руководителя', `${k.qualityMinReviewScore}`]
      : ['Minimum manager review score', `${k.qualityMinReviewScore}`]);
  }

  // Stage time limits
  const stageRows = Object.entries(stages).map(([stage, days]) => {
    return [stage, isRu ? `${days} ${plural(days, 'день', 'дня', 'дней')}` : `${days} ${days === 1 ? 'day' : 'days'}`];
  });

  // Disciplinary scale
  const dsThresholds = ds.thresholdsCount || [];
  const dsLabels = isRu
    ? ['1. Устное предупреждение', '2. Письменный выговор', '3. Лишение бонуса за текущий месяц', '4. Второй выговор', '5. Расторжение соглашения']
    : ['1. Verbal warning', '2. Written reprimand', '3. Withholding of the current monthly bonus', '4. Second written reprimand', '5. Termination of the contractor agreement'];
  const dsRows = dsLabels.map((label, i) => {
    const t = dsThresholds[i];
    const trig = isRu
      ? (t != null ? `${t} ${plural(t, 'нарушение', 'нарушения', 'нарушений')} в окне` : '—')
      : (t != null ? `${t} violations in the window` : '—');
    return [trig, label];
  });

  // Critical metrics
  const critical = (input.criticalMetrics || []);

  // Build sections
  const sections = [];

  sections.push({
    number: '01',
    title: isRu ? 'Основания и общие положения' : 'Basis and General Provisions',
    content: [
      { type: 'p', html: isRu
        ? `Настоящий Приказ издаётся в соответствии с пунктом 2 документа <strong>Нормативы KPI — Sales Manager</strong> и устанавливает индивидуальные плановые показатели и нормативы для всех сотрудников в роли Sales Manager на ${monthLabel}.`
        : `This Order is issued pursuant to Section 2 of the <strong>Sales Manager — KPI Standards</strong> and sets the individual plan targets and KPI quotas for all employees in the role of Sales Manager for ${monthLabel}.` },
      { type: 'p', html: isRu
        ? `<strong>Дата издания:</strong> ${issuanceDate}<br><strong>Дата вступления в силу:</strong> ${effectiveDate}`
        : `<strong>Issuance date:</strong> ${issuanceDate}<br><strong>Effective date:</strong> ${effectiveDate}` },
      { type: 'p', html: isRu
        ? 'Невыполнение положений настоящего Приказа влечёт ответственность по разделу 7 базовых Нормативов KPI.'
        : 'Non-performance of the provisions of this Order triggers accountability under Section 7 of the underlying KPI Standards.' }
    ]
  });

  sections.push({
    number: '02',
    title: isRu ? 'Sales Plan по сотрудникам' : 'Sales Plan per Employee',
    content: [
      { type: 'p', html: isRu
        ? 'Индивидуальные плановые показатели на отчётный месяц:'
        : 'Individual plan targets for the reporting month:' },
      { type: 'table', headers: plansHeaders, rows: plansRows },
      { type: 'p', html: plansFootnote }
    ]
  });

  sections.push({
    number: '03',
    title: isRu ? 'Нормативы KPI' : 'KPI Standards',
    content: [
      { type: 'subsection', number: '3.1', title: isRu ? 'Активность' : 'Activity', content: [
        { type: 'table', headers: isRu ? ['Метрика', 'Норматив'] : ['Metric', 'Standard'], rows: kpiActivity }
      ]},
      ...(slaItems.length ? [{ type: 'subsection', number: '3.2', title: 'SLA', content: [
        { type: 'table', headers: isRu ? ['Метрика', 'Норматив'] : ['Metric', 'Standard'], rows: slaItems }
      ]}] : []),
      ...(hygieneItems.length ? [{ type: 'subsection', number: '3.3', title: isRu ? 'Гигиена воронки (лимиты)' : 'Pipeline Hygiene (limits)', content: [
        { type: 'table', headers: isRu ? ['Метрика', 'Лимит'] : ['Metric', 'Limit'], rows: hygieneItems }
      ]}] : []),
      ...(qualityItems.length ? [{ type: 'subsection', number: '3.4', title: isRu ? 'Качество работы' : 'Quality of Work', content: [
        { type: 'table', headers: isRu ? ['Метрика', 'Норматив'] : ['Metric', 'Standard'], rows: qualityItems }
      ]}] : []),
      ...(stageRows.length ? [{ type: 'subsection', number: '3.5', title: isRu ? 'Максимальная длительность пребывания на этапах воронки' : 'Maximum Stage Dwell Time', content: [
        { type: 'table', headers: isRu ? ['Этап', 'Лимит'] : ['Stage', 'Limit'], rows: stageRows }
      ]}] : [])
    ]
  });

  if (critical.length) {
    sections.push({
      number: '04',
      title: isRu ? 'Критические метрики' : 'Critical Metrics',
      content: [
        { type: 'p', html: isRu
          ? 'Метрики ниже помечены как <strong>критические</strong> для отчётного месяца. Однократный их провал в любом размере фиксируется как нарушение шкалы 7.2 базовых Нормативов:'
          : 'The metrics below are marked as <strong>critical</strong> for the reporting month. A single breach of any of them is recorded as a violation in the 7.2 counter of the underlying Standards:' },
        { type: 'list', items: critical }
      ]
    });
  }

  sections.push({
    number: critical.length ? '05' : '04',
    title: isRu ? 'Параметры дисциплинарной шкалы (раздел 7.2 базовых Нормативов)' : 'Disciplinary Scale Parameters (Section 7.2 of the underlying Standards)',
    content: [
      { type: 'p', html: isRu
        ? `Скользящее окно счётчика нарушений: <strong>${ds.rollingWindowDays} ${plural(ds.rollingWindowDays || 0, 'день', 'дня', 'дней')}</strong>.`
        : `Rolling violations-counter window: <strong>${ds.rollingWindowDays} day${ds.rollingWindowDays === 1 ? '' : 's'}</strong>.` },
      { type: 'table', headers: isRu ? ['Триггер', 'Мера'] : ['Trigger', 'Measure'], rows: dsRows }
    ]
  });

  return {
    id,
    title: isRu ? `Приказ Sales KPI — ${monthLabel}` : `Sales KPI Order — ${monthLabel}`,
    heroTitle: isRu ? `Приказ<br>Sales KPI` : `Sales KPI<br>Order`,
    badge: isRu
      ? `${monthLabel} · Приказ № ${orderNum}`
      : `${monthLabel} · Order #${orderNum}`,
    subtitle: isRu
      ? `Vault Group — Sales Plan и нормативы KPI на ${monthLabel}.`
      : `Vault Group — Sales Plan and KPI standards for ${monthLabel}.`,
    icon: ICONS.invoice,
    seed: 30 + (parseInt((input.monthSlug || '0').replace('-', '')) % 20),
    style: 'strict',
    lang,
    intro: isRu
      ? `Приказ Chief Commercial Operations Officer Vault Group, изданный на ${monthLabel} в соответствии с документом «Нормативы KPI — Sales Manager».`
      : `Order of the Chief Commercial Operations Officer of Vault Group, issued for ${monthLabel} pursuant to the "Sales Manager — KPI Standards" document.`,
    backHref: '#',
    backLabel: isRu ? 'Назад' : 'Back',
    backLabelShort: isRu ? 'Назад' : 'Back',
    signatureBlock: {
      stampLabel: isRu ? 'Утверждено' : 'Approved',
      intro: isRu
        ? `Издано Chief Commercial Operations Officer Vault Group ${issuanceDate}.`
        : `Issued by the Chief Commercial Operations Officer of Vault Group on ${issuanceDate}.`,
      name: isRu ? 'Святослав Шпаночкин' : 'Sviatoslav Shpanochkin',
      title: 'Chief Commercial Operations Officer',
      date: effectiveDate,
      dateLabel: isRu ? 'Дата вступления в силу' : 'Effective date',
      method: isRu ? 'Подписано через Zoho Sign' : 'Signed via Zoho Sign'
    },
    sections
  };
}

// ═══════════════════════════════════════════
// BD ORDER → DOC
// ═══════════════════════════════════════════

function buildBdOrderDoc(input, lang) {
  const isRu = lang === 'ru';
  const monthLabel = isRu ? input.monthRu : input.month;
  const issuanceDate = isRu ? input.issuanceDateRu : input.issuanceDateEn;
  const effectiveDate = isRu ? input.effectiveDateRu : input.effectiveDateEn;
  const orderNum = input.orderNumber || input.monthSlug;

  const id = `Order-BD-${input.monthSlug}-${lang.toUpperCase()}`;

  const k = input.kpi || {};
  const ds = input.disciplinaryScale || {};

  // Plans table
  const plansHeaders = isRu
    ? ['Сотрудник', 'Назначенных встреч']
    : ['Employee', 'Booked meetings'];
  const plansRows = (input.plans || []).map(p => [
    `<strong>${p.employee}</strong>`,
    fmtNum(p.meetingsPlan)
  ]);

  // KPI
  const kpiActivity = isRu
    ? [
        ['Закрытые задачи', `${k.activity?.closedTasksPerDay ?? '—'} в день`],
        ['Новые компании в BD-воронке', `${k.activity?.newCompaniesPerMonth ?? '—'} в месяц`],
        ['Новые контакты', `${k.activity?.newContactsPerMonth ?? '—'} в месяц`]
      ]
    : [
        ['Closed tasks', `${k.activity?.closedTasksPerDay ?? '—'} per day`],
        ['New companies in BD pipeline', `${k.activity?.newCompaniesPerMonth ?? '—'} per month`],
        ['New contacts', `${k.activity?.newContactsPerMonth ?? '—'} per month`]
      ];

  const slaItems = [];
  if (k.sla?.firstOutreachOnNewCompanyHours != null) {
    slaItems.push(isRu
      ? ['Первый outreach по новой компании', `${k.sla.firstOutreachOnNewCompanyHours} ${plural(k.sla.firstOutreachOnNewCompanyHours, 'час', 'часа', 'часов')} в рабочее время`]
      : ['First outreach to a new company', `${k.sla.firstOutreachOnNewCompanyHours} hour${k.sla.firstOutreachOnNewCompanyHours === 1 ? '' : 's'} during business hours`]);
  }

  const hygieneItems = [];
  if (k.hygiene?.maxOverdueTasksPerMonth != null) {
    hygieneItems.push(isRu
      ? ['Допустимо просроченных задач за месяц', `${k.hygiene.maxOverdueTasksPerMonth}`]
      : ['Tolerated overdue tasks per month', `${k.hygiene.maxOverdueTasksPerMonth}`]);
  }

  const qualityItems = [];
  if (k.quality?.maxReturnRatePercent != null) {
    qualityItems.push(isRu
      ? ['Максимально допустимый % возвратов в BD', `${k.quality.maxReturnRatePercent}%`]
      : ['Maximum permitted % of returns to BD', `${k.quality.maxReturnRatePercent}%`]);
  }
  if (k.quality?.returnFlagWindowDays != null) {
    qualityItems.push(isRu
      ? ['Окно постановки флага «Return to BD» от SM / PA', `${k.quality.returnFlagWindowDays} ${plural(k.quality.returnFlagWindowDays, 'день', 'дня', 'дней')}`]
      : ['"Return to BD" flag window from SM / PA', `${k.quality.returnFlagWindowDays} day${k.quality.returnFlagWindowDays === 1 ? '' : 's'}`]);
  }
  if (k.quality?.minReceivingPartyScore != null) {
    qualityItems.push(isRu
      ? ['Минимальная средняя оценка от принимающей стороны', `${k.quality.minReceivingPartyScore}`]
      : ['Minimum receiving-party average score', `${k.quality.minReceivingPartyScore}`]);
  }

  // Disciplinary scale
  const dsThresholds = ds.thresholdsCount || [];
  const dsLabels = isRu
    ? ['1. Устное предупреждение', '2. Письменный выговор', '3. Лишение бонуса за текущий месяц', '4. Второй выговор', '5. Расторжение соглашения']
    : ['1. Verbal warning', '2. Written reprimand', '3. Withholding of the current monthly bonus', '4. Second written reprimand', '5. Termination of the contractor agreement'];
  const dsRows = dsLabels.map((label, i) => {
    const t = dsThresholds[i];
    const trig = isRu
      ? (t != null ? `${t} ${plural(t, 'нарушение', 'нарушения', 'нарушений')} в окне` : '—')
      : (t != null ? `${t} violations in the window` : '—');
    return [trig, label];
  });

  const critical = (input.criticalMetrics || []);

  // Sections
  const sections = [];

  sections.push({
    number: '01',
    title: isRu ? 'Основания и общие положения' : 'Basis and General Provisions',
    content: [
      { type: 'p', html: isRu
        ? `Настоящий Приказ издаётся в соответствии с пунктом 2 документа <strong>Нормативы KPI — Business Developer</strong> и устанавливает индивидуальные плановые показатели и нормативы для всех сотрудников в роли Business Developer на ${monthLabel}.`
        : `This Order is issued pursuant to Section 2 of the <strong>Business Developer — KPI Standards</strong> and sets the individual plan targets and KPI quotas for all employees in the role of Business Developer for ${monthLabel}.` },
      { type: 'p', html: isRu
        ? `<strong>Дата издания:</strong> ${issuanceDate}<br><strong>Дата вступления в силу:</strong> ${effectiveDate}`
        : `<strong>Issuance date:</strong> ${issuanceDate}<br><strong>Effective date:</strong> ${effectiveDate}` },
      { type: 'p', html: isRu
        ? 'Невыполнение положений настоящего Приказа влечёт ответственность по разделу 7 базовых Нормативов KPI.'
        : 'Non-performance of the provisions of this Order triggers accountability under Section 7 of the underlying KPI Standards.' }
    ]
  });

  sections.push({
    number: '02',
    title: isRu ? 'BD Plan по сотрудникам' : 'BD Plan per Employee',
    content: [
      { type: 'p', html: isRu
        ? 'Индивидуальные плановые показатели на отчётный месяц:'
        : 'Individual plan targets for the reporting month:' },
      { type: 'table', headers: plansHeaders, rows: plansRows }
    ]
  });

  sections.push({
    number: '03',
    title: isRu ? 'Нормативы KPI' : 'KPI Standards',
    content: [
      { type: 'subsection', number: '3.1', title: isRu ? 'Активность' : 'Activity', content: [
        { type: 'table', headers: isRu ? ['Метрика', 'Норматив'] : ['Metric', 'Standard'], rows: kpiActivity }
      ]},
      ...(slaItems.length ? [{ type: 'subsection', number: '3.2', title: 'SLA', content: [
        { type: 'table', headers: isRu ? ['Метрика', 'Норматив'] : ['Metric', 'Standard'], rows: slaItems }
      ]}] : []),
      ...(hygieneItems.length ? [{ type: 'subsection', number: '3.3', title: isRu ? 'Гигиена воронки (лимиты)' : 'Pipeline Hygiene (limits)', content: [
        { type: 'table', headers: isRu ? ['Метрика', 'Лимит'] : ['Metric', 'Limit'], rows: hygieneItems }
      ]}] : []),
      ...(qualityItems.length ? [{ type: 'subsection', number: '3.4', title: isRu ? 'Качество работы' : 'Quality of Work', content: [
        { type: 'table', headers: isRu ? ['Метрика', 'Норматив'] : ['Metric', 'Standard'], rows: qualityItems }
      ]}] : [])
    ]
  });

  if (critical.length) {
    sections.push({
      number: '04',
      title: isRu ? 'Критические метрики' : 'Critical Metrics',
      content: [
        { type: 'p', html: isRu
          ? 'Метрики ниже помечены как <strong>критические</strong> для отчётного месяца:'
          : 'The metrics below are marked as <strong>critical</strong> for the reporting month:' },
        { type: 'list', items: critical }
      ]
    });
  }

  sections.push({
    number: critical.length ? '05' : '04',
    title: isRu ? 'Параметры дисциплинарной шкалы (раздел 7.2 базовых Нормативов)' : 'Disciplinary Scale Parameters (Section 7.2 of the underlying Standards)',
    content: [
      { type: 'p', html: isRu
        ? `Скользящее окно счётчика нарушений: <strong>${ds.rollingWindowDays} ${plural(ds.rollingWindowDays || 0, 'день', 'дня', 'дней')}</strong>.`
        : `Rolling violations-counter window: <strong>${ds.rollingWindowDays} day${ds.rollingWindowDays === 1 ? '' : 's'}</strong>.` },
      { type: 'table', headers: isRu ? ['Триггер', 'Мера'] : ['Trigger', 'Measure'], rows: dsRows }
    ]
  });

  return {
    id,
    title: isRu ? `Приказ BD KPI — ${monthLabel}` : `BD KPI Order — ${monthLabel}`,
    heroTitle: isRu ? `Приказ<br>BD KPI` : `BD KPI<br>Order`,
    badge: isRu
      ? `${monthLabel} · Приказ № ${orderNum}`
      : `${monthLabel} · Order #${orderNum}`,
    subtitle: isRu
      ? `Vault Group — BD Plan и нормативы KPI на ${monthLabel}.`
      : `Vault Group — BD Plan and KPI standards for ${monthLabel}.`,
    icon: ICONS.chart,
    seed: 35 + (parseInt((input.monthSlug || '0').replace('-', '')) % 20),
    style: 'strict',
    lang,
    intro: isRu
      ? `Приказ Chief Commercial Operations Officer Vault Group, изданный на ${monthLabel} в соответствии с документом «Нормативы KPI — Business Developer».`
      : `Order of the Chief Commercial Operations Officer of Vault Group, issued for ${monthLabel} pursuant to the "Business Developer — KPI Standards" document.`,
    backHref: '#',
    backLabel: isRu ? 'Назад' : 'Back',
    backLabelShort: isRu ? 'Назад' : 'Back',
    signatureBlock: {
      stampLabel: isRu ? 'Утверждено' : 'Approved',
      intro: isRu
        ? `Издано Chief Commercial Operations Officer Vault Group ${issuanceDate}.`
        : `Issued by the Chief Commercial Operations Officer of Vault Group on ${issuanceDate}.`,
      name: isRu ? 'Святослав Шпаночкин' : 'Sviatoslav Shpanochkin',
      title: 'Chief Commercial Operations Officer',
      date: effectiveDate,
      dateLabel: isRu ? 'Дата вступления в силу' : 'Effective date',
      method: isRu ? 'Подписано через Zoho Sign' : 'Signed via Zoho Sign'
    },
    sections
  };
}

// ═══════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════

(async () => {
  const args = process.argv.slice(2);
  const filterName = args[0];

  let inputFiles = fs.readdirSync(INPUTS_DIR).filter(f => f.endsWith('.json'));
  if (filterName) {
    const target = filterName.endsWith('.json') ? filterName : `${filterName}.json`;
    inputFiles = inputFiles.filter(f => f === target);
    if (!inputFiles.length) {
      console.error(`No input matching ${target} in ${INPUTS_DIR}`);
      process.exit(1);
    }
  }
  if (!inputFiles.length) {
    console.log(`\nNo order JSON found in ${INPUTS_DIR}`);
    console.log('Drop a JSON file there (or use orders/examples as a starting point) and rerun.\n');
    process.exit(0);
  }

  console.log(`\n  Generating ${inputFiles.length} order(s) into ${OUTPUT_DIR}\n`);

  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const filename of inputFiles) {
    const input = JSON.parse(fs.readFileSync(path.join(INPUTS_DIR, filename), 'utf-8'));
    if (!input.type || !['sales', 'bd'].includes(input.type)) {
      console.error(`  ✗ ${filename}: missing or invalid "type" (must be "sales" or "bd")`);
      continue;
    }
    if (!input.monthSlug) {
      console.error(`  ✗ ${filename}: missing "monthSlug" (e.g. "2026-05")`);
      continue;
    }

    for (const lang of ['en', 'ru']) {
      const builder = input.type === 'sales' ? buildSalesOrderDoc : buildBdOrderDoc;
      const doc = builder(input, lang);
      const html = generateHTML(doc);
      const htmlPath = path.join(OUTPUT_DIR, `${doc.id}.html`);
      const pdfPath = path.join(OUTPUT_DIR, `${doc.id}.pdf`);
      fs.writeFileSync(htmlPath, html, 'utf-8');

      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 60000 });
      await page.evaluate(() => document.fonts.ready);
      await new Promise(r => setTimeout(r, 1200));
      await page.evaluate(() => document.body.classList.add('pdf-mode'));
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' },
        displayHeaderFooter: false
      });
      await page.close();
      console.log(`  ✓ ${doc.id}.pdf`);
    }
  }

  await browser.close();
  console.log(`\n  Done. PDFs in ${OUTPUT_DIR}\n`);
})().catch(err => {
  console.error('Order generation failed:', err);
  process.exit(1);
});
