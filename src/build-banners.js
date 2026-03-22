const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════
// VAULT ZOHO LEARN BANNERS
// Animated canvas wave banners for Embed Link
// ═══════════════════════════════════════════

const LOGO_MARK_WHITE = `<svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.17 7.58L5.4 24.28C-1.78 31.43-1.8 43.02 5.35 50.2L35.75 80.7C60.16 105.18 99.89 105.26 124.38 80.87L153.86 51.51C161.06 44.34 161.06 32.71 153.86 25.54L135.3 7.06C127.84-0.37 115.75-0.37 108.3 7.06L78.01 37.22L48.25 7.58C41.05 0.41 29.37 0.41 22.17 7.58Z" fill="white"/><path d="M152.94 47.62C120.35 64.63 89.86 48.44 78.01 37.22L109.37 5.75C116.38-1.28 127.81-1.21 134.74 5.89L155.12 26.79C161.29 33.11 160.78 43.53 152.94 47.62Z" fill="rgba(255,255,255,0.55)"/></svg>`;

// ═══════════════════════════════════════════
// ICON SVGs — Thematic per space
// ═══════════════════════════════════════════

const ICONS = {
  building: `<svg viewBox="0 0 64 64" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="24" width="36" height="30" rx="2" opacity=".7"/><path d="M14 32h36" opacity=".5"/><path d="M24 24V16h16v8" opacity=".6"/><circle cx="32" cy="20" r="3" opacity=".5"/><path d="M22 38h4v8h-4zM30 38h4v8h-4zM38 38h4v8h-4z" opacity=".4"/></svg>`,
  cards: `<svg viewBox="0 0 64 64" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="18" width="28" height="34" rx="3" opacity=".7"/><rect x="26" y="12" width="28" height="34" rx="3" opacity=".45"/><path d="M18 32v10M26 36v6" opacity=".7" stroke-width="2.5"/><circle cx="18" cy="27" r="2.5" opacity=".5"/></svg>`,
  target: `<svg viewBox="0 0 64 64" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="32" r="18" opacity=".7"/><circle cx="30" cy="32" r="11" opacity=".5"/><circle cx="30" cy="32" r="4" opacity=".35"/><circle cx="30" cy="32" r="1.5" fill="rgba(255,255,255,.8)" stroke="none"/><path d="M44 18l8-5M49 16l3-3-4-1" opacity=".6"/></svg>`,
  gear: `<svg viewBox="0 0 64 64" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="26" cy="28" r="12" opacity=".65"/><circle cx="26" cy="28" r="4" opacity=".45"/><path d="M26 16v-3M26 43v-3M14 28h-3M41 28h-3M18 20l-2-2M36 36l-2-2" opacity=".5"/><rect x="40" y="34" width="16" height="18" rx="2" opacity=".6"/><path d="M40 40h16" opacity=".4"/><path d="M47 46h5" opacity=".3"/></svg>`,
  flow: `<svg viewBox="0 0 64 64" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="10" width="16" height="12" rx="3" opacity=".7"/><rect x="12" y="28" width="16" height="12" rx="3" opacity=".55"/><rect x="12" y="46" width="16" height="12" rx="3" opacity=".4"/><path d="M28 16h8" opacity=".6"/><path d="M36 16v18L28 34" opacity=".5" stroke-dasharray="3 2"/><path d="M28 34h4" opacity=".45"/><path d="M32 34v18L28 52" opacity=".4" stroke-dasharray="3 2"/><path d="M40 14l4 2-4 2" opacity=".5"/><path d="M44 16h8" opacity=".35"/></svg>`,
  shield: `<svg viewBox="0 0 64 64" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M32 8L10 20v16c0 12 9 22 22 27 13-5 22-15 22-27V20L32 8z" opacity=".65"/><path d="M22 34l8 8 14-16" opacity=".8" stroke-width="2.5"/></svg>`,
  question: `<svg viewBox="0 0 64 64" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="30" r="18" opacity=".65"/><path d="M24 24c0-4.5 3.6-8 8-8s8 3.5 8 8c0 4-3.5 5-5 7-1.2 1.8-2 3-2 5" opacity=".75" stroke-width="2.5"/><circle cx="33" cy="44" r="1.8" fill="rgba(255,255,255,.8)" stroke="none"/><path d="M16 52h12l4 6 4-6h12" opacity=".35"/></svg>`,
};

// ═══════════════════════════════════════════
// SPACE DEFINITIONS
// ═══════════════════════════════════════════

