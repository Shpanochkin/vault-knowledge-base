const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════
// BRAND ASSETS
// ═══════════════════════════════════════════

const LOGO_WHITE = `<svg width="444" height="103" viewBox="0 0 444 103" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.17 10.58L5.4 27.28C-1.78 34.43-1.8 46.02 5.35 53.2L35.75 83.7C60.16 108.18 99.89 108.26 124.38 83.87L153.86 54.51C161.06 47.34 161.06 35.71 153.86 28.54L135.3 10.06C127.84 2.63 115.75 2.63 108.3 10.06L78.01 40.22L48.25 10.58C41.05 3.41 29.37 3.41 22.17 10.58Z" fill="white"/><path d="M152.94 50.62C120.35 67.63 89.86 51.44 78.01 40.22L109.37 8.75C116.38 1.72 127.81 1.79 134.74 8.89L155.12 29.79C161.29 36.11 160.78 46.53 152.94 50.62Z" fill="#DDDFE4"/><path d="M236.03 82.36C235.51 83.73 234.2 84.63 232.73 84.63H219.75C218.31 84.63 217.03 83.77 216.49 82.44L195.64 31.39C194.7 29.07 196.4 26.54 198.9 26.54H210.39C211.87 26.54 213.18 27.45 213.7 28.83L224.5 58.01C225.07 59.57 227.28 59.54 227.81 57.97L237.73 28.92C238.21 27.49 239.55 26.54 241.06 26.54H252.04C254.51 26.54 256.21 29 255.34 31.3L236.03 82.36Z" fill="white"/><path d="M256.48 68.62C256.48 66.05 256.94 63.71 257.76 61.72C258.69 59.73 259.96 57.98 261.48 56.58C262.99 55.06 264.85 53.89 266.82 53.07C268.92 52.13 271.13 51.43 273.57 51.08L287.17 48.98C288.68 48.74 289.84 48.28 290.43 47.58C291.01 46.87 291.36 46.06 291.36 45C291.36 43.25 290.66 41.85 289.15 40.56C287.75 39.28 285.66 38.69 282.87 38.69C279.73 38.69 277.4 39.51 275.66 41.26C275.05 41.92 274.54 42.61 274.13 43.33C273.07 45.21 271.09 46.83 268.97 46.4L260.61 44.68C258.9 44.33 257.69 42.76 258.15 41.08C258.48 39.91 258.94 38.72 259.5 37.52C260.55 35.3 262.17 33.2 264.15 31.33C266.24 29.46 268.8 27.94 271.94 26.65C275.08 25.37 278.68 24.78 282.98 24.78C287.64 24.78 291.59 25.37 294.84 26.54C298.1 27.82 300.77 29.46 302.75 31.44C304.84 33.55 306.35 36 307.17 38.69C308.1 41.38 308.56 44.3 308.56 47.23V75.63C308.56 77.85 308.68 79.84 308.79 81.59C308.99 83.09 307.7 84.63 306.18 84.63H295.35C294.12 84.63 293.12 83.88 292.98 82.64C292.87 81.59 292.75 80.07 292.75 78.09C291.24 80.54 289.03 82.53 286.36 84.05C283.68 85.57 280.31 86.27 276.47 86.27C273.33 86.27 270.43 85.8 267.99 84.87C265.55 83.81 263.45 82.53 261.71 80.89C259.96 79.25 258.69 77.38 257.87 75.28C256.94 73.18 256.48 70.95 256.48 68.62ZM280.78 73.41C282.05 73.41 283.33 73.29 284.61 72.94C285.89 72.59 287.05 71.89 287.98 71.07C289.03 70.14 289.84 68.97 290.43 67.45C291.01 65.93 291.36 64.06 291.36 61.84V59.27L280.43 61.02C278.57 61.37 277.06 61.95 275.78 63.01C274.5 63.94 273.92 65.46 273.92 67.45C273.92 68.97 274.38 70.37 275.43 71.54C276.47 72.83 278.33 73.41 280.78 73.41Z" fill="white"/><path d="M358.19 84.63C356.54 84.63 355.16 83.46 355.01 81.83C354.89 80.54 354.89 79.6 354.89 78.79C353.38 81.24 351.17 83.11 348.27 84.16C345.36 85.33 342.34 85.92 339.43 85.92C335.94 85.92 332.8 85.33 330.13 84.05C327.34 82.88 325.01 81.24 323.15 79.14C321.29 77.15 319.9 74.7 318.97 72.01C317.92 69.32 317.46 66.4 317.46 63.24V30.06C317.46 28.11 319.03 26.54 320.98 26.54H331.61C333.55 26.54 335.13 28.11 335.13 30.06V59.5C335.13 62.3 335.94 64.64 337.45 66.63C338.96 68.62 341.29 69.55 344.43 69.55C347.34 69.55 349.78 68.62 351.52 66.75C353.26 64.99 354.08 62.54 354.08 59.62V30.06C354.08 28.11 355.66 26.54 357.6 26.54H368.23C370.17 26.54 371.75 28.11 371.75 30.06V74.23C371.75 76.92 371.87 79.14 371.98 81.01C372.09 82.86 370.54 84.63 368.69 84.63H358.19Z" fill="white"/><path d="M385.32 84.63C383.37 84.63 381.8 83.05 381.8 81.11V3.52C381.8 1.58 383.37 0 385.32 0H395.95C397.89 0 399.47 1.58 399.47 3.52V81.11C399.47 83.05 397.89 84.63 395.95 84.63H385.32Z" fill="white"/><path d="M432 26.54H439.76C441.7 26.54 443.28 28.11 443.28 30.06V38.56C443.28 40.51 441.7 42.08 439.76 42.08H432V63.82C432 66.28 432.58 67.8 433.75 68.62C434.91 69.43 436.42 69.9 438.4 69.9C439.33 69.9 440.26 69.79 441.07 69.67C442.1 69.52 443.05 70.29 443.05 71.33V81.51C443.05 83.03 442.09 84.4 440.65 84.86C440.52 84.9 440.39 84.94 440.26 84.98C438.75 85.45 436.65 85.68 433.86 85.68C427.82 85.68 423.05 84.05 419.68 80.66C416.31 77.38 414.56 72.82 414.56 66.98V42.08H407.85C405.91 42.08 404.33 40.51 404.33 38.56V29.44C404.33 27.84 405.63 26.54 407.24 26.54C410.26 26.54 412.47 25.6 413.98 23.85C415.49 22.09 416.19 19.76 416.19 17.07V13.11C416.19 11.16 417.77 9.59 419.71 9.59H428.48C430.43 9.59 432 11.16 432 13.11V26.54Z" fill="white"/></svg>`;

const LOGO_COLOR = `<svg width="444" height="103" viewBox="0 0 444 103" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.17 10.58L5.4 27.28C-1.78 34.43-1.8 46.02 5.35 53.2L35.75 83.7C60.16 108.18 99.89 108.26 124.38 83.87L153.86 54.51C161.06 47.34 161.06 35.71 153.86 28.54L135.3 10.06C127.84 2.63 115.75 2.63 108.3 10.06L78.01 40.22L48.25 10.58C41.05 3.41 29.37 3.41 22.17 10.58Z" fill="#0019FF"/><path d="M152.94 50.62C120.35 67.63 89.86 51.44 78.01 40.22L109.37 8.75C116.38 1.72 127.81 1.79 134.74 8.89L155.12 29.79C161.29 36.11 160.78 46.53 152.94 50.62Z" fill="#0117D7"/><path d="M236.03 82.36C235.51 83.73 234.2 84.63 232.73 84.63H219.75C218.31 84.63 217.03 83.77 216.49 82.44L195.64 31.39C194.7 29.07 196.4 26.54 198.9 26.54H210.39C211.87 26.54 213.18 27.45 213.7 28.83L224.5 58.01C225.07 59.57 227.28 59.54 227.81 57.97L237.73 28.92C238.21 27.49 239.55 26.54 241.06 26.54H252.04C254.51 26.54 256.21 29 255.34 31.3L236.03 82.36Z" fill="#0019FF"/><path d="M256.48 68.62C256.48 66.05 256.94 63.71 257.76 61.72C258.69 59.73 259.96 57.98 261.48 56.58C262.99 55.06 264.85 53.89 266.82 53.07C268.92 52.13 271.13 51.43 273.57 51.08L287.17 48.98C288.68 48.74 289.84 48.28 290.43 47.58C291.01 46.87 291.36 46.06 291.36 45C291.36 43.25 290.66 41.85 289.15 40.56C287.75 39.28 285.66 38.69 282.87 38.69C279.73 38.69 277.4 39.51 275.66 41.26C275.05 41.92 274.54 42.61 274.13 43.33C273.07 45.21 271.09 46.83 268.97 46.4L260.61 44.68C258.9 44.33 257.69 42.76 258.15 41.08C258.48 39.91 258.94 38.72 259.5 37.52C260.55 35.3 262.17 33.2 264.15 31.33C266.24 29.46 268.8 27.94 271.94 26.65C275.08 25.37 278.68 24.78 282.98 24.78C287.64 24.78 291.59 25.37 294.84 26.54C298.1 27.82 300.77 29.46 302.75 31.44C304.84 33.55 306.35 36 307.17 38.69C308.1 41.38 308.56 44.3 308.56 47.23V75.63C308.56 77.85 308.68 79.84 308.79 81.59C308.99 83.09 307.7 84.63 306.18 84.63H295.35C294.12 84.63 293.12 83.88 292.98 82.64C292.87 81.59 292.75 80.07 292.75 78.09C291.24 80.54 289.03 82.53 286.36 84.05C283.68 85.57 280.31 86.27 276.47 86.27C273.33 86.27 270.43 85.8 267.99 84.87C265.55 83.81 263.45 82.53 261.71 80.89C259.96 79.25 258.69 77.38 257.87 75.28C256.94 73.18 256.48 70.95 256.48 68.62ZM280.78 73.41C282.05 73.41 283.33 73.29 284.61 72.94C285.89 72.59 287.05 71.89 287.98 71.07C289.03 70.14 289.84 68.97 290.43 67.45C291.01 65.93 291.36 64.06 291.36 61.84V59.27L280.43 61.02C278.57 61.37 277.06 61.95 275.78 63.01C274.5 63.94 273.92 65.46 273.92 67.45C273.92 68.97 274.38 70.37 275.43 71.54C276.47 72.83 278.33 73.41 280.78 73.41Z" fill="#0019FF"/><path d="M358.19 84.63C356.54 84.63 355.16 83.46 355.01 81.83C354.89 80.54 354.89 79.6 354.89 78.79C353.38 81.24 351.17 83.11 348.27 84.16C345.36 85.33 342.34 85.92 339.43 85.92C335.94 85.92 332.8 85.33 330.13 84.05C327.34 82.88 325.01 81.24 323.15 79.14C321.29 77.15 319.9 74.7 318.97 72.01C317.92 69.32 317.46 66.4 317.46 63.24V30.06C317.46 28.11 319.03 26.54 320.98 26.54H331.61C333.55 26.54 335.13 28.11 335.13 30.06V59.5C335.13 62.3 335.94 64.64 337.45 66.63C338.96 68.62 341.29 69.55 344.43 69.55C347.34 69.55 349.78 68.62 351.52 66.75C353.26 64.99 354.08 62.54 354.08 59.62V30.06C354.08 28.11 355.66 26.54 357.6 26.54H368.23C370.17 26.54 371.75 28.11 371.75 30.06V74.23C371.75 76.92 371.87 79.14 371.98 81.01C372.09 82.86 370.54 84.63 368.69 84.63H358.19Z" fill="#0019FF"/><path d="M385.32 84.63C383.37 84.63 381.8 83.05 381.8 81.11V3.52C381.8 1.58 383.37 0 385.32 0H395.95C397.89 0 399.47 1.58 399.47 3.52V81.11C399.47 83.05 397.89 84.63 395.95 84.63H385.32Z" fill="#0019FF"/><path d="M432 26.54H439.76C441.7 26.54 443.28 28.11 443.28 30.06V38.56C443.28 40.51 441.7 42.08 439.76 42.08H432V63.82C432 66.28 432.58 67.8 433.75 68.62C434.91 69.43 436.42 69.9 438.4 69.9C439.33 69.9 440.26 69.79 441.07 69.67C442.1 69.52 443.05 70.29 443.05 71.33V81.51C443.05 83.03 442.09 84.4 440.65 84.86C440.52 84.9 440.39 84.94 440.26 84.98C438.75 85.45 436.65 85.68 433.86 85.68C427.82 85.68 423.05 84.05 419.68 80.66C416.31 77.38 414.56 72.82 414.56 66.98V42.08H407.85C405.91 42.08 404.33 40.51 404.33 38.56V29.44C404.33 27.84 405.63 26.54 407.24 26.54C410.26 26.54 412.47 25.6 413.98 23.85C415.49 22.09 416.19 19.76 416.19 17.07V13.11C416.19 11.16 417.77 9.59 419.71 9.59H428.48C430.43 9.59 432 11.16 432 13.11V26.54Z" fill="#0019FF"/></svg>`;

const LOGO_MARK = `<svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.17 7.58L5.4 24.28C-1.78 31.43-1.8 43.02 5.35 50.2L35.75 80.7C60.16 105.18 99.89 105.26 124.38 80.87L153.86 51.51C161.06 44.34 161.06 32.71 153.86 25.54L135.3 7.06C127.84-0.37 115.75-0.37 108.3 7.06L78.01 37.22L48.25 7.58C41.05 0.41 29.37 0.41 22.17 7.58Z" fill="#0019FF"/><path d="M152.94 47.62C120.35 64.63 89.86 48.44 78.01 37.22L109.37 5.75C116.38-1.28 127.81-1.21 134.74 5.89L155.12 26.79C161.29 33.11 160.78 43.53 152.94 47.62Z" fill="#0117D7"/></svg>`;

// ═══════════════════════════════════════════
// WAVE PATTERN GENERATOR
// ═══════════════════════════════════════════

