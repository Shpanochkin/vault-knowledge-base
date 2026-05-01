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
  calendar: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="12" width="32" height="28" rx="3" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none"/><path d="M8 20H40" stroke="rgba(255,255,255,0.6)" stroke-width="2"/><path d="M16 8V14" stroke="rgba(255,255,255,0.8)" stroke-width="2.5" stroke-linecap="round"/><path d="M32 8V14" stroke="rgba(255,255,255,0.8)" stroke-width="2.5" stroke-linecap="round"/><circle cx="18" cy="28" r="2" fill="rgba(255,255,255,0.5)"/><circle cx="24" cy="28" r="2" fill="rgba(255,255,255,0.5)"/><circle cx="30" cy="28" r="2" fill="rgba(255,255,255,0.5)"/><circle cx="18" cy="34" r="2" fill="rgba(255,255,255,0.5)"/></svg>`,
  chart: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8V40H42" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="12" y="24" width="5" height="12" rx="1" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none"/><rect x="21" y="16" width="5" height="20" rx="1" stroke="rgba(255,255,255,0.85)" stroke-width="2.5" fill="none"/><rect x="30" y="28" width="5" height="8" rx="1" stroke="rgba(255,255,255,0.6)" stroke-width="2" fill="none"/><path d="M14 22L23 14L33 26" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`
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
    body.pdf-mode .footer-back-wrap,
    body.pdf-mode .footer-right { display: none !important; }
    @media print {
      .footer-back,
      .footer-back-wrap,
      .footer-right { display: none !important; }
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

module.exports = {
  LOGO_WHITE, LOGO_COLOR, LOGO_MARK,
  ICONS,
  generateWaveSVG, generateFooterWaveSVG,
  esc, renderContent, generateHTML
};