const SPACES = [
  {
    id: '01', slug: 'about-vault',
    title: 'About Vault', subtitle: 'Company overview',
    icon: 'building', seed: 0,
    // Pure brand blue
    bg: '#0019FF', bg2: '#0014D4',
    waveColor: [0, 25, 255],
    waveColor2: [97, 82, 244],
    glowColor: 'rgba(0, 25, 255, 0.35)',
    glowShadow: 'rgba(0, 25, 255, 0.5)',
  },
  {
    id: '02', slug: 'products-pricing',
    title: 'Products & Pricing', subtitle: 'Product cards & plans',
    icon: 'cards', seed: 2.5,
    // Indigo → Violet
    bg: '#3730A3', bg2: '#4C1D95',
    waveColor: [79, 70, 229],
    waveColor2: [139, 92, 246],
    glowColor: 'rgba(99, 102, 241, 0.35)',
    glowShadow: 'rgba(99, 102, 241, 0.5)',
  },
  {
    id: '03', slug: 'sales-playbook',
    title: 'Sales Playbook', subtitle: 'ICP & sales funnel',
    icon: 'target', seed: 5.0,
    // Blue → Cyan
    bg: '#0044CC', bg2: '#0369A1',
    waveColor: [0, 102, 255],
    waveColor2: [6, 182, 212],
    glowColor: 'rgba(14, 165, 233, 0.35)',
    glowShadow: 'rgba(14, 165, 233, 0.5)',
  },
  {
    id: '04', slug: 'tools-systems',
    title: 'Tools & Systems', subtitle: 'CRM, LinkedIn, Telegram',
    icon: 'gear', seed: 7.5,
    // Dark Slate → Blue
    bg: '#1E293B', bg2: '#1E3A5F',
    waveColor: [30, 58, 95],
    waveColor2: [59, 130, 246],
    glowColor: 'rgba(59, 130, 246, 0.35)',
    glowShadow: 'rgba(59, 130, 246, 0.5)',
  },
  {
    id: '05', slug: 'processes-sops',
    title: 'Processes & SOPs', subtitle: 'Step-by-step instructions',
    icon: 'flow', seed: 10.0,
    // Teal → Sky
    bg: '#0F766E', bg2: '#0C6478',
    waveColor: [13, 148, 136],
    waveColor2: [14, 165, 233],
    glowColor: 'rgba(20, 184, 166, 0.35)',
    glowShadow: 'rgba(20, 184, 166, 0.5)',
  },
  {
    id: '06', slug: 'compliance-legal',
    title: 'Compliance & Legal', subtitle: 'NDA, AML, data privacy',
    icon: 'shield', seed: 12.5,
    // Deep Navy → Indigo
    bg: '#0F172A', bg2: '#1E1B4B',
    waveColor: [15, 23, 42],
    waveColor2: [67, 56, 202],
    glowColor: 'rgba(79, 70, 229, 0.4)',
    glowShadow: 'rgba(79, 70, 229, 0.55)',
  },
  {
    id: '07', slug: 'faq',
    title: 'FAQ', subtitle: 'Q&A knowledge base',
    icon: 'question', seed: 15.0,
    // Purple → Fuchsia
    bg: '#6D28D9', bg2: '#86198F',
    waveColor: [109, 40, 217],
    waveColor2: [168, 85, 247],
    glowColor: 'rgba(147, 51, 234, 0.35)',
    glowShadow: 'rgba(147, 51, 234, 0.5)',
  },
];

// ═══════════════════════════════════════════
// BANNER HTML GENERATOR
// ═══════════════════════════════════════════