function generateWaveSVG(width = 1440, height = 560, seed = 0) {
  const count = 40;
  const centerY = height * 0.5;
  let paths = '';

  for (let i = 0; i < count; i++) {
    const progress = i / count;
    const r = Math.floor(0 + progress * 97);
    const g = Math.floor(25 + progress * 57);
    const b = Math.floor(255 - progress * 11);
    const alpha = (0.06 + progress * 0.22).toFixed(3);

    let d = '';
    for (let x = 0; x <= width; x += 4) {
      const xN = x / width;
      const y = centerY
        + Math.sin(xN * Math.PI * 2.5 + seed + i * 0.22) * (35 + i * 2.5)
        + Math.sin(xN * Math.PI * 5 + seed * 0.7 + i * 0.13) * (18 + i * 0.8)
        + Math.cos(xN * Math.PI * 1.8 + seed * 0.3) * 25
        + (i - count / 2) * 5.5;
      d += (x === 0 ? 'M' : 'L') + `${x},${y.toFixed(1)} `;
    }
    paths += `<path d="${d}" stroke="rgba(${r},${g},${b},${alpha})" fill="none" stroke-width="1.2"/>`;
  }

  // Add a few glowing accent lines
  for (let g = 0; g < 3; g++) {
    let d = '';
    const offset = g * 12 + seed * 2;
    for (let x = 0; x <= width; x += 4) {
      const xN = x / width;
      const y = centerY
        + Math.sin(xN * Math.PI * 3 + offset) * 80
        + Math.cos(xN * Math.PI * 2 + offset * 0.5) * 40;
      d += (x === 0 ? 'M' : 'L') + `${x},${y.toFixed(1)} `;
    }
    paths += `<path d="${d}" stroke="rgba(0,25,255,0.35)" fill="none" stroke-width="2" filter="url(#glow)"/>`;
  }

  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs><filter id="glow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    ${paths}
  </svg>`;
}

function generateFooterWaveSVG() {
  const width = 1440, height = 120, count = 15;
  let paths = '';
  for (let i = 0; i < count; i++) {
    const progress = i / count;
    const alpha = (0.04 + progress * 0.12).toFixed(3);
    let d = '';
    for (let x = 0; x <= width; x += 6) {
      const xN = x / width;
      const y = height / 2 + Math.sin(xN * Math.PI * 3 + i * 0.3) * 20 + (i - count / 2) * 4;
      d += (x === 0 ? 'M' : 'L') + `${x},${y.toFixed(1)} `;
    }
    paths += `<path d="${d}" stroke="rgba(0,25,255,${alpha})" fill="none" stroke-width="1"/>`;
  }
  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${paths}</svg>`;
}

// ═══════════════════════════════════════════
// HERO ICONS (SVG per document type)
// ═══════════════════════════════════════════

const ICONS = {
  shield: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 4L6 12V22C6 33.1 13.7 43.3 24 46C34.3 43.3 42 33.1 42 22V12L24 4Z" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 24L22 30L34 18" stroke="rgba(255,255,255,0.8)" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chat: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 10C8 8.9 8.9 8 10 8H30C31.1 8 32 8.9 32 10V26C32 27.1 31.1 28 30 28H14L8 34V10Z" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 28V32C16 33.1 16.9 34 18 34H34L40 40V18C40 16.9 39.1 16 38 16H32" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  laptop: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="10" width="32" height="22" rx="2" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none"/><path d="M4 38H44" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round"/><path d="M16 32L14 38H34L32 32" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  invoice: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6H30L38 14V40C38 41.1 37.1 42 36 42H12C10.9 42 10 41.1 10 40V8C10 6.9 10.9 6 12 6Z" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 6V14H38" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 22V34" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round"/><path d="M28 26C28 24.3 26.2 23 24 23C21.8 23 20 24.3 20 26C20 27.7 21.8 29 24 29C26.2 29 28 30.3 28 32C28 33.7 26.2 35 24 35C21.8 35 20 33.7 20 32" stroke="rgba(255,255,255,0.8)" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  book: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 12C24 12 20 6 10 6V36C20 36 24 40 24 40C24 40 28 36 38 36V6C28 6 24 12 24 12Z" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 12V40" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round"/></svg>`,
  calendar: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="12" width="32" height="28" rx="3" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none"/><path d="M8 20H40" stroke="rgba(255,255,255,0.6)" stroke-width="2"/><path d="M16 8V14" stroke="rgba(255,255,255,0.8)" stroke-width="2.5" stroke-linecap="round"/><path d="M32 8V14" stroke="rgba(255,255,255,0.8)" stroke-width="2.5" stroke-linecap="round"/><circle cx="18" cy="28" r="2" fill="rgba(255,255,255,0.5)"/><circle cx="24" cy="28" r="2" fill="rgba(255,255,255,0.5)"/><circle cx="30" cy="28" r="2" fill="rgba(255,255,255,0.5)"/><circle cx="18" cy="34" r="2" fill="rgba(255,255,255,0.5)"/></svg>`
};

// ═══════════════════════════════════════════
// CONTENT RENDERER
// ═══════════════════════════════════════════

function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function renderContent(items) {
  return items.map(item => {
    switch (item.type) {
      case 'p':
        return `<p>${item.html || esc(item.text)}</p>`;
      case 'list':
        return `<ul>${item.items.map(li => `<li>${li}</li>`).join('')}</ul>`;
      case 'olist':
        return `<ol class="numbered-list">${item.items.map(li => `<li>${li}</li>`).join('')}</ol>`;
      case 'callout':
        return `<div class="callout ${item.variant || 'important'}">${item.html || esc(item.text)}</div>`;
      case 'table':
        return `<div class="table-wrapper"><table>
          <thead><tr>${item.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${item.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>`;
      case 'subsection': {
        const subNum = item.number ? `<span class="subsection-number">${item.number}.</span> ` : '';
        return `<div class="subsection"><h3>${subNum}${item.title}</h3>${renderContent(item.content)}</div>`;
      }
      case 'definitions':
        return `<div class="definitions-grid">${item.items.map(d =>
          `<div class="definition"><span class="definition-term">${d.term}</span> <span class="definition-dash">&mdash;</span> <span class="definition-text">${d.desc}</span></div>`
        ).join('')}</div>`;
      default:
        return '';
    }
  }).join('\n');
}

// ═══════════════════════════════════════════
// HTML TEMPLATE
// ═══════════════════════════════════════════

