const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// ═══════════════════════════════════════════
// VAULT ZOHO LEARN SPACE ICONS (96×96)
// ═══════════════════════════════════════════

const SPACES = [
  {
    id: '01', slug: 'about-vault', title: 'About Vault',
    bg: '#0019FF', bg2: '#0014D4', seed: 0,
    waveColor: [0, 25, 255], waveColor2: [97, 82, 244],
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="11" y="20" width="26" height="20" rx="2" opacity=".75"/><path d="M11 26h26" opacity=".5"/><path d="M19 20v-6h10v6" opacity=".6"/><circle cx="24" cy="16" r="2.5" opacity=".55"/><path d="M17 32h3v6h-3zM22 32h3v6h-3zM28 32h3v6h-3z" opacity=".4"/></svg>`,
  },
  {
    id: '02', slug: 'products-pricing', title: 'Products & Pricing',
    bg: '#3730A3', bg2: '#4C1D95', seed: 2.5,
    waveColor: [79, 70, 229], waveColor2: [139, 92, 246],
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="14" width="20" height="24" rx="2.5" opacity=".75"/><rect x="20" y="10" width="20" height="24" rx="2.5" opacity=".45"/><path d="M15 24v8M22 28v4" opacity=".7" stroke-width="2"/><circle cx="15" cy="21" r="2" opacity=".5"/></svg>`,
  },
  {
    id: '03', slug: 'sales-playbook', title: 'Sales Playbook',
    bg: '#0044CC', bg2: '#0369A1', seed: 5,
    waveColor: [0, 102, 255], waveColor2: [6, 182, 212],
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="14" opacity=".7"/><circle cx="24" cy="24" r="8" opacity=".5"/><circle cx="24" cy="24" r="3" opacity=".35"/><circle cx="24" cy="24" r="1" fill="rgba(255,255,255,.85)" stroke="none"/><path d="M34 14l5-4M37 13l2-2-2-.5" opacity=".6"/></svg>`,
  },
  {
    id: '04', slug: 'tools-systems', title: 'Tools & Systems',
    bg: '#1E293B', bg2: '#1E3A5F', seed: 7.5,
    waveColor: [30, 58, 95], waveColor2: [59, 130, 246],
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="20" cy="22" r="9" opacity=".65"/><circle cx="20" cy="22" r="3" opacity=".45"/><path d="M20 13v-2M20 33v-2M11 22H9M31 22h-2" opacity=".5"/><rect x="32" y="28" width="10" height="14" rx="2" opacity=".6"/><path d="M32 33h10" opacity=".4"/></svg>`,
  },
  {
    id: '05', slug: 'processes-sops', title: 'Processes & SOPs',
    bg: '#0F766E', bg2: '#0C6478', seed: 10,
    waveColor: [13, 148, 136], waveColor2: [14, 165, 233],
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="8" width="12" height="9" rx="2.5" opacity=".7"/><rect x="10" y="22" width="12" height="9" rx="2.5" opacity=".55"/><rect x="10" y="36" width="12" height="9" rx="2.5" opacity=".4"/><path d="M22 12h6" opacity=".6"/><path d="M28 12v14L22 26" opacity=".5" stroke-dasharray="2.5 2"/><path d="M22 26h3" opacity=".45"/><path d="M25 26v14L22 40" opacity=".4" stroke-dasharray="2.5 2"/></svg>`,
  },
  {
    id: '06', slug: 'compliance-legal', title: 'Compliance & Legal',
    bg: '#0F172A', bg2: '#1E1B4B', seed: 12.5,
    waveColor: [15, 23, 42], waveColor2: [67, 56, 202],
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6L8 16v12c0 10 7 18 16 22 9-4 16-12 16-22V16L24 6z" opacity=".65"/><path d="M17 26l5 5 10-12" opacity=".8" stroke-width="2.2"/></svg>`,
  },
  {
    id: '07', slug: 'faq', title: 'FAQ',
    bg: '#6D28D9', bg2: '#86198F', seed: 15,
    waveColor: [109, 40, 217], waveColor2: [168, 85, 247],
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="22" r="14" opacity=".65"/><path d="M19 18c0-3 2.2-5.5 5-5.5s5 2.5 5 5.5c0 3-2.5 3.5-3.5 5-.8 1.2-1.5 2.2-1.5 4" opacity=".75" stroke-width="2.2"/><circle cx="24" cy="34" r="1.5" fill="rgba(255,255,255,.8)" stroke="none"/><path d="M12 40h8l4 4 4-4h8" opacity=".35"/></svg>`,
  },
];

function generateIconHTML(space) {
  const S = 96;
  const [r1, g1, b1] = space.waveColor;
  const [r2, g2, b2] = space.waveColor2;
  const count = 18;
  const centerY = S * 0.48;
  let wavePaths = '';

  for (let i = 0; i < count; i++) {
    const p = i / count;
    const r = Math.floor(r1 + p * (r2 - r1));
    const g = Math.floor(g1 + p * (g2 - g1));
    const b = Math.floor(b1 + p * (b2 - b1));
    const a = (0.08 + p * 0.3).toFixed(3);
    let d = '';
    for (let x = 0; x <= S; x += 2) {
      const xN = x / S;
      const y = centerY
        + Math.sin(xN * Math.PI * 2.5 + space.seed + i * 0.25) * (6 + i * 0.8)
        + Math.sin(xN * Math.PI * 5 + space.seed * 0.7 + i * 0.15) * (3 + i * 0.3)
        + Math.cos(xN * Math.PI * 1.8 + space.seed * 0.3) * 5
        + (i - count / 2) * 2.4;
      d += (x === 0 ? 'M' : 'L') + `${x},${y.toFixed(1)} `;
    }
    wavePaths += `<path d="${d}" stroke="rgba(${r},${g},${b},${a})" fill="none" stroke-width="0.8"/>`;
  }

  const waveSVG = `<svg viewBox="0 0 ${S} ${S}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%;border-radius:16px">${wavePaths}</svg>`;

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:${S}px;height:${S}px;overflow:hidden;
    background:linear-gradient(145deg,${space.bg},${space.bg2});
    border-radius:16px;position:relative;
    font-family:'Inter',sans-serif;
  }
  .waves{position:absolute;inset:0;opacity:.75;border-radius:16px;overflow:hidden}
  .glow{position:absolute;inset:0;border-radius:16px;
    background:radial-gradient(ellipse at 30% 35%,rgba(255,255,255,.1),transparent 60%)
  }
  .content{position:relative;z-index:2;display:flex;flex-direction:column;
    align-items:center;justify-content:center;height:100%;gap:2px}
  .icon-wrap{width:44px;height:44px}
  .icon-wrap svg{width:100%;height:100%}
  .num{font-size:22px;font-weight:900;color:white;letter-spacing:-0.04em;
    text-shadow:0 1px 8px rgba(0,0,0,.12);opacity:.92}
</style>
</head><body>
  <div class="waves">${waveSVG}</div>
  <div class="glow"></div>
  <div class="content">
    <div class="icon-wrap">${space.icon}</div>
    <div class="num">${space.id}</div>
  </div>
</body></html>`;
}

async function main() {
  const outDir = path.resolve(__dirname, '..', 'Docs', 'banners', 'icons');
  fs.mkdirSync(outDir, { recursive: true });

  console.log('\n  Vault · Zoho Learn Space Icons (96×96)');
  console.log('  ───────────────────────────────────────\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const space of SPACES) {
      const page = await browser.newPage();
      // Render at 96×96 with 2x DPR for crispness (output is 192×192, perfect for retina)
      await page.setViewport({ width: 96, height: 96, deviceScaleFactor: 2 });
      await page.setContent(generateIconHTML(space), { waitUntil: 'networkidle0' });
      const filename = `icon-${space.slug}.png`;
      await page.screenshot({ path: path.join(outDir, filename), omitBackground: true });
      console.log(`  ✓ ${space.id} · ${space.title}  →  ${filename}`);
      await page.close();
    }
    console.log(`\n  Icons saved to: ${outDir}\n`);
  } finally {
    await browser.close();
  }
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