function generateBannerHTML(space) {
  const iconSVG = ICONS[space.icon];
  const [r1, g1, b1] = space.waveColor;
  const [r2, g2, b2] = space.waveColor2;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${space.id} · ${space.title} — Vault</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    html,body{
      width:100%;height:100%;overflow:hidden;
      font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;
      -webkit-font-smoothing:antialiased;
    }
    body{
      background:linear-gradient(135deg,${space.bg} 0%,${space.bg2} 100%);
      position:relative;
    }
    canvas{position:absolute;inset:0;z-index:1}
    .gradient-top{
      position:absolute;inset:0;z-index:2;
      background:linear-gradient(180deg,rgba(0,0,0,0.12) 0%,transparent 35%,transparent 65%,rgba(0,0,0,0.15) 100%);
      pointer-events:none;
    }
    .content{
      position:relative;z-index:3;
      display:flex;align-items:center;
      height:100%;padding:0 5.5%;
      pointer-events:none;
    }
    .text-block{display:flex;flex-direction:column;gap:0.3vw}
    .space-number{
      font-size:clamp(42px,6.5vw,92px);font-weight:900;
      color:white;letter-spacing:-0.04em;line-height:1;
      opacity:0.95;
      text-shadow:0 4px 40px rgba(0,0,0,0.12);
    }
    .divider{
      width:clamp(28px,4vw,60px);height:3px;
      background:rgba(255,255,255,0.5);
      border-radius:2px;margin:clamp(3px,.5vw,8px) 0;
    }
    .space-title{
      font-size:clamp(18px,2.6vw,38px);font-weight:700;
      color:white;letter-spacing:-0.02em;line-height:1.2;
      text-shadow:0 2px 24px rgba(0,0,0,0.1);
    }
    .space-subtitle{
      font-size:clamp(10px,1.1vw,16px);font-weight:500;
      color:rgba(255,255,255,0.6);letter-spacing:0.01em;
      margin-top:clamp(1px,.2vw,3px);
    }
    .icon-deco{
      position:absolute;
      right:8%;top:50%;transform:translateY(-50%);
      width:clamp(80px,12vw,180px);height:clamp(80px,12vw,180px);
      opacity:0.13;z-index:3;pointer-events:none;
    }
    .logo-watermark{
      position:absolute;
      bottom:clamp(10px,1.8vw,28px);
      right:clamp(14px,2.2vw,40px);
      width:clamp(36px,5.5vw,80px);
      opacity:0.1;z-index:3;pointer-events:none;
    }
  </style>
</head>
<body>
  <canvas id="c"></canvas>
  <div class="gradient-top"></div>
  <div class="content">
    <div class="text-block">
      <div class="space-number">${space.id}</div>
      <div class="divider"></div>
      <div class="space-title">${space.title}</div>
      <div class="space-subtitle">${space.subtitle}</div>
    </div>
  </div>
  <div class="icon-deco">${iconSVG}</div>
  <div class="logo-watermark">${LOGO_MARK_WHITE}</div>

  <script>
  (function(){
    var c=document.getElementById('c'),x=c.getContext('2d');
    var dpr=window.devicePixelRatio||1,w,h,t=${space.seed.toFixed(2)};
    var R1=${r1},G1=${g1},B1=${b1};
    var R2=${r2},G2=${g2},B2=${b2};

    function resize(){
      w=window.innerWidth;h=window.innerHeight;
      c.width=w*dpr;c.height=h*dpr;
      c.style.width=w+'px';c.style.height=h+'px';
      x.setTransform(dpr,0,0,dpr,0,0);
    }

    function draw(){
      x.clearRect(0,0,w,h);
      var n=38,cy=h*0.48;

      for(var i=0;i<n;i++){
        var p=i/n;
        var r=Math.floor(R1+p*(R2-R1));
        var g=Math.floor(G1+p*(G2-G1));
        var b=Math.floor(B1+p*(B2-B1));
        var a=(0.06+p*0.24).toFixed(3);

        x.beginPath();
        x.strokeStyle='rgba('+r+','+g+','+b+','+a+')';
        x.lineWidth=1.3;

        for(var px=0;px<=w;px+=3){
          var xN=px/w;
          var y=cy
            +Math.sin(xN*Math.PI*2.5+t*0.6+i*0.22)*(28+i*2.2)
            +Math.sin(xN*Math.PI*5+t*0.3+i*0.13)*(14+i*0.7)
            +Math.cos(xN*Math.PI*1.8+t*0.2)*20
            +(i-n/2)*4.8;
          if(px===0)x.moveTo(px,y);else x.lineTo(px,y);
        }
        x.stroke();
      }

      for(var gl=0;gl<3;gl++){
        x.beginPath();
        x.strokeStyle='${space.glowColor}';
        x.lineWidth=2;
        x.shadowColor='${space.glowShadow}';
        x.shadowBlur=14;
        var off=gl*12;
        for(var px=0;px<=w;px+=3){
          var xN=px/w;
          var y=cy
            +Math.sin(xN*Math.PI*3+t*0.5+off)*65
            +Math.cos(xN*Math.PI*2+t*0.3+off*0.5)*35;
          if(px===0)x.moveTo(px,y);else x.lineTo(px,y);
        }
        x.stroke();
        x.shadowBlur=0;
      }

      t+=0.005;
      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize',resize);
    draw();
  })();
  </script>
</body>
</html>`;
}

// ═══════════════════════════════════════════
// BUILD
// ═══════════════════════════════════════════

const outDir = path.resolve(__dirname, '..', 'Docs', 'banners');
fs.mkdirSync(outDir, { recursive: true });

console.log('\n  Vault · Zoho Learn Animated Banners');
console.log('  ────────────────────────────────────\n');

for (const space of SPACES) {
  const html = generateBannerHTML(space);
  const filename = `${space.slug}.html`;
  fs.writeFileSync(path.join(outDir, filename), html);
  console.log(`  ✓ ${space.id} · ${space.title}  →  banners/${filename}`);
}

console.log(`\n  All banners saved to: Docs/banners/`);
console.log(`\n  Embed URLs (after deploy):`);
for (const space of SPACES) {
  console.log(`    ${space.id} → https://shpanochkin.github.io/vault-knowledge-base/banners/${space.slug}.html`);
}
console.log('');