function generateHTML(doc) {
  const heroWave = generateWaveSVG(1440, 560, doc.seed || 0);
  const footerWave = generateFooterWaveSVG();

  const sectionsHTML = doc.sections.map((s, idx) => `
    <div class="section" style="transition-delay: ${idx * 0.05}s">
      <div class="section-header">
        <div class="section-number">${s.number}</div>
        <h2>${s.title}</h2>
      </div>
      <div class="section-body">
        ${renderContent(s.content)}
      </div>
    </div>
  `).join('\n');

  const bodyClass = doc.style === 'strict' ? 'strict' : '';
  const signatureHTML = doc.signatureBlock ? `
  <section class="signature-block">
    <div class="signature-stamp">${doc.signatureBlock.stampLabel || 'Approved'}</div>
    ${doc.signatureBlock.intro ? `<div class="signature-meta">${doc.signatureBlock.intro}</div>` : ''}
    <div class="signature-line-wrap">
      <div class="signature-line"></div>
      <div class="signature-name">${doc.signatureBlock.name}</div>
      <div class="signature-title">${doc.signatureBlock.title}</div>
    </div>
    <div class="signature-date">${doc.signatureBlock.dateLabel || 'Date'}: ${doc.signatureBlock.date}</div>
    ${doc.signatureBlock.method ? `<div class="signature-method">${doc.signatureBlock.method}</div>` : ''}
  </section>` : '';
  const lang = doc.lang || 'en';

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${doc.title} — Vault</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --deep-blue: #0019FF;
      --neon-blue: #6152F4;
      --white: #FFFFFF;
      --black: #191B20;
      --g100: #F5F6F8;
      --g200: #E8E9ED;
      --g300: #D1D3D9;
      --g500: #8B8D94;
      --g700: #4A4C52;
      --g900: #2A2C32;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: var(--g900);
      background: var(--white);
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* ── Progress Bar ── */
    .progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      width: 0%;
      background: linear-gradient(90deg, var(--deep-blue), var(--neon-blue));
      z-index: 9999;
      transition: width 0.15s ease-out;
    }

    /* ── Hero ── */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: var(--black);
      overflow: hidden;
      padding: 0;
    }

    .hero-wave-static {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .hero-wave-static svg {
      width: 100%;
      height: 100%;
    }

    #waveCanvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .hero-gradient {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40%;
      background: linear-gradient(to top, var(--black), transparent);
      z-index: 2;
    }

    .hero-inner {
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 48px 80px 80px;
      min-height: 0;
    }

    .hero-top-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      margin-bottom: 40px;
    }

    .hero-top-row .logo { text-decoration: none; }
    .hero-top-row .logo svg { height: 32px; width: auto; display: block; }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 20px;
      border-radius: 100px;
      border: 1px solid rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.6);
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      letter-spacing: 0.3px;
      transition: all 0.25s ease;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .back-btn:hover {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.25);
      color: rgba(255,255,255,0.9);
    }

    .back-btn svg {
      width: 16px; height: 16px;
      stroke: currentColor;
      transition: transform 0.2s ease;
    }

    .back-btn:hover svg { transform: translateX(-3px); }

    .footer-back {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 22px;
      border-radius: 100px;
      border: 1px solid var(--g200);
      background: var(--g100);
      color: var(--g700);
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.25s ease;
    }

    .footer-back:hover {
      background: rgba(0,25,255,0.05);
      border-color: rgba(0,25,255,0.2);
      color: var(--deep-blue);
    }

    .footer-back svg {
      width: 16px; height: 16px;
      stroke: currentColor;
      transition: transform 0.2s ease;
    }

    .footer-back:hover svg { transform: translateX(-3px); }

    .hero-spacer { flex: 1; }

    .hero-content {
      max-width: 900px;
      flex-shrink: 0;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 22px;
      border: 1px solid rgba(97,82,244,0.4);
      border-radius: 100px;
      color: rgba(255,255,255,0.75);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      background: rgba(97,82,244,0.12);
      margin-bottom: 40px;
    }

    .hero h1 {
      font-size: clamp(52px, 7.5vw, 88px);
      font-weight: 900;
      color: var(--white);
      line-height: 1.0;
      letter-spacing: -0.04em;
      margin-bottom: 20px;
    }

    .hero h1 .highlight {
      background: linear-gradient(135deg, var(--deep-blue), var(--neon-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 18px;
      color: rgba(255,255,255,0.5);
      font-weight: 400;
      max-width: 500px;
      line-height: 1.6;
    }

    .hero-watermark {
      position: absolute;
      right: -60px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.025;
      z-index: 1;
      pointer-events: none;
    }

    .hero-watermark svg { width: 500px; height: auto; }

    .scroll-hint {
      position: absolute;
      bottom: 40px;
      right: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      z-index: 5;
    }

    .scroll-hint span {
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.25);
      font-weight: 500;
      writing-mode: vertical-rl;
    }

    .scroll-line {
      width: 1px;
      height: 60px;
      background: rgba(255,255,255,0.15);
      position: relative;
      overflow: hidden;
    }

    .scroll-line::after {
      content: '';
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(to bottom, transparent, var(--deep-blue));
      animation: scrollDown 2s ease-in-out infinite;
    }

    @keyframes scrollDown {
      0% { top: -50%; }
      100% { top: 150%; }
    }

    /* ── Transition zone ── */
    .hero-to-content {
      height: 120px;
      background: linear-gradient(to bottom, var(--black), var(--white));
    }

    /* ── Content Area ── */
    .content {
      max-width: 820px;
      margin: 0 auto;
      padding: 40px 40px 80px;
    }

    .intro-text {
      font-size: 17px;
      color: var(--g700);
      line-height: 1.85;
      margin-bottom: 56px;
      padding-bottom: 56px;
      border-bottom: 1px solid var(--g200);
    }

    /* ── Sections ── */
    .section {
      margin-bottom: 56px;
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .section-header {
      display: flex;
      align-items: baseline;
      gap: 20px;
      margin-bottom: 20px;
    }

    .section-number {
      font-size: 56px;
      font-weight: 900;
      background: linear-gradient(150deg, var(--deep-blue), var(--neon-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
      letter-spacing: -0.04em;
      flex-shrink: 0;
      min-width: 70px;
    }

    .section h2 {
      font-size: 26px;
      font-weight: 800;
      color: var(--g900);
      letter-spacing: -0.02em;
      line-height: 1.2;
    }

    .section-body {
      padding-left: 90px;
    }

    .section-body p {
      margin-bottom: 14px;
      font-size: 15.5px;
      line-height: 1.8;
      color: var(--g700);
    }

    .section-body strong { color: var(--g900); font-weight: 600; }

    .section-body ul {
      list-style: none;
      margin: 14px 0;
    }

    .section-body ul li {
      position: relative;
      padding-left: 24px;
      margin-bottom: 10px;
      font-size: 15.5px;
      line-height: 1.75;
      color: var(--g700);
    }

    .section-body ul li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 11px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--deep-blue), var(--neon-blue));
    }

    /* ── Subsections ── */
    .subsection {
      margin: 20px 0;
      padding: 24px 28px;
      background: var(--g100);
      border-radius: 16px;
      border-left: 3px solid var(--deep-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .subsection:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 30px rgba(0,25,255,0.06);
    }

    .subsection h3 {
      font-size: 17px;
      font-weight: 700;
      color: var(--g900);
      margin-bottom: 10px;
    }

    .subsection p { font-size: 15px; }
    .subsection ul li { font-size: 15px; }

    /* ── Callout ── */
    .callout {
      margin: 20px 0;
      padding: 20px 24px;
      border-radius: 14px;
      font-size: 15px;
      line-height: 1.75;
    }

    .callout.important {
      background: linear-gradient(135deg, rgba(0,25,255,0.04), rgba(97,82,244,0.04));
      border: 1px solid rgba(0,25,255,0.12);
      color: #1a2a6c;
    }

    .callout.tip {
      background: linear-gradient(135deg, rgba(0,200,150,0.04), rgba(0,200,150,0.02));
      border: 1px solid rgba(0,200,150,0.15);
      color: #006B4F;
    }

    .callout.closing {
      background: linear-gradient(135deg, rgba(0,25,255,0.03), rgba(97,82,244,0.06));
      border: 1px solid rgba(97,82,244,0.12);
      color: var(--neon-blue);
      font-style: italic;
      font-weight: 500;
      text-align: center;
      padding: 28px;
      margin-top: 40px;
    }

    .callout strong { font-weight: 700; }

    /* ── Table ── */
    .table-wrapper {
      margin: 20px 0;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid var(--g200);
    }

    table { width: 100%; border-collapse: collapse; }

    th {
      background: var(--black);
      color: var(--white);
      font-weight: 600;
      font-size: 13px;
      padding: 14px 22px;
      text-align: left;
      letter-spacing: 0.3px;
    }

    td {
      padding: 14px 22px;
      font-size: 15px;
      border-bottom: 1px solid var(--g200);
      color: var(--g700);
    }

    tr:last-child td { border-bottom: none; }
    tr:hover td { background: rgba(0,25,255,0.015); }

    /* ── Definitions (Glossary) ── */
    .definitions-grid {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin: 12px 0;
    }

    .definition {
      padding: 14px 20px;
      background: var(--g100);
      border-radius: 12px;
      font-size: 15px;
      line-height: 1.7;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      border: 1px solid transparent;
    }

    .definition:hover {
      background: rgba(0,25,255,0.03);
      border-color: rgba(0,25,255,0.08);
      transform: translateX(6px);
    }

    .definition-term {
      font-weight: 700;
      color: var(--g900);
    }

    .definition-dash { color: var(--g300); margin: 0 2px; }

    .definition-text { color: var(--g700); }

    /* ── Footer ── */
    .footer {
      background: var(--black);
      padding: 48px 80px;
      position: relative;
      overflow: hidden;
    }

    .footer-wave {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.2;
    }

    .footer-wave svg { width: 100%; height: 100%; }

    .footer-content {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 820px;
      margin: 0 auto;
    }

    .footer-left { display: flex; align-items: center; gap: 24px; }

    .footer-left .logo svg { height: 22px; width: auto; opacity: 0.7; }

    .footer-divider {
      width: 1px;
      height: 20px;
      background: rgba(255,255,255,0.15);
    }

    .footer-label {
      font-size: 12px;
      color: rgba(255,255,255,0.35);
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .footer-right {
      font-size: 12px;
      color: rgba(255,255,255,0.25);
      font-weight: 400;
    }

    /* ── Numbered list (ol) ── */
    .section-body ol.numbered-list {
      list-style: decimal;
      margin: 14px 0 14px 24px;
      padding-left: 8px;
    }
    .section-body ol.numbered-list li {
      font-size: 15.5px;
      line-height: 1.75;
      color: var(--g700);
      padding-left: 6px;
      margin-bottom: 8px;
    }

    /* ── Subsection numbering ── */
    .subsection-number {
      font-weight: 700;
      color: var(--deep-blue);
      margin-right: 4px;
    }

    /* ── Strict body mode (regulations / formal documents) ── */
    body.strict .content { max-width: 760px; padding-top: 56px; }
    body.strict .intro-text {
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 40px;
      padding-bottom: 32px;
    }
    body.strict .section { margin-bottom: 36px; }
    body.strict .section-header {
      display: block;
      align-items: initial;
      gap: 0;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--g200);
    }
    body.strict .section-number {
      display: inline;
      font-size: 22px;
      font-weight: 800;
      background: none !important;
      -webkit-background-clip: initial;
      -webkit-text-fill-color: var(--g900);
      background-clip: initial;
      color: var(--g900);
      letter-spacing: -0.01em;
      min-width: 0;
      margin-right: 12px;
      line-height: 1.3;
    }
    body.strict .section h2 {
      display: inline;
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.01em;
    }
    body.strict .section-body { padding-left: 0; }
    body.strict .section-body p,
    body.strict .section-body ul li,
    body.strict .section-body ol.numbered-list li {
      font-size: 14.5px;
      line-height: 1.7;
    }
    body.strict .subsection {
      background: none;
      border-left: none;
      border-radius: 0;
      padding: 14px 0 0 0;
      margin: 12px 0 14px 0;
    }
    body.strict .subsection:hover {
      transform: none;
      box-shadow: none;
    }
    body.strict .subsection h3 {
      font-size: 15.5px;
      font-weight: 700;
      color: var(--g900);
      margin-bottom: 8px;
      letter-spacing: 0;
    }
    body.strict .subsection p { font-size: 14.5px; }
    body.strict .subsection ul li { font-size: 14.5px; }
    body.strict .callout {
      padding: 14px 18px;
      font-size: 14px;
      border-radius: 8px;
    }

    /* ── Signature block (PDF only) ── */
    .signature-block {
      display: none;
      page-break-before: always;
      page-break-after: avoid;
      break-before: page;
      break-after: avoid;
      padding: 0 60px;
      margin: 0 auto;
      text-align: center;
      color: var(--g900);
      background: var(--white);
    }
    body.pdf-mode .signature-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 260mm;
    }
    @media print {
      .signature-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 260mm;
      }
    }
    .signature-inner {
      width: 100%;
      max-width: 600px;
    }

    .signature-stamp {
      display: inline-block;
      margin: 0 auto 56px;
      padding: 18px 64px;
      border: 3px double var(--deep-blue);
      color: var(--deep-blue);
      font-weight: 800;
      letter-spacing: 8px;
      font-size: 22px;
      text-transform: uppercase;
      transform: rotate(-2deg);
      border-radius: 6px;
    }
    .signature-meta {
      margin-bottom: 60px;
      color: var(--g700);
      font-size: 14px;
      line-height: 1.8;
    }
    .signature-meta strong { color: var(--g900); font-weight: 600; }
    .signature-line-wrap {
      display: inline-block;
      text-align: center;
      min-width: 320px;
    }
    .signature-line {
      width: 100%;
      border-bottom: 1px solid var(--g700);
      height: 56px;
      margin-bottom: 10px;
    }
    .signature-name {
      font-weight: 700;
      font-size: 16px;
      color: var(--g900);
    }
    .signature-title {
      color: var(--g500);
      font-size: 13px;
      margin-top: 4px;
      font-weight: 500;
    }
    .signature-date {
      margin-top: 28px;
      font-size: 14px;
      color: var(--g700);
    }
    .signature-method {
      margin-top: 6px;
      font-size: 11px;
      color: var(--g500);
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    /* ── PDF Mode ── */
    body.pdf-mode .progress-bar,
    body.pdf-mode .scroll-hint,
    body.pdf-mode #waveCanvas,
    body.pdf-mode .footer-back,
    body.pdf-mode .footer-back-wrap { display: none !important; }
    @media print {
      .footer-back,
      .footer-back-wrap { display: none !important; }
    }

    body.pdf-mode .hero {
      min-height: 0;
      height: 100vh;
      page-break-after: always;
    }

    body.pdf-mode .hero-to-content { height: 0; display: none; }

    body.pdf-mode .section {
      opacity: 1 !important;
      transform: none !important;
    }

    body.pdf-mode .definition {
      page-break-inside: avoid;
    }

    body.pdf-mode .definition:hover,
    body.pdf-mode .subsection:hover {
      transform: none;
      box-shadow: none;
    }

    body.pdf-mode .footer { page-break-inside: avoid; }

    @media print {
      .progress-bar, .scroll-hint, #waveCanvas { display: none !important; }
      .hero { min-height: 0; height: 100vh; page-break-after: always; }
      .hero-to-content { display: none; }
      .section { opacity: 1 !important; transform: none !important; }
      .definition { page-break-inside: avoid; }
      .footer { page-break-inside: avoid; }
    }

    /* ── Responsive ── */
    @media (max-width: 768px) {
      .hero { padding: 40px 30px 60px; }
      .hero-top { left: 30px; right: 30px; top: 24px; }
      .hero h1 { font-size: 40px; }
      .content { padding: 30px 24px 60px; }
      .section-body { padding-left: 0; }
      .section-number { font-size: 40px; min-width: 50px; }
      .footer { padding: 36px 30px; }
      .scroll-hint { display: none; }
    }
  </style>
</head>
<body class="${bodyClass}">
  <div class="progress-bar" id="progressBar"></div>

  <!-- ▌ HERO ▌ -->
  <section class="hero">
    <div class="hero-wave-static">${heroWave}</div>
    <canvas id="waveCanvas"></canvas>
    <div class="hero-gradient"></div>

    <div class="hero-inner">
      <div class="hero-top-row">
        <a href="index.html" class="logo">${LOGO_WHITE}</a>
        <a href="${doc.backHref || 'index.html'}" class="back-btn"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>${doc.backLabelShort || 'All Documents'}</a>
      </div>
      <div class="hero-spacer"></div>
      <div class="hero-content">
        <div class="hero-badge">${doc.badge}</div>
        <h1>${doc.heroTitle}</h1>
        <p class="hero-subtitle">${doc.subtitle}</p>
      </div>
    </div>

    <div class="hero-watermark">
      <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.17 7.58L5.4 24.28C-1.78 31.43-1.8 43.02 5.35 50.2L35.75 80.7C60.16 105.18 99.89 105.26 124.38 80.87L153.86 51.51C161.06 44.34 161.06 32.71 153.86 25.54L135.3 7.06C127.84-0.37 115.75-0.37 108.3 7.06L78.01 37.22L48.25 7.58C41.05 0.41 29.37 0.41 22.17 7.58Z" fill="white"/>
        <path d="M152.94 47.62C120.35 64.63 89.86 48.44 78.01 37.22L109.37 5.75C116.38-1.28 127.81-1.21 134.74 5.89L155.12 26.79C161.29 33.11 160.78 43.53 152.94 47.62Z" fill="rgba(255,255,255,0.5)"/>
      </svg>
    </div>

    <div class="scroll-hint">
      <span>scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>

  <!-- ▌ TRANSITION ▌ -->
  <div class="hero-to-content"></div>

  <!-- ▌ CONTENT ▌ -->
  <main class="content">
    ${doc.intro ? `<div class="intro-text">${doc.intro}</div>` : ''}
    ${sectionsHTML}
    ${doc.closing ? `<div class="callout closing">${doc.closing}</div>` : ''}
    <div class="footer-back-wrap" style="text-align:center;margin-top:48px;">
      <a href="${doc.backHref || 'index.html'}" class="footer-back"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>${doc.backLabel || 'Back to All Documents'}</a>
    </div>
  </main>

  ${signatureHTML}

  <!-- ▌ FOOTER ▌ -->
  <footer class="footer">
    <div class="footer-wave">${footerWave}</div>
    <div class="footer-content">
      <div class="footer-left">
        <div class="logo">${LOGO_WHITE}</div>
        <div class="footer-divider"></div>
        <span class="footer-label">Confidential &middot; Internal Use Only</span>
      </div>
      <div class="footer-right"><a href="admin.html" style="color:rgba(255,255,255,0.12);text-decoration:none;font-size:11px;" title="Admin">Manage</a></div>
    </div>
  </footer>

  <!-- ▌ SCRIPTS ▌ -->
  <script>
    // ── Reading progress bar ──
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      document.getElementById('progressBar').style.width = pct + '%';
    });

    // ── Scroll reveal ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.section').forEach(s => observer.observe(s));

    // ── Canvas wave animation ──
    (function() {
      const canvas = document.getElementById('waveCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let dpr = window.devicePixelRatio || 1;
      let w, h, time = ${(doc.seed || 0).toFixed(2)};

      function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        w = rect.width;
        h = rect.height;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      function draw() {
        ctx.clearRect(0, 0, w, h);
        const lineCount = 40;
        const centerY = h * 0.48;

        for (let i = 0; i < lineCount; i++) {
          const p = i / lineCount;
          const r = Math.floor(p * 97);
          const g = Math.floor(25 + p * 57);
          const b = Math.floor(255 - p * 11);
          const a = (0.05 + p * 0.22).toFixed(3);

          ctx.beginPath();
          ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
          ctx.lineWidth = 1.2;

          for (let x = 0; x <= w; x += 3) {
            const xN = x / w;
            const y = centerY
              + Math.sin(xN * Math.PI * 2.5 + time * 0.6 + i * 0.22) * (35 + i * 2.5)
              + Math.sin(xN * Math.PI * 5 + time * 0.3 + i * 0.13) * (18 + i * 0.8)
              + Math.cos(xN * Math.PI * 1.8 + time * 0.2) * 25
              + (i - lineCount / 2) * 5.5;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        // Glowing accent lines
        for (let g = 0; g < 3; g++) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0, 25, 255, 0.3)';
          ctx.lineWidth = 2;
          ctx.shadowColor = 'rgba(0, 25, 255, 0.5)';
          ctx.shadowBlur = 12;
          const off = g * 12;
          for (let x = 0; x <= w; x += 3) {
            const xN = x / w;
            const y = centerY
              + Math.sin(xN * Math.PI * 3 + time * 0.5 + off) * 80
              + Math.cos(xN * Math.PI * 2 + time * 0.3 + off * 0.5) * 40;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        time += 0.006;
        requestAnimationFrame(draw);
      }

      resize();
      window.addEventListener('resize', resize);
      draw();
    })();

    // ── Dynamic content loader from content.json ──
    (function() {
      const DOC_ID = '${doc.id}';
      fetch('content.json').then(r => r.ok ? r.json() : null).catch(() => null).then(data => {
        if (!data || !data[DOC_ID]) return;
        const d = data[DOC_ID];
        const intro = document.querySelector('.intro-text');
        if (intro && d.intro) intro.innerHTML = d.intro;
        const closing = document.querySelector('.callout.closing');
        if (closing && d.closing) closing.innerHTML = d.closing;
        const sections = document.querySelectorAll('.section');
        if (d.sections) d.sections.forEach((s, i) => {
          if (!sections[i]) return;
          const h = sections[i].querySelector('h2');
          const b = sections[i].querySelector('.section-body');
          if (h && s.title) h.textContent = s.title;
          if (b && s.html) b.innerHTML = s.html;
        });
      });
    })();
  </script>
</body>
</html>`;
}

// ═══════════════════════════════════════════
// DOCUMENT DATA
// ═══════════════════════════════════════════

const documents = [
  // ────────────────────────────────────────
  // 1. CODE OF CONDUCT
  // ────────────────────────────────────────
  {
    id: 'Code_of_Conduct',
    title: 'Code of Conduct',
    heroTitle: 'Code of<br>Conduct',
    badge: 'Company Policy',
    subtitle: 'Vault Group — Guidelines for a healthy, inclusive, and productive workplace.',
    icon: ICONS.shield,
    seed: 0,
    intro: 'As a global and diverse team, it is essential that we maintain a positive and respectful work environment. Below are the guidelines we follow to ensure a healthy, inclusive, and productive workplace.',
    closing: "Let's work together to maintain a positive and collaborative environment where everyone can thrive!",
    sections: [
      {
        number: '01', title: 'Respect and Inclusivity',
        content: [
          { type: 'list', items: [
            'Treat all team members with respect, regardless of their background, gender, race, religion, or personal beliefs.',
            'Embrace diversity and create an environment where everyone feels valued and heard.'
          ]}
        ]
      },
      {
        number: '02', title: 'Professionalism',
        content: [
          { type: 'list', items: [
            'Maintain a professional tone in all communications, whether on Slack, email, or during meetings.',
            'Be mindful of your language and always communicate in a clear and constructive manner.'
          ]}
        ]
      },
      {
        number: '03', title: 'No Tolerance for Harassment',
        content: [
          { type: 'list', items: [
            'Harassment, bullying, or any form of disrespectful behavior will not be tolerated. If you witness or experience inappropriate behavior, please report it to HR or a team leader.',
            'This includes but is not limited to: discriminatory language, personal attacks, inappropriate jokes, or offensive content.'
          ]}
        ]
      },
      {
        number: '04', title: 'Collaboration and Teamwork',
        content: [
          { type: 'list', items: [
            'Be supportive of your colleagues. Help when needed, share knowledge, and contribute positively to discussions.',
            'Use channels and meetings as spaces for collaborative problem-solving, not for individual complaints or negative remarks.'
          ]}
        ]
      },
      {
        number: '05', title: 'Accountability and Integrity',
        content: [
          { type: 'list', items: [
            'Take responsibility for your actions, both individually and as part of the team.',
            'Be honest, transparent, and respectful when providing feedback or addressing mistakes.'
          ]}
        ]
      },
      {
        number: '06', title: 'Privacy and Confidentiality',
        content: [
          { type: 'list', items: [
            'Respect the privacy of colleagues and company information.',
            'Do not share sensitive information in public channels or outside the company unless authorized.'
          ]}
        ]
      },
      {
        number: '07', title: 'Work-Life Balance',
        content: [
          { type: 'list', items: [
            'Respect others\u2019 time. Do not expect immediate responses outside of working hours unless it is an urgent matter.',
            'Acknowledge the importance of maintaining a balance between work and personal life for overall well-being.'
          ]}
        ]
      },
      {
        number: '08', title: 'Constructive Communication',
        content: [
          { type: 'list', items: [
            'If you have a concern or disagreement, address it respectfully and constructively. Focus on finding solutions, not placing blame.',
            'Encourage open dialogue and avoid assumptions.'
          ]}
        ]
      },
      {
        number: '09', title: 'Encourage Fun and Positivity',
        content: [
          { type: 'list', items: [
            'While we take our work seriously, we also encourage fun and positive interactions.',
            'Use the appropriate channels for non-work conversations, share jokes, stories, and celebrate milestones.'
          ]}
        ]
      },
      {
        number: '10', title: 'Lead by Example',
        content: [
          { type: 'list', items: [
            'Be a role model for others in terms of behavior, attitude, and professionalism.',
            'By following these guidelines, we create a culture that promotes mutual respect and success.'
          ]}
        ]
      },
    ]
  },

  // ────────────────────────────────────────
  // 2. COMMUNICATION GUIDELINES
  // ────────────────────────────────────────
  {
    id: 'Communication_Guidelines',
    title: 'Communication Guidelines',
    heroTitle: 'Communication<br>Guidelines',
    badge: 'Standards & Best Practices',
    subtitle: 'Vault Group — How we maintain efficient and respectful communication across all platforms.',
    icon: ICONS.chat,
    seed: 2.5,
    intro: 'As a globally distributed team, clear communication is essential to our success. Here is how we maintain efficient and respectful communication across all platforms.',
    closing: "Let's keep communication clear, collaborative, and fun!",
    sections: [
      {
        number: '01', title: 'General Guidelines',
        content: [
          { type: 'list', items: [
            '<strong>Language:</strong> Our primary language for communication is English to ensure inclusivity and understanding for everyone.',
            '<strong>For priority requests:</strong> Use email. For everyday matters: Slack channels.',
            '<strong>Be clear and concise:</strong> Whether writing an email, Slack message, or preparing for a meeting, aim for clarity and brevity.',
            '<strong>Be respectful:</strong> Always maintain a professional and respectful tone in all communications.',
            '<strong>Review the Vault Code of Conduct:</strong> Ensure you are familiar with and follow the Vault Code of Conduct to help maintain a respectful and professional work environment.'
          ]}
        ]
      },
      {
        number: '02', title: 'Email Communication',
        content: [
          { type: 'list', items: [
            'Use clear subject lines to indicate the purpose of your email (e.g., "[ACTION REQUIRED] Team Feedback" or "[FYI] New Process Update").',
            'Always address the recipient(s) and close with a polite signature. Do not forget CC.',
            'Keep emails focused and avoid overly long messages. If multiple topics need to be discussed, use bullet points for structure.',
            'For urgent matters, consider using Slack or scheduling a meeting. Emails are better suited for formal or non-urgent communication.'
          ]}
        ]
      },
      {
        number: '03', title: 'Slack Communication',
        content: [
          { type: 'list', items: [
            '<strong>Public channels &gt; DMs:</strong> Whenever possible, use public channels to keep conversations transparent and inclusive.',
            '<strong>@here and @channel:</strong> Use these mentions sparingly to avoid unnecessary disruptions. Only use them for critical updates.',
            '<strong>Thread replies:</strong> Use threads to keep conversations organized and prevent flooding the channel.',
            '<strong>Be mindful of time zones:</strong> Our distributed team spans various time zones, so be considerate when expecting responses.',
            '<strong>React with emojis:</strong> Use emojis to acknowledge posts/requests. It is a simple way to show you have seen the message without needing to reply.',
            '<strong>Set your status:</strong> When on vacation, sick, commuting, or away from your desk. This helps everyone know your availability and manage expectations for response times.'
          ]}
        ]
      },
      {
        number: '04', title: 'Deadlines for Replies',
        content: [
          { type: 'table', headers: ['Type', 'Response Time'], rows: [
            ['Urgent cases', 'Within 2 hours during working hours'],
            ['Non-urgent cases', 'Within 1 business day']
          ]},
          { type: 'p', text: 'If you are unable to respond in time, kindly let your team know when you will be available.' }
        ]
      },
      {
        number: '05', title: 'Meeting Etiquette',
        content: [
          { type: 'list', items: [
            '<strong>Preparation:</strong> Share an agenda in advance to give participants time to prepare.',
            '<strong>Time Management:</strong> Start and end meetings on time. Respect everyone\u2019s schedule.',
            '<strong>Active Participation:</strong> Use video whenever possible for better engagement. Stay focused and minimize distractions.',
            '<strong>Follow-Up:</strong> Summarize key decisions and next steps in Slack. Put tasks in Task Tracker during the call.'
          ]}
        ]
      },
    ]
  },

  // ────────────────────────────────────────
  // 3. EQUIPMENT POLICY
  // ────────────────────────────────────────
  {
    id: 'Equipment_Policy',
    title: 'Equipment Policy',
    heroTitle: 'Equipment<br>Policy',
    badge: 'IT Hardware Guidelines',
    subtitle: 'Vault Group — Procedures for requesting, using, maintaining, and returning company equipment.',
    icon: ICONS.laptop,
    seed: 5,
    intro: 'This policy outlines the procedures for requesting, using, maintaining, and returning company equipment at Vault. It applies to employees who require company-issued hardware for their work.',
    sections: [
      {
        number: '01', title: 'Equipment Issuance',
        content: [
          { type: 'subsection', title: 'For New Employees', content: [
            { type: 'list', items: [
              'During the hiring process, the Recruiter will confirm whether the new employee requires company equipment.',
              'If equipment is needed, the Recruiter will submit a request to the IT Admin, specifying the required equipment.',
              'The IT Admin will check the available stock and process the request.'
            ]}
          ]},
          { type: 'subsection', title: 'For Current Employees', content: [
            { type: 'p', text: 'If an existing team member requires additional or replacement equipment, they must submit a request directly to the IT Admin.' }
          ]},
          { type: 'callout', variant: 'important', html: '<strong>Important:</strong> Equipment can only be provided to employees located in Moscow.' }
        ]
      },
      {
        number: '02', title: 'Equipment Repairs',
        content: [
          { type: 'subsection', title: 'Non-Mechanical Damage (Company Covers Repair Cost)', content: [
            { type: 'p', text: 'If the damage is not caused by external impact, the employee covers the cost upfront, and the company fully reimburses the expense.' },
            { type: 'list', items: [
              'Software malfunctions: system crashes, frequent errors, or performance issues not caused by external damage.',
              'Hardware failures: internal component issues (e.g., motherboard, SSD, battery degradation) without visible physical damage.',
              'Overheating issues due to internal defects rather than misuse.',
              'Charging or power problems due to internal faults, not damaged ports or cables.',
              'Network or connectivity failures unrelated to physical damage.'
            ]}
          ]},
          { type: 'subsection', title: 'Mechanical Damage (Employee Covers Repair Cost)', content: [
            { type: 'p', text: 'If the damage is due to misuse, external impact, or improper handling, the employee is responsible for the full repair cost.' },
            { type: 'list', items: [
              'Cracked or broken screen.',
              'Liquid spills causing malfunction.',
              'Damaged ports or keyboard due to improper handling.'
            ]}
          ]}
        ]
      },
      {
        number: '03', title: 'Equipment Return Upon Termination',
        content: [
          { type: 'p', text: 'Employees leaving Vault have two options:' },
          { type: 'list', items: [
            '<strong>Return to IT Admin:</strong> The IT Admin will inspect the equipment and return it to inventory.',
            '<strong>Request to Purchase:</strong> Employees can submit a buyout request. If approved, the IT Admin will determine a fair price based on the device\u2019s age and specifications. The buyout amount will be deducted from the final salary payout.'
          ]}
        ]
      },
      {
        number: '04', title: 'Final Provisions',
        content: [
          { type: 'list', items: [
            'Employees are responsible for using company equipment properly and securely.',
            'The IT Admin reserves the right to inspect and audit company-issued equipment.'
          ]}
        ]
      },
    ]
  },

  // ────────────────────────────────────────
  // 4. SALARY INVOICE SUBMISSION
  // ────────────────────────────────────────
  {
    id: 'Salary_Invoice_Submission',
    title: 'Salary Invoice Submission',
    heroTitle: 'Salary Invoice<br>Submission',
    badge: 'Payment Process Guide',
    subtitle: 'Vault Group — Everything you need to know about salary payments and invoice submission.',
    icon: ICONS.invoice,
    seed: 7.5,
    intro: 'At Vault, salaries are processed once a month, specifically on the <strong>10th of each month</strong>. If the 10th falls on a weekend or public holiday, payments will be processed on the next working day.',
    sections: [
      {
        number: '01', title: 'Salary Payment Method',
        content: [
          { type: 'list', items: [
            'Payments are made in cryptocurrency (<strong>USDT</strong>).',
            'Funds are transferred to the crypto wallet specified by the employee.',
            'You may use any platform of your choice, as long as it is secure and convenient.',
          ]},
          { type: 'callout', variant: 'important', html: '<strong>Important:</strong> Your wallet must support the <strong>TRC-20 network</strong> to receive payments.' }
        ]
      },
      {
        number: '02', title: 'Invoice Submission Process',
        content: [
          { type: 'subsection', title: 'Step 1: Invoice Request', content: [
            { type: 'p', text: '1\u20132 days before the payment date, the accounting team will contact you to request an invoice submission. A sample invoice template will be provided.' }
          ]},
          { type: 'subsection', title: 'Step 2: How to Fill Out Your Invoice', content: [
            { type: 'list', items: [
              'In the <strong>Bank Details</strong> field, enter only your crypto wallet address and the network (TRC-20).',
              'In the <strong>Description</strong> field, specify the services you provide, as outlined in your contract.',
              'Update the <strong>date</strong> each month.',
              'Add your <strong>signature</strong> at the bottom before submitting.'
            ]}
          ]},
          { type: 'subsection', title: 'Step 3: Invoice Submission', content: [
            { type: 'p', text: 'Once completed, submit your invoice promptly to avoid payment delays.' }
          ]},
          { type: 'callout', variant: 'tip', html: '<strong>Tip:</strong> Double-check your wallet address and ensure it supports TRC-20 to prevent transaction issues.' }
        ]
      },
    ]
  },

  // ────────────────────────────────────────
  // 5. VAULT BUSINESS GLOSSARY
  // ────────────────────────────────────────
  {
    id: 'Vault_Business_Glossary',
    title: 'Vault Business Glossary',
    heroTitle: 'Business<br>Glossary',
    badge: 'Key Terms & Definitions',
    subtitle: 'Vault Group — Core concepts and terminology across IT, Fintech, Crypto, and more.',
    icon: ICONS.book,
    seed: 10,
    intro: 'Below is a categorized glossary to help team members understand core concepts and terminology used at Vault across IT, Fintech, Crypto, and more.',
    closing: 'If you come across any terms or concepts that you believe should be included here, let the HR team know!',
    sections: [
      {
        number: '01', title: 'Banking and Payments',
        content: [
          { type: 'definitions', items: [
            { term: 'IBAN', desc: '(International Bank Account Number) \u2014 A special number that helps banks identify your account for sending or receiving money internationally.' },
            { term: 'SWIFT Code', desc: '\u2014 A unique code used by banks for international transfers to make sure the money gets to the right place.' },
            { term: 'KYC', desc: '(Know Your Customer) \u2014 A process where companies check who you are by asking for your ID or other documents to avoid fraud.' },
            { term: 'KYB', desc: '(Know Your Business) \u2014 A process to verify businesses just like KYC for individuals. Helps prevent fraud and money laundering.' },
            { term: 'AML', desc: '(Anti-Money Laundering) \u2014 Rules to stop bad actors from using money they got illegally.' },
            { term: 'PSP', desc: '(Payment Service Provider) \u2014 A company that helps businesses accept payments, like PayPal or Stripe.' },
            { term: 'On-Ramp', desc: '\u2014 Converting regular money (like dollars or euros) into cryptocurrency.' },
            { term: 'Off-Ramp', desc: '\u2014 Changing cryptocurrency back into regular money.' },
            { term: 'SEPA', desc: '(Single Euro Payments Area) \u2014 A system to make sending money across Europe simple and fast.' },
            { term: 'CVC', desc: '(Card Verification Code) \u2014 The 3-digit number on the back of your card used for secure online payments.' },
          ]}
        ]
      },
      {
        number: '02', title: 'Blockchain and Crypto',
        content: [
          { type: 'definitions', items: [
            { term: 'Blockchain', desc: '\u2014 A secure digital ledger for keeping records of transactions. Everyone can see it, but no one can change past entries.' },
            { term: 'Crypto Exchange', desc: '\u2014 A platform to buy, sell, or trade cryptocurrencies like Bitcoin or Ethereum.' },
            { term: 'Token', desc: '\u2014 A digital asset that can represent money, a piece of a company, or access to services.' },
            { term: 'Utility Token', desc: '\u2014 A token that gives access to a specific service (like a gift card).' },
            { term: 'Security Token', desc: '\u2014 Like a digital stock representing ownership in a company.' },
            { term: 'Governance Token', desc: '\u2014 A token that lets you vote on decisions for a blockchain project.' },
            { term: 'Stablecoin', desc: '\u2014 A cryptocurrency designed to match the value of regular money, like USD.' },
            { term: 'NFT', desc: '(Non-Fungible Token) \u2014 A one-of-a-kind digital item, like art, music, or collectibles.' },
            { term: 'DeFi', desc: '(Decentralized Finance) \u2014 Financial services (like loans or savings) without banks, built on blockchain.' },
            { term: 'Swaps', desc: '\u2014 Exchanging one cryptocurrency for another.' },
            { term: 'Liquidity Pool', desc: '\u2014 A shared pot of crypto that helps make trading easier.' },
            { term: 'Gas Fees', desc: '\u2014 Small payments to process your transaction on the blockchain.' },
            { term: 'Perpetual Contracts', desc: '\u2014 Crypto deals to bet on prices without owning the coins, with no expiry date.' },
            { term: 'DAO', desc: '(Decentralized Autonomous Organization) \u2014 A blockchain project run by its users using smart contracts, without a boss.' },
            { term: 'Layer 1 Blockchain', desc: '\u2014 The main blockchain, like Bitcoin or Ethereum.' },
            { term: 'Layer 2 Solution', desc: '\u2014 Upgrades that work on top of Layer 1 to make transactions faster and cheaper.' },
            { term: 'Ecosystem', desc: '\u2014 The network of people, tools, and services that support a blockchain project.' },
          ]}
        ]
      },
      {
        number: '03', title: 'Technology and Development',
        content: [
          { type: 'definitions', items: [
            { term: 'API', desc: '(Application Programming Interface) \u2014 A tool that lets apps talk to each other (like when Uber uses Google Maps).' },
            { term: 'SDK', desc: '(Software Development Kit) \u2014 A set of tools developers use to build apps or features.' },
            { term: 'Wallet', desc: '\u2014 A digital tool for storing and using cryptocurrency. Hot wallets are online (convenient), cold wallets are offline (safer).' },
            { term: 'Smart Contract', desc: '\u2014 A computer program that automatically does something (like sending money) when conditions are met.' },
            { term: 'Hashing', desc: '\u2014 Turning data into a unique code to keep it secure.' },
            { term: 'Mining', desc: '\u2014 Using computers to process blockchain transactions and earn cryptocurrency rewards.' },
            { term: 'Proof-of-Work (PoW)', desc: '\u2014 A system where miners solve puzzles to secure the blockchain.' },
            { term: 'Proof-of-Stake (PoS)', desc: '\u2014 A system where people stake their crypto to help secure the blockchain.' },
            { term: 'White Label', desc: '\u2014 Ready-made products (like crypto wallets) that companies can rebrand and sell as their own.' },
          ]}
        ]
      },
      {
        number: '04', title: 'Operations and Metrics',
        content: [
          { type: 'definitions', items: [
            { term: 'CAC', desc: '(Customer Acquisition Cost) \u2014 How much it costs to get one customer.' },
            { term: 'LTV', desc: '(Lifetime Value) \u2014 The total money a customer brings to the company during their time as a client.' },
            { term: 'Fiat', desc: '\u2014 Regular government-issued money, like dollars or euros.' },
            { term: 'Liquidity', desc: '\u2014 How easy it is to turn an asset (like crypto) into cash.' },
            { term: 'Airdrop', desc: '\u2014 Free tokens given to users to promote a project.' },
          ]}
        ]
      },
    ]
  },

  // ────────────────────────────────────────
  // 7. SALES — ZOHO ECOSYSTEM USAGE REGULATION
  //    (Commercial Department, strict mode)
  // ────────────────────────────────────────
  {
    id: 'Sales_Zoho_Regulation',
    title: 'Zoho Ecosystem Usage Regulation — Sales',
    heroTitle: 'Zoho Ecosystem<br>Usage Regulation',
    badge: 'Commercial Department · Mandatory',
    subtitle: 'Vault Group — Mandatory rules for the Sales Department on using Zoho CRM, Cliq, Voice, Desk, People, and Calendar.',
    icon: ICONS.shield,
    seed: 15,
    style: 'strict',
    department: 'commercial',
    lang: 'en',
    backHref: 'commercial-department.html',
    backLabel: 'Back to Commercial Department',
    backLabelShort: 'Commercial Department',
    intro: 'This Regulation establishes mandatory rules for the use of the Zoho ecosystem (the "Systems") by employees of the Sales Department in the performance of their duties. Violation of this Regulation triggers disciplinary action in accordance with Section 14.',
    signatureBlock: {
      stampLabel: 'Approved',
      intro: 'Issued and approved by the Chief Commercial Operations Officer of Vault Group.',
      name: 'Sviatoslav Shpanochkin',
      title: 'Chief Commercial Operations Officer',
      date: 'May 1, 2026',
      dateLabel: 'Effective date',
      method: 'Signed via Zoho Sign'
    },
    sections: [
      {
        number: '01', title: 'General Provisions',
        content: [
          { type: 'subsection', number: '1.1', title: 'Purpose', content: [
            { type: 'p', text: 'This Regulation establishes mandatory rules for the use of the Zoho ecosystem (the "Systems") by employees of the Sales Department in the performance of their duties.' }
          ]},
          { type: 'subsection', number: '1.2', title: 'Scope', content: [
            { type: 'p', text: 'This Regulation applies to all employees of the Sales Department, including Sales Managers, Business Developers, Partnerships Associates, Marketing Growth and Lead Generation Managers, as well as interns and temporarily engaged contractors.' }
          ]},
          { type: 'subsection', number: '1.3', title: 'Principles', content: [
            { type: 'list', items: [
              '<strong>Single source of truth — Zoho CRM.</strong> Any client information not recorded in CRM is considered to not exist.',
              '<strong>Transparency</strong> — every action with a client is reflected in the system and accessible to the supervisor.',
              '<strong>Cadence and rhythm</strong> — work is performed as a continuous task cycle with no blind spots.'
            ]}
          ]},
          { type: 'subsection', number: '1.4', title: 'Liability', content: [
            { type: 'p', text: 'Violation of this Regulation triggers disciplinary action in accordance with Section 14.' }
          ]}
        ]
      },
      {
        number: '02', title: 'Employee Profile and Onboarding',
        content: [
          { type: 'subsection', number: '2.1', title: 'Mandatory Setup', content: [
            { type: 'p', text: 'Before starting client work, each employee must:' },
            { type: 'list', items: [
              'Connect their corporate Gmail mailbox to Zoho CRM.',
              'Connect their work calendar to Zoho Calendar.',
              'Set a current photo in their Zoho CRM profile (a business portrait, face clearly visible).',
              'Complete their Zoho CRM profile: full name, position, work phone, messengers (Cliq), short bio if applicable.',
              'Install and authorize Zoho CRM, Cliq, and Voice on their work device and/or browser.'
            ]}
          ]},
          { type: 'subsection', number: '2.2', title: 'Check-in and Check-out', content: [
            { type: 'p', text: 'Each employee must check in via Zoho Cliq at the start of the workday and check out at its end. Failure to check in without prior approval from the supervisor is treated as a late arrival or no-show.' }
          ]}
        ]
      },
      {
        number: '03', title: 'CRM Entity Hierarchy',
        content: [
          { type: 'subsection', number: '3.1', title: '“Account is the Root” Principle', content: [
            { type: 'list', items: [
              '<strong>Account</strong> — the root entity.',
              '<strong>Contact</strong> — belongs to an Account.',
              '<strong>Deal</strong> — belongs to an Account; <strong>exactly one</strong> Contact is attached to each Deal as the primary Contact for that Deal.'
            ]}
          ]},
          { type: 'subsection', number: '3.2', title: 'Lead and Lead Conversion', content: [
            { type: 'olist', items: [
              'Every initial prospect is first recorded as a Lead.',
              'A Lead is converted <strong>only via the Blueprint</strong> in the Lead record.',
              'Conversion creates three entities at once: Account + Contact + Deal.',
              'It is prohibited to manually create an Account, Contact, or Deal bypassing the Lead Blueprint when the prospect originated as a Lead.'
            ]}
          ]},
          { type: 'subsection', number: '3.3', title: 'Adding Additional Contacts', content: [
            { type: 'olist', items: [
              'If an Account already exists and a new Contact must be added — the Contact is created <strong>only from the Account record</strong> (Related → Contacts).',
              'A duplicate check by email and phone is mandatory before creation.',
              'Creating a Contact "standalone" via the Contacts module is prohibited.'
            ]}
          ]},
          { type: 'subsection', number: '3.4', title: 'Adding Additional Deals', content: [
            { type: 'olist', items: [
              'A new Deal under an existing Account is created <strong>only from the Account record</strong> (Related → Deals).',
              'A Contact must be attached to the Deal.',
              'Creating a Deal "standalone" via the Deals module is prohibited.'
            ]}
          ]}
        ]
      },
      {
        number: '04', title: 'Working with Tasks',
        content: [
          { type: 'subsection', number: '4.1', title: 'The Task Cycle', content: [
            { type: 'p', text: 'Each employee’s work follows a continuous cycle:' },
            { type: 'olist', items: [
              '<strong>Take the task into work.</strong>',
              '<strong>Perform the action</strong> — call, email, meeting, etc.',
              '<strong>Close the task with a result</strong> — the Description field must be filled: what happened, what was agreed, the next step.',
              '<strong>Create the next task</strong> — if work on the Deal is not complete, the next task is created with a specific date and action.'
            ]}
          ]},
          { type: 'subsection', number: '4.2', title: 'No Empty Closures', content: [
            { type: 'p', text: 'Closing a task without a result is prohibited. A description such as "ok", "done", "-", "." is treated as non-completion.' }
          ]},
          { type: 'subsection', number: '4.3', title: 'No Date Postponement', content: [
            { type: 'olist', items: [
              'Postponing a task’s due date is prohibited. Any rescheduling has a reason — and that reason becomes the result of closing the current task (e.g. "client asked to revisit in a week").',
              'A <strong>new</strong> task is created for the new date. The previous task is closed with the postponement reason recorded.'
            ]}
          ]},
          { type: 'subsection', number: '4.4', title: 'Daily "Set Next Step" Task', content: [
            { type: 'olist', items: [
              'Each morning, an automated process creates a "Set Next Step" task for the employee on every Deal that has no open active task.',
              'A "Set Next Step" task must be closed within the same day.',
              '"Set Next Step" can only be closed after a real next task on that Deal has been created.'
            ]}
          ]},
          { type: 'subsection', number: '4.5', title: 'Every Active Deal Has an Open Task', content: [
            { type: 'p', text: 'Every Deal in an active stage (not Closed Won / Closed Lost) must have at least one open task. A Deal without an open task for the current or next workday is considered abandoned and recorded as a violation.' }
          ]},
          { type: 'subsection', number: '4.6', title: 'Tasks Live on the Deal', content: [
            { type: 'p', text: 'Tasks, events, calls, and emails are created <strong>strictly inside the Deal</strong>. Creating activities at the Contact or Account level is prohibited (the only exception is pre-sales activity before a Deal exists, agreed with the supervisor).' }
          ]},
          { type: 'subsection', number: '4.7', title: 'Minimum Daily Output', content: [
            { type: 'olist', items: [
              'The minimum number of tasks completed per day is set in the KPI regulation for the relevant role.',
              'A day with less than 30% of the daily task quota completed is not counted in the calculation of worked days (unless agreed with the supervisor — sick leave, training, business trip, etc.).'
            ]}
          ]}
        ]
      },
      {
        number: '05', title: 'Client Communication Channels',
        content: [
          { type: 'subsection', number: '5.1', title: 'Voice Calls', content: [
            { type: 'olist', items: [
              'All inbound and outbound calls with clients are placed <strong>only through Zoho Voice</strong>.',
              'Using a personal mobile phone for client voice calls is prohibited.'
            ]}
          ]},
          { type: 'subsection', number: '5.2', title: 'WhatsApp', content: [
            { type: 'olist', items: [
              'WhatsApp communication is conducted <strong>only through the WhatsApp channel embedded in Zoho CRM</strong>.',
              'Conducting client WhatsApp communication from a personal account is prohibited.'
            ]}
          ]},
          { type: 'subsection', number: '5.3', title: 'Email', content: [
            { type: 'olist', items: [
              'The corporate Gmail mailbox is connected to CRM.',
              'All Deal-related correspondence must land in the Deal record. The Email field on the Deal must be filled correctly — this is a hard requirement for synchronization.',
              'Communicating with the client from a personal mailbox or from any mailbox not connected to CRM is prohibited.'
            ]}
          ]},
          { type: 'subsection', number: '5.4', title: 'Telegram, LinkedIn, and Other Non-integrated Channels', content: [
            { type: 'olist', items: [
              'Such channels may be used only when no alternative is available.',
              'Every meaningful exchange in a non-integrated channel must be <strong>copied into the Deal Notes</strong> with the channel, date, and a brief summary.',
              'Documents received through such channels are attached to the Deal Attachments.'
            ]}
          ]}
        ]
      },
      {
        number: '06', title: 'Data Hygiene',
        content: [
          { type: 'subsection', number: '6.1', title: 'Naming Conventions for Proper Nouns', content: [
            { type: 'olist', items: [
              'Names, surnames, company names, product names, city names, etc. are written <strong>in English</strong> (if the original is in Latin script or has a commonly used Latin transliteration), starting with a capital letter unless the official spelling explicitly requires lowercase (<code>iPhone</code>, <code>eBay</code>, <code>dYdX</code>).',
              'Writing names in all caps, all lowercase, or in arbitrary transliteration is prohibited.',
              'Hyphenated surnames are written with a hyphen and no spaces: <code>Smith-Jones</code>.',
              '<strong>Source of truth — the questionnaire completed by the client.</strong> Once a completed questionnaire is received, the company name and the contact’s first/last name are taken in the spelling provided by the client — provided there are no obvious typos and no contradiction with a precisely known spelling (e.g. the company’s official LinkedIn page).'
            ]}
          ]},
          { type: 'subsection', number: '6.2', title: 'Data Formats', content: [
            { type: 'list', items: [
              'Phone numbers — international format <code>+CountryCode Number</code> (e.g. <code>+1 415 555 0123</code>).',
              'Emails — lowercase.',
              'Dates — the CRM format (use the dropdown; free-form manual input is prohibited where the field does not require it).',
              'Amounts — in US dollars (USD).'
            ]}
          ]},
          { type: 'subsection', number: '6.3', title: 'Field Completeness', content: [
            { type: 'olist', items: [
              'Fields mandatory for the role must be filled at 100% before the Deal is moved to the next Pipeline stage.',
              'The list of mandatory fields per stage is defined in the Layout of the relevant Pipeline.',
              'The fields Industry, Country, Source, Owner, Stage, and Closing Date are mandatory in every case.'
            ]}
          ]},
          { type: 'subsection', number: '6.4', title: 'Status Accuracy', content: [
            { type: 'p', text: 'The Deal Stage, Contact status, and Lead status must reflect actual reality. A Deal is moved to the next stage only when there is documented evidence (an email, a call recording, a meeting note).' }
          ]},
          { type: 'subsection', number: '6.5', title: 'Duplicates', content: [
            { type: 'p', text: 'A duplicate check by email, phone, and website domain is mandatory before creating any entity. If a duplicate is found, work continues on the existing record.' }
          ]}
        ]
      },
      {
        number: '07', title: 'Documents and Products on the Deal',
        content: [
          { type: 'subsection', number: '7.1', title: 'Documents', content: [
            { type: 'olist', items: [
              'All documents received from the client (NDA, contracts, decks, completed questionnaires, screenshots) are attached to the Deal <strong>Attachments</strong>.',
              'The file name must include the document type and the date: <code>NDA_2026-05-01.pdf</code>, <code>Questionnaire_2026-05-01.pdf</code>.'
            ]}
          ]},
          { type: 'subsection', number: '7.2', title: 'Products and Deal Amount', content: [
            { type: 'olist', items: [
              'Once the client has indicated the chosen product/plan, the product is added to the <strong>Products</strong> section of the Deal.',
              'After products are added or changed, the employee must press the <strong>Recalculate Amount</strong> button to recompute the Deal amount.',
              'A Deal Amount that does not match the attached products is considered an error and must be fixed immediately.'
            ]}
          ]}
        ]
      },
      {
        number: '08', title: 'Owner Reassignment',
        content: [
          { type: 'subsection', number: '8.1', title: 'Cascade Principle', content: [
            { type: 'p', text: 'Owner reassignment is performed <strong>only from the Account record</strong>. After the Account Owner changes, the Owner is updated on all related Contacts and Deals.' }
          ]},
          { type: 'subsection', number: '8.2', title: 'Notification', content: [
            { type: 'p', text: 'An Owner change is accompanied by:' },
            { type: 'list', items: [
              'A Note on the Account with the handover date, the reason, and confirmation from both employees.',
              'A notification in the relevant Zoho Cliq channel.',
              'A handover of open tasks: the previous Owner closes their tasks with results; the new Owner creates their own.'
            ]}
          ]},
          { type: 'subsection', number: '8.3', title: 'No "Silent" Handover', content: [
            { type: 'p', text: 'Changing the Owner of a Deal or Contact bypassing the Account is prohibited; changing the Owner without notification and a written record is prohibited.' }
          ]}
        ]
      },
      {
        number: '09', title: 'Communication SLAs',
        content: [
          { type: 'subsection', number: '9.1', title: 'Inbound Calls', content: [
            { type: 'olist', items: [
              'During working hours, the employee must answer an incoming client call via Zoho Voice immediately.',
              'A missed call is acceptable only when one of the following holds: the employee’s calendar shows a confirmed meeting at that time; or the Zoho Voice logs show the employee was on another active call at the moment of the miss.',
              'Any other missed call is recorded as an SLA violation.',
              'The employee must call back within 15 minutes of becoming available.'
            ]}
          ]},
          { type: 'subsection', number: '9.2', title: 'Cliq Messages', content: [
            { type: 'olist', items: [
              'A work message in Zoho Cliq must be acknowledged <strong>within one hour</strong> during working hours.',
              'Ignoring <code>@user</code>, <code>@channel</code>, mentions, and reactions is prohibited.',
              'The detailed Cliq usage rules are defined in a separate regulation.'
            ]}
          ]},
          { type: 'subsection', number: '9.3', title: 'Client Email', content: [
            { type: 'p', text: 'The client must receive an email reply within 4 hours during working hours. If a substantive reply is not yet possible, an interim message must be sent stating the deadline for the full reply.' }
          ]}
        ]
      },
      {
        number: '10', title: 'Technical Requests (Bugs, Improvements, Suggestions)',
        content: [
          { type: 'subsection', number: '10.1', title: 'The Only Channel Is Zoho Desk', content: [
            { type: 'olist', items: [
              'Every request regarding a system bug, an improvement, or a process suggestion must be filed <strong>strictly as a Zoho Desk ticket</strong>.',
              'A request via Cliq, email, voice, or any other channel is not considered accepted into work until a ticket is created.',
              'The ticket must include: title (a short summary); type (Bug / Feature Request / Suggestion); description (context, steps to reproduce, expected vs. actual); a screenshot or a recording link.'
            ]}
          ]},
          { type: 'subsection', number: '10.2', title: 'No Duplicates', content: [
            { type: 'p', text: 'Creating duplicate tickets, bypassing the ticket channel, or escalating to chat before a ticket reply is received is prohibited.' }
          ]}
        ]
      },
      {
        number: '11', title: 'Notifications',
        content: [
          { type: 'subsection', number: '11.1', title: 'Cliq', content: [
            { type: 'olist', items: [
              'The employee must monitor notifications in every Cliq channel they are a member of.',
              'Member of a channel = obliged to read it. Muting a channel is allowed only with the supervisor’s approval.',
              'Leaving work channels in Cliq without approval is prohibited.'
            ]}
          ]},
          { type: 'subsection', number: '11.2', title: 'CRM', content: [
            { type: 'p', text: 'CRM notifications (overdue tasks, mentions, approval requests) are processed at the start of the workday and continuously throughout the day as they arrive.' }
          ]}
        ]
      },
      {
        number: '12', title: 'Prohibitions (Consolidated List)',
        content: [
          { type: 'p', text: 'The following is prohibited:' },
          { type: 'olist', items: [
            'Any client communication outside the Zoho ecosystem without copying it into CRM.',
            'Creating an Account, Contact, or Deal outside the established hierarchy (see Section 3).',
            'Closing tasks without a result.',
            'Postponing a task’s due date (instead, close the current one with a result and create a new one).',
            'Leaving active Deals without an open task.',
            'Using a personal phone, personal WhatsApp, or personal mailbox for client communication.',
            'Changing the Owner bypassing the Account record.',
            'Creating activities (tasks, calls, emails, meetings) outside the Deal.',
            'Ignoring incoming calls and messages outside the regulated grounds.',
            'Filing improvement/bug requests outside Zoho Desk.',
            'Storing client documents outside the Deal Attachments (on a personal PC, in Telegram, on a USB drive).'
          ]}
        ]
      },
      {
        number: '13', title: 'Monitoring and Audit',
        content: [
          { type: 'subsection', number: '13.1', title: 'Regular Audits', content: [
            { type: 'p', text: 'The Department head (or a designated auditor) performs:' },
            { type: 'list', items: [
              'A daily express dashboard audit: today’s tasks, missed calls, Cliq SLA.',
              'A weekly data hygiene audit: duplicates, empty fields, abandoned Deals.',
              'A monthly full audit of compliance with this Regulation.'
            ]}
          ]},
          { type: 'subsection', number: '13.2', title: 'Violation Notice', content: [
            { type: 'p', text: 'On a confirmed violation, the employee receives a Cliq notice indicating: the Regulation clause violated; the specific violation (a link to the CRM record); the deadline to remediate.' }
          ]}
        ]
      },
      {
        number: '14', title: 'Liability for Violations',
        content: [
          { type: 'subsection', number: '14.1', title: 'Escalation Scale', content: [
            { type: 'olist', items: [
              '<strong>First violation</strong> — verbal warning, recorded in Cliq.',
              '<strong>Second violation of the same clause within 30 days</strong> — written warning, monthly bonus reduced by 5–15%.',
              '<strong>Third violation of the same clause within 90 days</strong> — monthly bonus reduced by 25–50%, conversation with the direct supervisor.',
              '<strong>Systematic violations</strong> (more than 5 records in a month across different clauses, or 3 records of the same clause within a quarter) — grounds for terminating the contractor agreement at the company’s initiative.'
            ]}
          ]},
          { type: 'subsection', number: '14.2', title: 'Gross Violations', content: [
            { type: 'p', text: 'Each of the following triggers a 50% bonus reduction on a single occurrence and may serve as grounds for immediate termination of the contractor relationship:' },
            { type: 'list', items: [
              'Concealing client correspondence from the company.',
              'Running a client via a personal channel to bypass CRM.',
              'Disclosing client data to third parties.',
              'Deleting CRM records without approval.',
              'Systematic falsification of task results.'
            ]}
          ]},
          { type: 'subsection', number: '14.3', title: 'Day Not Counted Toward Compensation', content: [
            { type: 'p', text: 'A day on which the minimum task quota (Section 4.7) is not met without a valid reason (sick leave, time off, business trip, training) is not counted in the compensation calculation.' }
          ]}
        ]
      },
      {
        number: '15', title: 'Final Provisions',
        content: [
          { type: 'subsection', number: '15.1', title: 'Effective Date', content: [
            { type: 'p', text: 'This Regulation takes effect on the date of approval and applies to all current and new employees of the Sales Department.' }
          ]},
          { type: 'subsection', number: '15.2', title: 'Acknowledgement', content: [
            { type: 'p', text: 'Each employee confirms acknowledgement of this Regulation by ticking the corresponding checkbox in Zoho People. Until the acknowledgement is recorded, access to CRM client work is not granted.' }
          ]},
          { type: 'subsection', number: '15.3', title: 'Amendments', content: [
            { type: 'p', text: 'Amendments are introduced by publishing an updated version of the document in Zoho People with notification to employees and a mandatory re-acknowledgement.' }
          ]}
        ]
      }
    ]
  },

  // ────────────────────────────────────────
  // 8. SALES — РЕГЛАМЕНT ИСПОЛЬЗОВАНИЯ ZOHO (RU)
  //    (Commercial Department, strict mode, Russian)
  // ────────────────────────────────────────
  {
    id: 'Sales_Zoho_Regulation_RU',
    title: 'Регламент использования Zoho — Sales',
    heroTitle: 'Регламент<br>использования Zoho',
    badge: 'Департамент продаж · Обязательно',
    subtitle: 'Vault Group — Обязательные правила использования Zoho CRM, Cliq, Voice, Desk, People и Calendar для сотрудников Департамента продаж.',
    icon: ICONS.shield,
    seed: 17.5,
    style: 'strict',
    department: 'commercial',
    webHidden: true,
    lang: 'ru',
    backHref: 'commercial-department.html',
    backLabel: 'Назад в Commercial Department',
    backLabelShort: 'Commercial Department',
    intro: 'Настоящий Регламент устанавливает обязательные правила использования экосистемы Zoho (далее — «Системы») сотрудниками Департамента продаж при выполнении служебных обязанностей. Нарушение настоящего Регламента влечёт меры дисциплинарного воздействия согласно разделу 14.',
    signatureBlock: {
      stampLabel: 'Утверждено',
      intro: 'Издано и утверждено Chief Commercial Operations Officer Vault Group.',
      name: 'Святослав Шпаночкин',
      title: 'Chief Commercial Operations Officer',
      date: '1 мая 2026 г.',
      dateLabel: 'Дата вступления в силу',
      method: 'Подписано через Zoho Sign'
    },
    sections: [
      {
        number: '01', title: 'Общие положения',
        content: [
          { type: 'subsection', number: '1.1', title: 'Назначение', content: [
            { type: 'p', text: 'Настоящий Регламент устанавливает обязательные правила использования экосистемы Zoho (далее — «Системы») сотрудниками Департамента продаж при выполнении служебных обязанностей.' }
          ]},
          { type: 'subsection', number: '1.2', title: 'Область применения', content: [
            { type: 'p', text: 'Регламент распространяется на всех сотрудников Департамента продаж, включая Sales Managers, Business Developers, Partnerships Associates, Marketing Growth and Lead Generation Managers, а также на стажёров и временно привлечённых лиц.' }
          ]},
          { type: 'subsection', number: '1.3', title: 'Принципы', content: [
            { type: 'list', items: [
              '<strong>Единый источник истины — Zoho CRM.</strong> Любая информация о клиенте, не зафиксированная в CRM, считается отсутствующей.',
              '<strong>Прозрачность</strong> — все действия с клиентом отражаются в системе и доступны руководителю.',
              '<strong>Регулярность и ритм</strong> — работа ведётся по непрерывному циклу задач без «слепых зон».'
            ]}
          ]},
          { type: 'subsection', number: '1.4', title: 'Ответственность', content: [
            { type: 'p', text: 'Нарушение настоящего Регламента влечёт меры дисциплинарного воздействия согласно разделу 14.' }
          ]}
        ]
      },
      {
        number: '02', title: 'Профиль сотрудника и подготовка к работе',
        content: [
          { type: 'subsection', number: '2.1', title: 'Обязательные настройки', content: [
            { type: 'p', text: 'До начала работы с клиентами сотрудник обязан:' },
            { type: 'list', items: [
              'Привязать корпоративную Gmail-почту к Zoho CRM.',
              'Подключить рабочий календарь к Zoho Calendar.',
              'Установить актуальное фото в профиле Zoho CRM (деловой портрет, лицо различимо).',
              'Заполнить профиль в Zoho CRM: ФИО, должность, рабочий телефон, мессенджеры (Cliq), краткая биография при наличии.',
              'Установить и авторизовать Zoho CRM, Cliq и Voice на рабочем устройстве и/или в браузере.'
            ]}
          ]},
          { type: 'subsection', number: '2.2', title: 'Чек-ин и чек-аут', content: [
            { type: 'p', text: 'Сотрудник обязан выполнять чек-ин в Zoho Cliq в начале рабочего дня и чек-аут — по завершении. Отсутствие чек-ина без согласования с руководителем приравнивается к опозданию или невыходу.' }
          ]}
        ]
      },
      {
        number: '03', title: 'Иерархия сущностей в CRM',
        content: [
          { type: 'subsection', number: '3.1', title: 'Принцип «Компания — корень»', content: [
            { type: 'list', items: [
              '<strong>Account (Компания)</strong> — корневая сущность.',
              '<strong>Contact (Контакт)</strong> — принадлежит Компании.',
              '<strong>Deal (Сделка)</strong> — принадлежит Компании; к каждой Сделке привязывается <strong>ровно один</strong> Контакт — основной для этой Сделки.'
            ]}
          ]},
          { type: 'subsection', number: '3.2', title: 'Лид и его конверсия', content: [
            { type: 'olist', items: [
              'Любой первичный клиент сначала фиксируется как Lead.',
              'Конверсия Лида производится <strong>только через Blueprint</strong> в карточке Лида.',
              'При конверсии создаются три сущности одновременно: Account + Contact + Deal.',
              'Запрещено создавать Account, Contact или Deal вручную, минуя Blueprint Лида, если первичная заявка пришла как Лид.'
            ]}
          ]},
          { type: 'subsection', number: '3.3', title: 'Создание дополнительных Контактов', content: [
            { type: 'olist', items: [
              'Если Компания уже существует и к ней нужно добавить Контакт — Контакт создаётся <strong>только из карточки Компании</strong> (Related → Contacts).',
              'Перед созданием обязательна проверка дубликатов по email и телефону.',
              'Запрещено создавать Контакт «отдельно» через модуль Contacts.'
            ]}
          ]},
          { type: 'subsection', number: '3.4', title: 'Создание дополнительных Сделок', content: [
            { type: 'olist', items: [
              'Новая Сделка по существующей Компании создаётся <strong>только из карточки Компании</strong> (Related → Deals).',
              'К Сделке обязательна привязка Контакта.',
              'Запрещено создавать Сделку «отдельно» через модуль Deals.'
            ]}
          ]}
        ]
      },
      {
        number: '04', title: 'Работа по задачам',
        content: [
          { type: 'subsection', number: '4.1', title: 'Цикл задачи', content: [
            { type: 'p', text: 'Работа сотрудника представляет собой непрерывный цикл:' },
            { type: 'olist', items: [
              '<strong>Взятие задачи в работу.</strong>',
              '<strong>Выполнение действия</strong> — звонок, отправка письма, встреча и т. д.',
              '<strong>Закрытие задачи с результатом</strong> — обязательное заполнение Description: что произошло, договорённости, следующий шаг.',
              '<strong>Постановка следующей задачи</strong> — если работа со Сделкой не завершена, создаётся следующая задача с конкретной датой и действием.'
            ]}
          ]},
          { type: 'subsection', number: '4.2', title: 'Запрет на пустые закрытия', content: [
            { type: 'p', text: 'Закрывать задачу без указания результата запрещено. Закрытие с описанием вида «ок», «сделано», «-», «.» приравнивается к её невыполнению.' }
          ]},
          { type: 'subsection', number: '4.3', title: 'Запрет на перенос сроков', content: [
            { type: 'olist', items: [
              'Перенос сроков задачи запрещён. У переноса всегда есть причина — она же является результатом закрытия текущей задачи (например, «клиент попросил вернуться через неделю»).',
              'На новый срок создаётся <strong>новая</strong> задача. Прежняя закрывается с указанием причины переноса.'
            ]}
          ]},
          { type: 'subsection', number: '4.4', title: 'Ежедневная задача «Set Next Step»', content: [
            { type: 'olist', items: [
              'Каждое утро автоматический процесс ставит сотруднику задачу «Set Next Step» по каждой Сделке без открытой актуальной задачи.',
              'Задача «Set Next Step» обязана быть закрыта в течение текущих суток.',
              'Закрытие «Set Next Step» производится только после того, как поставлена актуальная следующая задача по этой Сделке.'
            ]}
          ]},
          { type: 'subsection', number: '4.5', title: 'У активной Сделки всегда есть открытая задача', content: [
            { type: 'p', text: 'Каждая Сделка в активных стадиях (не Closed Won / Closed Lost) обязана иметь как минимум одну открытую задачу. Сделка без открытой задачи на текущий или ближайший рабочий день считается «брошенной» и фиксируется как нарушение.' }
          ]},
          { type: 'subsection', number: '4.6', title: 'Привязка задач к Сделке', content: [
            { type: 'p', text: 'Задачи, события, звонки, письма создаются <strong>строго внутри Сделки</strong>. Создание активностей на уровне Контакта или Компании запрещено (исключение — pre-sales активности до возникновения Deal, согласованные с руководителем).' }
          ]},
          { type: 'subsection', number: '4.7', title: 'Минимальная продуктивность дня', content: [
            { type: 'olist', items: [
              'Норматив количества выполненных задач в день устанавливается отдельным регламентом KPI для роли.',
              'День, в котором выполнено менее 30% дневного норматива задач, не учитывается в расчёте отработанных дней (если иное не согласовано с руководителем — больничный, обучение, командировка и т. п.).'
            ]}
          ]}
        ]
      },
      {
        number: '05', title: 'Каналы коммуникации с клиентом',
        content: [
          { type: 'subsection', number: '5.1', title: 'Голосовая связь', content: [
            { type: 'olist', items: [
              'Все исходящие и входящие звонки клиентам производятся <strong>только через Zoho Voice</strong>.',
              'Запрещено использовать личный мобильный телефон для голосовых звонков клиентам.'
            ]}
          ]},
          { type: 'subsection', number: '5.2', title: 'WhatsApp', content: [
            { type: 'olist', items: [
              'Переписка ведётся <strong>только через встроенный канал WhatsApp в Zoho CRM</strong>.',
              'Запрещено вести переписку с клиентом из личного WhatsApp.'
            ]}
          ]},
          { type: 'subsection', number: '5.3', title: 'Email', content: [
            { type: 'olist', items: [
              'Корпоративная Gmail-почта подключена к CRM.',
              'Вся переписка по сделке должна попадать в карточку Сделки. Поле Email клиента в Сделке должно быть заполнено корректно — это обязательное условие синхронизации.',
              'Запрещено вести переписку с клиентом с личной почты или с почтового ящика, не подключённого к CRM.'
            ]}
          ]},
          { type: 'subsection', number: '5.4', title: 'Telegram, LinkedIn и другие неинтегрированные каналы', content: [
            { type: 'olist', items: [
              'Использование таких каналов допустимо только при отсутствии альтернативы.',
              'Каждый значимый эпизод переписки <strong>обязательно копируется в Notes Сделки</strong> с указанием канала, даты и краткого содержания.',
              'Документы, полученные через такие каналы, прикрепляются в Attachments Сделки.'
            ]}
          ]}
        ]
      },
      {
        number: '06', title: 'Гигиена данных',
        content: [
          { type: 'subsection', number: '6.1', title: 'Правила написания имён собственных', content: [
            { type: 'olist', items: [
              'Имена, фамилии, названия компаний, продуктов, городов и т. п. пишутся <strong>на английском языке</strong> (если оригинал на латинице или имеет общепринятую латинскую транслитерацию), с заглавной буквы — если только официальное написание не требует строчной (<code>iPhone</code>, <code>eBay</code>, <code>dYdX</code>).',
              'Запрещено писать имена капсом, в нижнем регистре или с произвольной транслитерацией.',
              'Двойная фамилия — через дефис без пробела: <code>Smith-Jones</code>.',
              '<strong>Источник истины — заполненный клиентом опросник.</strong> После получения опросника название компании, имя и фамилия контакта берутся в том написании, которое указал клиент, — если оно не содержит явных опечаток и не противоречит точно известному написанию (например, официальной странице компании в LinkedIn).'
            ]}
          ]},
          { type: 'subsection', number: '6.2', title: 'Форматы данных', content: [
            { type: 'list', items: [
              'Телефоны — в международном формате <code>+КодСтраны Номер</code> (например, <code>+1 415 555 0123</code>).',
              'Email — в нижнем регистре.',
              'Даты — формат CRM (выпадающий выбор; ручной свободный ввод запрещён, если поле его не требует).',
              'Суммы — в долларах США (USD).'
            ]}
          ]},
          { type: 'subsection', number: '6.3', title: 'Заполненность полей', content: [
            { type: 'olist', items: [
              'Обязательные для роли поля заполняются на 100% до перевода Сделки на следующий этап Pipeline.',
              'Список обязательных полей по этапам определяется в Layout соответствующего Pipeline.',
              'Поля Industry, Country, Source, Owner, Stage, Closing Date — обязательны во всех случаях.'
            ]}
          ]},
          { type: 'subsection', number: '6.4', title: 'Актуальность статусов', content: [
            { type: 'p', text: 'Stage Сделки, статус Контакта, статус Лида должны соответствовать реальному положению дел. Перевод Сделки на следующий этап производится только при наличии задокументированного основания (письмо, запись звонка, заметка о встрече).' }
          ]},
          { type: 'subsection', number: '6.5', title: 'Дубликаты', content: [
            { type: 'p', text: 'Перед созданием любой сущности обязателен поиск дубликата по email, телефону, домену сайта. При обнаружении дубликата работа продолжается с существующей записью.' }
          ]}
        ]
      },
      {
        number: '07', title: 'Документы и продукты в Сделке',
        content: [
          { type: 'subsection', number: '7.1', title: 'Документы', content: [
            { type: 'olist', items: [
              'Все документы, полученные от клиента (NDA, договоры, презентации, заполненные опросники, скриншоты), прикрепляются к <strong>Attachments</strong> Сделки.',
              'Имя файла должно содержать тип документа и дату: <code>NDA_2026-05-01.pdf</code>, <code>Questionnaire_2026-05-01.pdf</code>.'
            ]}
          ]},
          { type: 'subsection', number: '7.2', title: 'Продукты и сумма Сделки', content: [
            { type: 'olist', items: [
              'После получения от клиента информации о выбранном продукте/тарифе продукт добавляется в раздел <strong>Products</strong> Сделки.',
              'После добавления/изменения продуктов сотрудник обязан нажать кнопку <strong>Recalculate Amount</strong> для пересчёта суммы Сделки.',
              'Сумма Сделки, не соответствующая привязанным продуктам, считается ошибкой и подлежит немедленному исправлению.'
            ]}
          ]}
        ]
      },
      {
        number: '08', title: 'Смена ответственного (Owner)',
        content: [
          { type: 'subsection', number: '8.1', title: 'Принцип каскада', content: [
            { type: 'p', text: 'Смена ответственного производится <strong>только через карточку Компании</strong>. После смены Owner Компании ответственный обновляется во всех связанных Контактах и Сделках.' }
          ]},
          { type: 'subsection', number: '8.2', title: 'Уведомление', content: [
            { type: 'p', text: 'Смена ответственного сопровождается:' },
            { type: 'list', items: [
              'Записью в Note Компании с датой передачи, причиной и согласием обоих сотрудников.',
              'Уведомлением в соответствующем канале Zoho Cliq.',
              'Передачей открытых задач: старый Owner закрывает свои задачи с результатом, новый Owner создаёт собственные.'
            ]}
          ]},
          { type: 'subsection', number: '8.3', title: 'Запрет на «тихий» переход', content: [
            { type: 'p', text: 'Запрещено менять Owner у Сделки или Контакта в обход Компании; менять Owner без уведомления и письменной фиксации.' }
          ]}
        ]
      },
      {
        number: '09', title: 'SLA по реакции на коммуникации',
        content: [
          { type: 'subsection', number: '9.1', title: 'Входящие звонки', content: [
            { type: 'olist', items: [
              'В рабочее время сотрудник обязан немедленно реагировать на входящий звонок клиента через Zoho Voice.',
              'Пропущенный звонок допустим только при одном из следующих условий: в календаре сотрудника на это время стоит подтверждённая встреча; в логах Zoho Voice зафиксирован активный разговор сотрудника на момент пропуска.',
              'Любой иной пропущенный звонок фиксируется как нарушение SLA.',
              'На пропущенный звонок сотрудник обязан перезвонить в течение 15 минут после освобождения.'
            ]}
          ]},
          { type: 'subsection', number: '9.2', title: 'Сообщения в Cliq', content: [
            { type: 'olist', items: [
              'На рабочее сообщение в Zoho Cliq сотрудник обязан отреагировать <strong>не позднее, чем через 1 час</strong> в рабочее время.',
              'Игнорирование тегов <code>@user</code>, <code>@channel</code>, упоминаний и реакций запрещено.',
              'Подробный регламент работы в Cliq устанавливается отдельным документом.'
            ]}
          ]},
          { type: 'subsection', number: '9.3', title: 'Email клиента', content: [
            { type: 'p', text: 'Ответ клиенту по email — в течение 4 часов в рабочее время. При невозможности дать содержательный ответ отправляется промежуточный с указанием срока полного ответа.' }
          ]}
        ]
      },
      {
        number: '10', title: 'Технические запросы (ошибки, доработки, предложения)',
        content: [
          { type: 'subsection', number: '10.1', title: 'Единственный канал — Zoho Desk', content: [
            { type: 'olist', items: [
              'Все обращения по ошибкам в системе, запросам на доработку и предложениям по улучшению процессов оформляются <strong>строго в виде тикета в Zoho Desk</strong>.',
              'Запрос в чате Cliq, по email, устно или иным способом не считается принятым в работу до создания тикета.',
              'Сотрудник обязан указать в тикете: заголовок (краткая суть); тип (Bug / Feature Request / Suggestion); описание (контекст, шаги воспроизведения, ожидание/реальность); скриншот или ссылку на запись.'
            ]}
          ]},
          { type: 'subsection', number: '10.2', title: 'Запрет на дублирование', content: [
            { type: 'p', text: 'Запрещено создавать тикеты-дубли, обходить установленный канал, эскалировать в чат до получения ответа по тикету.' }
          ]}
        ]
      },
      {
        number: '11', title: 'Работа с уведомлениями',
        content: [
          { type: 'subsection', number: '11.1', title: 'Cliq', content: [
            { type: 'olist', items: [
              'Сотрудник обязан следить за уведомлениями во всех каналах Cliq, в которые включён.',
              'Включён в канал = обязан читать. Право на «mute» канала возникает только после согласования с руководителем.',
              'Покидать рабочие каналы Cliq без согласования запрещено.'
            ]}
          ]},
          { type: 'subsection', number: '11.2', title: 'CRM', content: [
            { type: 'p', text: 'Уведомления CRM (просроченные задачи, упоминания, запросы апрува) обрабатываются в начале рабочего дня и далее по мере поступления.' }
          ]}
        ]
      },
      {
        number: '12', title: 'Запреты (сводный перечень)',
        content: [
          { type: 'p', text: 'Запрещено:' },
          { type: 'olist', items: [
            'Вести любую коммуникацию с клиентом вне Zoho-экосистемы без копирования в CRM.',
            'Создавать Account, Contact или Deal вне установленной иерархии (см. раздел 3).',
            'Закрывать задачи без указания результата.',
            'Переносить срок задачи (вместо этого закрыть текущую с результатом и создать новую).',
            'Оставлять активные Сделки без открытой задачи.',
            'Использовать личный телефон, личный WhatsApp, личную почту для общения с клиентом.',
            'Менять Owner в обход карточки Компании.',
            'Создавать активности (задачи, звонки, письма, встречи) вне Сделки.',
            'Игнорировать входящие звонки и сообщения вне регламентных оснований.',
            'Подавать запросы на доработку/баги вне Zoho Desk.',
            'Хранить документы клиента вне Attachments Сделки (на личном ПК, в Telegram, на флешке).'
          ]}
        ]
      },
      {
        number: '13', title: 'Контроль и аудит',
        content: [
          { type: 'subsection', number: '13.1', title: 'Регулярные аудиты', content: [
            { type: 'p', text: 'Руководитель Департамента (или назначенный аудитор) проводит:' },
            { type: 'list', items: [
              'Ежедневный экспресс-аудит дашбордов: задачи дня, пропущенные звонки, SLA Cliq.',
              'Еженедельный аудит чистоты данных: дубликаты, пустые поля, «брошенные» Сделки.',
              'Ежемесячный полный аудит соблюдения настоящего Регламента.'
            ]}
          ]},
          { type: 'subsection', number: '13.2', title: 'Уведомление о нарушении', content: [
            { type: 'p', text: 'По факту выявленного нарушения сотруднику направляется уведомление в Cliq с указанием: пункта Регламента; конкретного нарушения (ссылка на запись в CRM); срока на исправление.' }
          ]}
        ]
      },
      {
        number: '14', title: 'Ответственность за нарушение',
        content: [
          { type: 'subsection', number: '14.1', title: 'Шкала', content: [
            { type: 'olist', items: [
              '<strong>Первое нарушение</strong> — устное замечание, фиксация в Cliq.',
              '<strong>Второе нарушение того же пункта в течение 30 дней</strong> — письменное предупреждение, депремирование на 5–15% от месячного бонуса.',
              '<strong>Третье нарушение того же пункта в течение 90 дней</strong> — депремирование на 25–50% от месячного бонуса, разговор с непосредственным руководителем.',
              '<strong>Систематические нарушения</strong> (более 5 фиксаций в месяц по разным пунктам или 3 фиксации одного пункта в течение квартала) — основание для расторжения соглашения о сотрудничестве по инициативе компании.'
            ]}
          ]},
          { type: 'subsection', number: '14.2', title: 'Грубые нарушения', content: [
            { type: 'p', text: 'Однократно влекут депремирование 50% и могут быть основанием для немедленного прекращения сотрудничества:' },
            { type: 'list', items: [
              'Сокрытие переписки с клиентом от компании.',
              'Ведение клиента в личном канале с целью обхода CRM.',
              'Передача данных клиента третьим лицам.',
              'Удаление записей в CRM без согласования.',
              'Систематический обман в результатах задач.'
            ]}
          ]},
          { type: 'subsection', number: '14.3', title: 'День, не засчитанный в оплату труда', content: [
            { type: 'p', text: 'День, в котором не выполнен минимальный норматив задач (раздел 4.7) и нет уважительной причины (больничный, отгул, командировка, обучение), не учитывается в расчёте оплаты труда.' }
          ]}
        ]
      },
      {
        number: '15', title: 'Заключительные положения',
        content: [
          { type: 'subsection', number: '15.1', title: 'Вступление в силу', content: [
            { type: 'p', text: 'Регламент вступает в силу с даты утверждения и распространяется на всех действующих и новых сотрудников Департамента продаж.' }
          ]},
          { type: 'subsection', number: '15.2', title: 'Ознакомление', content: [
            { type: 'p', text: 'Каждый сотрудник подтверждает ознакомление с Регламентом отметкой (галочкой) в Zoho People. Без подтверждения ознакомления допуск к работе с CRM не производится.' }
          ]},
          { type: 'subsection', number: '15.3', title: 'Изменения', content: [
            { type: 'p', text: 'Изменения вносятся путём размещения обновлённой версии документа в Zoho People с оповещением сотрудников и обязательным повторным ознакомлением.' }
          ]}
        ]
      }
    ]
  },

  // ────────────────────────────────────────
  // 6. LEAVE AND TIME OFF POLICY
  // ────────────────────────────────────────
  {
    id: 'Leave_and_Time_Off_Policy',
    title: 'Leave and Time Off Policy',
    heroTitle: 'Leave &<br>Time Off',
    badge: 'Company Policy',
    subtitle: 'Vault Group \u2014 Annual leave, day offs, public holidays, and how to request time off.',
    icon: ICONS.calendar,
    seed: 12.5,
    intro: 'This policy outlines the rules for annual leave, day offs, public holidays, and the process for requesting time off at Vault.',
    closing: 'To request leave or sick days, please submit a request via the HR Portal. For any questions regarding calculations or accruals, contact <strong>work@vault.ist</strong>.',
    sections: [
      {
        number: '01', title: 'Annual Leave (Paid Time Off)',
        content: [
          { type: 'list', items: [
            '<strong>24 working days</strong> per year.',
            'Accrued proportionally at <strong>2 working days per month</strong>.',
            'Working days do not include weekends or public holidays.',
            'First leave is available after <strong>6 months</strong> of employment. In exceptional cases, earlier leave may be granted with manager approval.'
          ]}
        ]
      },
      {
        number: '02', title: 'Day Offs (Not Included in Annual Leave)',
        content: [
          { type: 'list', items: [
            '<strong>10 paid day offs</strong> per year.',
            'Provided due to the absence of a unified national holiday calendar across our international team.',
            'Used for national, cultural, or religious holidays personal to the employee.',
            'Not included in the 24 days of annual leave.',
            'Require approval from your direct manager.',
            'Do not carry over to the next year and are not compensated monetarily.'
          ]}
        ]
      },
      {
        number: '03', title: 'Public Holidays',
        content: [
          { type: 'p', text: 'National holidays in the employee\u2019s country of residence that do not coincide with the company calendar are taken using annual leave or day offs.' }
        ]
      },
      {
        number: '04', title: 'Unused Days',
        content: [
          { type: 'list', items: [
            'Unused annual leave and day offs <strong>expire at the end of the calendar year</strong>.',
            'No monetary compensation is provided for unused days.'
          ]}
        ]
      },
      {
        number: '05', title: 'Upon Termination',
        content: [
          { type: 'p', text: 'If more days have been used than accrued at the time of termination, the difference will be deducted from the final salary payment.' }
        ]
      },
      {
        number: '06', title: 'Requesting Leave',
        content: [
          { type: 'list', items: [
            'Agree on the dates with your direct manager.',
            'Submit a request through <strong>Vacation | Sick Leave Request</strong> in the HR Portal.',
            'Update your <strong>Out-of-Office Schedule</strong>.'
          ]},
          { type: 'callout', variant: 'important', html: '<strong>Important:</strong> All leave and day offs are granted subject to operational needs. It is recommended to plan your leave in advance (at least 3 months ahead). Failure to submit a timely request does not guarantee that leave will be approved.' },
          { type: 'callout', variant: 'tip', html: '<strong>Note:</strong> If you are employed through a Russian legal entity, leave and days off are governed by the Labor Code of the Russian Federation.' }
        ]
      },
    ]
  },
];

// ═══════════════════════════════════════════
// DEPARTMENT LANDING PAGE (Commercial, etc.)
// ═══════════════════════════════════════════

const DEPARTMENTS = {
  commercial: {
    id: 'commercial-department',
    title: 'Commercial Department',
    heroLine1: 'Commercial',
    heroLine2: 'Department',
    subtitle: 'Mandatory regulations, KPI standards, and process documents for the Sales, Business Development, Partnerships, and Marketing teams.',
    badge: 'Department Knowledge Base',
    label: 'Regulations'
  }
};

function generateDepartmentPage(deptKey, docsInDept) {
  const dept = DEPARTMENTS[deptKey];
  const cards = docsInDept.map(d => {
    const badge = d.badge || 'Regulation';
    return `
        <a href="${d.id}.html" class="card">
          <div class="card-inner">
            <div class="card-top">
              <div class="card-icon">${(d.icon || ICONS.shield).replace(/rgba\(255,255,255,0.6\)/g, 'rgba(255,255,255,0.7)').replace(/rgba\(255,255,255,0.8\)/g, 'rgba(255,255,255,0.9)')}</div>
              <div class="card-arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M5 12H19M12 5l7 7-7 7"/></svg></div>
            </div>
            <h3>${d.title}</h3>
            <p>${d.subtitle.replace(/^Vault Group\s*[—\-]\s*/, '')}</p>
            <div class="card-badge">${badge}</div>
          </div>
        </a>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${dept.title} — Vault Knowledge Base</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --deep-blue: #0019FF;
      --neon-blue: #6152F4;
      --white: #FFFFFF;
      --black: #191B20;
      --g100: #F5F6F8;
      --g200: #E8E9ED;
      --g500: #8B8D94;
      --g700: #4A4C52;
      --g900: #2A2C32;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--black);
      color: var(--white);
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
    }
    #bgCanvas { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; }
    .page { position: relative; z-index: 1; }
    .header {
      padding: 48px 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header .logo svg { height: 32px; width: auto; display: block; }
    .header-right { display: flex; align-items: center; gap: 16px; }
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 20px;
      border-radius: 100px;
      border: 1px solid rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.6);
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.25s ease;
    }
    .back-link:hover {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.25);
      color: rgba(255,255,255,0.9);
    }
    .back-link svg { width: 16px; height: 16px; stroke: currentColor; transition: transform 0.2s ease; }
    .back-link:hover svg { transform: translateX(-3px); }
    .header-badge {
      padding: 8px 18px;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 100px;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
    }
    .hero { padding: 40px 80px 80px; max-width: 980px; }
    .hero h1 {
      font-size: clamp(44px, 6vw, 72px);
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -0.04em;
      margin-bottom: 20px;
    }
    .hero h1 .gradient {
      background: linear-gradient(135deg, var(--deep-blue), var(--neon-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero p { font-size: 18px; color: rgba(255,255,255,0.5); line-height: 1.7; max-width: 620px; }
    .cards-section { padding: 0 80px 100px; }
    .cards-label {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.3);
      margin-bottom: 32px;
    }
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 20px;
    }
    .card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 20px;
      padding: 36px 32px;
      text-decoration: none;
      color: var(--white);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
    }
    .card::before {
      content: '';
      position: absolute; top: 0; left: 0;
      width: 100%; height: 100%;
      background: linear-gradient(135deg, rgba(0,25,255,0.06), rgba(97,82,244,0.03));
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .card:hover {
      border-color: rgba(0,25,255,0.3);
      transform: translateY(-4px);
      box-shadow: 0 20px 60px rgba(0,25,255,0.12);
    }
    .card:hover::before { opacity: 1; }
    .card-inner { position: relative; z-index: 1; }
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 28px;
    }
    .card-icon {
      width: 48px; height: 48px;
      display: flex; align-items: center; justify-content: center;
      background: rgba(0,25,255,0.1);
      border-radius: 14px;
      flex-shrink: 0;
    }
    .card-icon svg { width: 26px; height: 26px; }
    .card-arrow {
      width: 36px; height: 36px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 50%;
      background: rgba(255,255,255,0.05);
      transition: all 0.3s ease;
      flex-shrink: 0;
    }
    .card:hover .card-arrow { background: var(--deep-blue); transform: translateX(2px); }
    .card-arrow svg { width: 16px; height: 16px; stroke: rgba(255,255,255,0.4); transition: stroke 0.3s ease; }
    .card:hover .card-arrow svg { stroke: white; }
    .card h3 { font-size: 22px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 10px; line-height: 1.2; }
    .card p { font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.65; }
    .card-badge {
      display: inline-block;
      margin-top: 20px;
      padding: 5px 14px;
      border-radius: 100px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      background: rgba(97,82,244,0.12);
      color: rgba(255,255,255,0.55);
      border: 1px solid rgba(97,82,244,0.2);
    }
    .footer {
      padding: 40px 80px;
      border-top: 1px solid rgba(255,255,255,0.06);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer-text { font-size: 13px; color: rgba(255,255,255,0.2); }
    .footer .logo svg { height: 20px; width: auto; opacity: 0.3; }
    @media (max-width: 768px) {
      .header, .hero, .cards-section, .footer { padding-left: 24px; padding-right: 24px; }
      .cards-grid { grid-template-columns: 1fr; }
      .hero h1 { font-size: 36px; }
    }
  </style>
</head>
<body>
  <canvas id="bgCanvas"></canvas>
  <div class="page">
    <header class="header">
      <div class="logo">${LOGO_WHITE}</div>
      <div class="header-right">
        <a href="index.html" class="back-link"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Knowledge Base</a>
        <div class="header-badge">${dept.badge}</div>
      </div>
    </header>

    <section class="hero">
      <h1>${dept.heroLine1}<br><span class="gradient">${dept.heroLine2}</span></h1>
      <p>${dept.subtitle}</p>
    </section>

    <section class="cards-section">
      <div class="cards-label">${dept.label}</div>
      <div class="cards-grid">
${cards}
      </div>
    </section>

    <footer class="footer">
      <div class="footer-text">Vault Group &copy; 2026 &middot; Confidential &middot; Internal Use Only</div>
      <div class="logo">${LOGO_WHITE}</div>
    </footer>
  </div>

  <script>
    (function() {
      const canvas = document.getElementById('bgCanvas');
      const ctx = canvas.getContext('2d');
      let dpr = window.devicePixelRatio || 1;
      let w, h, time = 0;
      function resize() {
        w = window.innerWidth; h = window.innerHeight;
        canvas.width = w * dpr; canvas.height = h * dpr;
        canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      function draw() {
        ctx.clearRect(0, 0, w, h);
        const lineCount = 25;
        const centerY = h * 0.4;
        for (let i = 0; i < lineCount; i++) {
          const p = i / lineCount;
          const r = Math.floor(p * 60);
          const g = Math.floor(15 + p * 40);
          const b = Math.floor(200 - p * 10);
          const a = (0.03 + p * 0.1).toFixed(3);
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
          ctx.lineWidth = 1;
          for (let x = 0; x <= w; x += 4) {
            const xN = x / w;
            const y = centerY
              + Math.sin(xN * Math.PI * 2 + time * 0.4 + i * 0.25) * (30 + i * 3)
              + Math.sin(xN * Math.PI * 4.5 + time * 0.2 + i * 0.12) * (15 + i)
              + (i - lineCount / 2) * 7;
            if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        for (let g = 0; g < 2; g++) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0, 25, 255, 0.15)';
          ctx.lineWidth = 1.5;
          ctx.shadowColor = 'rgba(0, 25, 255, 0.3)';
          ctx.shadowBlur = 10;
          const off = g * 15;
          for (let x = 0; x <= w; x += 4) {
            const xN = x / w;
            const y = centerY
              + Math.sin(xN * Math.PI * 2.5 + time * 0.35 + off) * 60
              + Math.cos(xN * Math.PI * 1.5 + time * 0.2 + off * 0.5) * 30;
            if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
        time += 0.005;
        requestAnimationFrame(draw);
      }
      resize();
      window.addEventListener('resize', resize);
      draw();
    })();

    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = \`all 0.6s cubic-bezier(0.16, 1, 0.3, 1) \${i * 0.08}s\`;
      observer.observe(card);
    });
  </script>
</body>
</html>`;
}

// ═══════════════════════════════════════════
// BUILD
// ═══════════════════════════════════════════

const args = process.argv.slice(2);
const htmlOnly = args.includes('--html-only');
const pdfOnly = args.includes('--pdf-only');

const outputDir = path.join(__dirname, '..', 'output');
const docsDir = path.join(__dirname, '..', 'Docs');
fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(docsDir, { recursive: true });

// Group docs by department (skip webHidden — those don't appear on the site)
const docsByDept = {};
for (const doc of documents) {
  if (doc.department && !doc.webHidden) {
    docsByDept[doc.department] = docsByDept[doc.department] || [];
    docsByDept[doc.department].push(doc);
  }
}

// Generate HTML files
if (!pdfOnly) {
  console.log('\n  Generating HTML files...\n');
  for (const doc of documents) {
    const html = generateHTML(doc);
    fs.writeFileSync(path.join(outputDir, `${doc.id}.html`), html, 'utf-8');
    if (!doc.webHidden) {
      fs.writeFileSync(path.join(docsDir, `${doc.id}.html`), html, 'utf-8');
    }
    console.log(`  ✓ ${doc.id}.html${doc.webHidden ? ' (output only — webHidden)' : ''}`);
  }
  console.log(`\n  ${documents.length} HTML files written\n`);

  // Generate department landing pages
  for (const deptKey of Object.keys(docsByDept)) {
    const html = generateDepartmentPage(deptKey, docsByDept[deptKey]);
    const fileName = `${DEPARTMENTS[deptKey].id}.html`;
    fs.writeFileSync(path.join(outputDir, fileName), html, 'utf-8');
    fs.writeFileSync(path.join(docsDir, fileName), html, 'utf-8');
    console.log(`  ✓ ${fileName} (department landing page)`);
  }

  // Generate content.json — merge with existing HR edits
  const contentJsonPath = path.join(docsDir, 'content.json');
  let existingContent = {};
  try {
    existingContent = JSON.parse(fs.readFileSync(contentJsonPath, 'utf-8'));
  } catch {}

  const contentData = {};
  for (const doc of documents) {
    const defaults = {
      intro: doc.intro || '',
      closing: doc.closing || '',
      sections: doc.sections.map(s => ({
        number: s.number,
        title: s.title,
        html: renderContent(s.content)
      }))
    };

    const existing = existingContent[doc.id];
    if (existing) {
      // Preserve HR edits: use existing values, only add new sections from build
      contentData[doc.id] = {
        intro: existing.intro || defaults.intro,
        closing: existing.closing || defaults.closing,
        sections: defaults.sections.map((defSec, i) => {
          const exSec = existing.sections && existing.sections[i];
          if (exSec && exSec.number === defSec.number) {
            return { number: defSec.number, title: exSec.title, html: exSec.html };
          }
          return defSec; // new section — use default
        })
      };
      console.log(`  ↔ ${doc.id}: merged with existing HR edits`);
    } else {
      contentData[doc.id] = defaults;
      console.log(`  + ${doc.id}: new document, using defaults`);
    }
  }

  fs.writeFileSync(contentJsonPath, JSON.stringify(contentData, null, 2), 'utf-8');
  console.log('  ✓ content.json written to docs/\n');
}

// Generate PDFs
if (!htmlOnly) {
  (async () => {
    console.log('  Generating PDF files...\n');
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const doc of documents) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });

      const htmlPath = path.join(outputDir, `${doc.id}.html`);
      // If HTML wasn't just generated, generate it now
      if (pdfOnly && !fs.existsSync(htmlPath)) {
        fs.writeFileSync(htmlPath, generateHTML(doc), 'utf-8');
      }

      await page.goto(`file://${htmlPath}`, {
        waitUntil: 'networkidle0',
        timeout: 60000
      });

      // Wait for fonts
      await page.evaluate(() => document.fonts.ready);
      await new Promise(r => setTimeout(r, 1500));

      // Switch to PDF mode
      await page.evaluate(() => {
        document.body.classList.add('pdf-mode');
      });

      const pdfPath = path.join(outputDir, `${doc.id}.pdf`);
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' },
        displayHeaderFooter: false
      });

      // Mirror PDF into Docs/ only for department documents (kb.vault.ist download)
      if (doc.department) {
        try {
          fs.copyFileSync(pdfPath, path.join(docsDir, `${doc.id}.pdf`));
        } catch (e) {
          console.error(`    ! could not copy PDF to Docs/: ${e.message}`);
        }
      }

      await page.close();
      console.log(`  ✓ ${doc.id}.pdf`);
    }

    await browser.close();
    console.log(`\n  ${documents.length} PDF files written to output/\n`);
  })().catch(err => {
    console.error('PDF generation failed:', err.message);
    process.exit(1);
  });
}
