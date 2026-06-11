/* Generador de iconos e imágenes SVG de productos para e-commerce */

const PRODUCT_CATEGORIES = {
  electronica: {
    label: "Electrónica",
    palettes: [
      ["#1f2a44", "#3a86ff"],
      ["#0b132b", "#5bc0be"],
      ["#1b1b2f", "#e94560"],
      ["#283655", "#4ecca3"]
    ],
    names: ["Smartphone", "Auriculares", "Tablet", "Smartwatch", "Cámara", "Altavoz BT", "Power Bank", "Drone Mini"],
    icons: ["phone", "headphones", "camera", "watch", "speaker"]
  },
  moda: {
    label: "Ropa y Moda",
    palettes: [
      ["#fff1e6", "#ff6f61"],
      ["#f7e9e3", "#6a4c93"],
      ["#fdebd3", "#2e86ab"],
      ["#fceade", "#e76f51"]
    ],
    names: ["Camiseta", "Zapatillas", "Bolso", "Chaqueta", "Vestido", "Gorra", "Pantalón", "Bufanda"],
    icons: ["shirt", "shoe", "bag", "hat"]
  },
  hogar: {
    label: "Hogar y Muebles",
    palettes: [
      ["#f1f5f1", "#6d9886"],
      ["#f4ede4", "#c08552"],
      ["#eef2f7", "#5c6b73"],
      ["#fbf3e9", "#a26769"]
    ],
    names: ["Sofá", "Lámpara", "Silla", "Mesa", "Estante", "Espejo", "Maceta", "Alfombra"],
    icons: ["sofa", "lamp", "chair", "table", "plant"]
  },
  belleza: {
    label: "Belleza y Cosméticos",
    palettes: [
      ["#fff0f3", "#ff8fab"],
      ["#fdf0f4", "#c9184a"],
      ["#fef6e4", "#f582ae"],
      ["#fff1e6", "#a4133c"]
    ],
    names: ["Labial", "Perfume", "Crema Facial", "Esmalte", "Brocha", "Sérum", "Sombras", "Protector Solar"],
    icons: ["lipstick", "perfume", "jar", "brush"]
  },
  alimentos: {
    label: "Alimentos y Bebidas",
    palettes: [
      ["#fef9ef", "#f4a261"],
      ["#f1faee", "#e76f51"],
      ["#fffbe9", "#2a9d8f"],
      ["#fdf6ec", "#e9c46a"]
    ],
    names: ["Café Premium", "Botella de Agua", "Snack Saludable", "Miel Orgánica", "Té Artesanal", "Chocolate", "Aceite de Oliva", "Jugo Natural"],
    icons: ["bottle", "cup", "fruit", "box"]
  },
  deportes: {
    label: "Deportes y Aire Libre",
    palettes: [
      ["#eef9ff", "#1d3557"],
      ["#f0f7f4", "#2a9d8f"],
      ["#fff5eb", "#e63946"],
      ["#f5f5f5", "#457b9d"]
    ],
    names: ["Balón de Fútbol", "Mancuerna", "Zapatillas Running", "Raqueta", "Bicicleta", "Casco", "Botella Deportiva", "Yoga Mat"],
    icons: ["ball", "dumbbell", "shoe", "bike", "racket"]
  },
  juguetes: {
    label: "Juguetes y Niños",
    palettes: [
      ["#fff8e1", "#ff9f1c"],
      ["#e8f9ff", "#2ec4b6"],
      ["#fff0f6", "#e71d36"],
      ["#f1f7ff", "#3a86ff"]
    ],
    names: ["Bloques de Construcción", "Osito de Peluche", "Robot Juguete", "Pelota", "Cometa", "Auto a Control Remoto", "Rompecabezas", "Muñeca"],
    icons: ["blocks", "bear", "robot", "ball", "kite"]
  },
  joyeria: {
    label: "Joyería y Accesorios",
    palettes: [
      ["#fdfcf9", "#bfa181"],
      ["#fff8f0", "#caa472"],
      ["#f9f5f0", "#9c6644"],
      ["#fffaf3", "#7f5539"]
    ],
    names: ["Anillo de Plata", "Collar", "Reloj Elegante", "Aretes", "Pulsera", "Gemelos", "Broche", "Cadena de Oro"],
    icons: ["ring", "necklace", "watch", "earring"]
  },
  mascotas: {
    label: "Mascotas",
    palettes: [
      ["#f0f7ff", "#577590"],
      ["#fff7ed", "#f4a261"],
      ["#f1faee", "#43aa8b"],
      ["#fef6e4", "#f3722c"]
    ],
    names: ["Hueso de Juguete", "Cama para Mascota", "Correa", "Comedero", "Collar Antipulgas", "Pelota Interactiva", "Transportadora", "Shampoo para Mascotas"],
    icons: ["bone", "paw", "leash", "bowl"]
  },
  tecnologia: {
    label: "Tecnología y Oficina",
    palettes: [
      ["#eef1f5", "#264653"],
      ["#f4f4f9", "#3d5a80"],
      ["#edf2f4", "#118ab2"],
      ["#f8f9fa", "#2b2d42"]
    ],
    names: ["Laptop", "Monitor", "Teclado Mecánico", "Mouse Inalámbrico", "Impresora", "Webcam", "Disco Externo", "Router WiFi"],
    icons: ["laptop", "monitor", "keyboard", "mouse", "printer"]
  }
};

// Cada función dibuja un ícono centrado en (200,200) dentro de un viewBox 400x400.
const ICONS = {
  phone: (c) => `
    <rect x="150" y="80" width="100" height="240" rx="16" fill="${c}" />
    <rect x="160" y="100" width="80" height="180" rx="4" fill="#ffffff" opacity="0.85" />
    <circle cx="200" cy="295" r="6" fill="#ffffff" />`,

  headphones: (c) => `
    <path d="M120 210 a80 80 0 0 1 160 0" fill="none" stroke="${c}" stroke-width="16" stroke-linecap="round" />
    <rect x="105" y="200" width="40" height="70" rx="14" fill="${c}" />
    <rect x="255" y="200" width="40" height="70" rx="14" fill="${c}" />`,

  camera: (c) => `
    <rect x="100" y="140" width="200" height="140" rx="14" fill="${c}" />
    <rect x="170" y="105" width="60" height="35" rx="8" fill="${c}" />
    <circle cx="200" cy="210" r="45" fill="#ffffff" opacity="0.85" />
    <circle cx="200" cy="210" r="25" fill="${c}" />`,

  watch: (c) => `
    <rect x="170" y="60" width="60" height="40" rx="8" fill="${c}" />
    <rect x="170" y="300" width="60" height="40" rx="8" fill="${c}" />
    <circle cx="200" cy="200" r="85" fill="${c}" />
    <circle cx="200" cy="200" r="62" fill="#ffffff" opacity="0.9" />
    <line x1="200" y1="200" x2="200" y2="160" stroke="${c}" stroke-width="6" stroke-linecap="round"/>
    <line x1="200" y1="200" x2="230" y2="210" stroke="${c}" stroke-width="6" stroke-linecap="round"/>`,

  speaker: (c) => `
    <rect x="140" y="80" width="120" height="240" rx="20" fill="${c}" />
    <circle cx="200" cy="150" r="28" fill="#ffffff" opacity="0.85" />
    <circle cx="200" cy="240" r="44" fill="#ffffff" opacity="0.85" />
    <circle cx="200" cy="240" r="22" fill="${c}" />`,

  shirt: (c) => `
    <path d="M140 110 L170 90 L200 110 L230 90 L260 110 L280 145 L255 165 L245 150 L245 300 L155 300 L155 150 L145 165 L120 145 Z" fill="${c}" />`,

  shoe: (c) => `
    <path d="M110 260 q0 -50 40 -60 l60 -15 q30 -8 55 10 l40 30 q30 10 35 35 v15 q0 10 -10 10 H120 q-10 0 -10 -10 Z" fill="${c}" />
    <rect x="110" y="270" width="180" height="20" rx="6" fill="${c}" opacity="0.6"/>`,

  bag: (c) => `
    <path d="M150 150 q0 -50 50 -50 q50 0 50 50" fill="none" stroke="${c}" stroke-width="14" />
    <rect x="120" y="150" width="160" height="150" rx="16" fill="${c}" />`,

  hat: (c) => `
    <ellipse cx="200" cy="240" rx="110" ry="24" fill="${c}" />
    <path d="M150 240 q0 -90 50 -90 q50 0 50 90 Z" fill="${c}" opacity="0.85"/>`,

  sofa: (c) => `
    <rect x="100" y="180" width="200" height="80" rx="16" fill="${c}" />
    <rect x="90" y="150" width="40" height="100" rx="12" fill="${c}" />
    <rect x="270" y="150" width="40" height="100" rx="12" fill="${c}" />
    <rect x="110" y="150" width="180" height="50" rx="12" fill="${c}" opacity="0.8"/>
    <rect x="110" y="260" width="20" height="30" fill="${c}" />
    <rect x="270" y="260" width="20" height="30" fill="${c}" />`,

  lamp: (c) => `
    <path d="M150 130 L250 130 L280 220 L120 220 Z" fill="${c}" />
    <rect x="195" y="220" width="10" height="80" fill="${c}" />
    <rect x="160" y="300" width="80" height="12" rx="6" fill="${c}" />`,

  chair: (c) => `
    <rect x="140" y="120" width="120" height="20" rx="6" fill="${c}" />
    <rect x="140" y="140" width="20" height="100" fill="${c}" />
    <rect x="240" y="140" width="20" height="100" fill="${c}" />
    <rect x="130" y="240" width="140" height="20" rx="6" fill="${c}" />
    <rect x="140" y="260" width="14" height="60" fill="${c}" />
    <rect x="246" y="260" width="14" height="60" fill="${c}" />`,

  table: (c) => `
    <rect x="100" y="160" width="200" height="20" rx="6" fill="${c}" />
    <rect x="120" y="180" width="14" height="100" fill="${c}" />
    <rect x="266" y="180" width="14" height="100" fill="${c}" />`,

  plant: (c) => `
    <path d="M150 280 L250 280 L235 220 L165 220 Z" fill="${c}" />
    <path d="M200 220 C150 200 150 140 200 110 C250 140 250 200 200 220 Z" fill="${c}" opacity="0.8"/>
    <path d="M200 220 C170 210 170 170 200 150 C230 170 230 210 200 220 Z" fill="${c}"/>`,

  lipstick: (c) => `
    <rect x="175" y="180" width="50" height="100" rx="8" fill="${c}" />
    <path d="M175 180 L225 180 L215 120 L185 120 Z" fill="${c}" opacity="0.8"/>
    <rect x="170" y="270" width="60" height="40" rx="8" fill="${c}" />`,

  perfume: (c) => `
    <rect x="170" y="160" width="60" height="120" rx="10" fill="${c}" />
    <rect x="190" y="120" width="20" height="40" fill="${c}" />
    <rect x="180" y="100" width="40" height="22" rx="6" fill="${c}" opacity="0.7"/>`,

  jar: (c) => `
    <rect x="150" y="150" width="100" height="120" rx="18" fill="${c}" />
    <rect x="160" y="130" width="80" height="24" rx="8" fill="${c}" opacity="0.7"/>`,

  brush: (c) => `
    <rect x="195" y="150" width="10" height="140" rx="4" fill="${c}" />
    <ellipse cx="200" cy="130" rx="35" ry="35" fill="${c}" opacity="0.8"/>`,

  bottle: (c) => `
    <rect x="175" y="160" width="50" height="130" rx="10" fill="${c}" />
    <rect x="185" y="120" width="30" height="45" rx="6" fill="${c}" />
    <rect x="180" y="105" width="40" height="18" rx="4" fill="${c}" opacity="0.7"/>`,

  cup: (c) => `
    <path d="M150 140 H250 L240 280 H160 Z" fill="${c}" />
    <path d="M250 160 q40 0 40 40 q0 40 -40 40" fill="none" stroke="${c}" stroke-width="12"/>`,

  fruit: (c) => `
    <circle cx="200" cy="220" r="70" fill="${c}" />
    <path d="M200 150 q10 -30 40 -30" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/>
    <ellipse cx="230" cy="130" rx="18" ry="10" fill="${c}" opacity="0.8"/>`,

  box: (c) => `
    <rect x="120" y="150" width="160" height="140" rx="10" fill="${c}" />
    <path d="M120 190 L280 190" stroke="#ffffff" stroke-width="8" opacity="0.7"/>
    <path d="M200 150 L200 290" stroke="#ffffff" stroke-width="8" opacity="0.7"/>`,

  ball: (c) => `
    <circle cx="200" cy="200" r="90" fill="${c}" />
    <path d="M200 110 v180 M110 200 h180 M135 135 q65 65 130 0 M135 265 q65 -65 130 0" stroke="#ffffff" stroke-width="6" fill="none" opacity="0.8"/>`,

  dumbbell: (c) => `
    <rect x="130" y="190" width="140" height="20" rx="6" fill="${c}" />
    <rect x="105" y="160" width="35" height="80" rx="10" fill="${c}" />
    <rect x="260" y="160" width="35" height="80" rx="10" fill="${c}" />`,

  bike: (c) => `
    <circle cx="140" cy="250" r="45" fill="none" stroke="${c}" stroke-width="10" />
    <circle cx="260" cy="250" r="45" fill="none" stroke="${c}" stroke-width="10" />
    <path d="M140 250 L190 160 L240 250 M190 160 L160 250 M190 160 L230 160 M240 250 L260 250" stroke="${c}" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  racket: (c) => `
    <ellipse cx="200" cy="160" rx="55" ry="70" fill="none" stroke="${c}" stroke-width="12" />
    <rect x="190" y="225" width="20" height="90" rx="8" fill="${c}" />`,

  blocks: (c) => `
    <rect x="120" y="150" width="70" height="70" rx="8" fill="${c}" />
    <rect x="210" y="150" width="70" height="70" rx="8" fill="${c}" opacity="0.7"/>
    <rect x="165" y="230" width="70" height="70" rx="8" fill="${c}" opacity="0.85"/>`,

  bear: (c) => `
    <circle cx="200" cy="220" r="70" fill="${c}" />
    <circle cx="155" cy="150" r="28" fill="${c}" />
    <circle cx="245" cy="150" r="28" fill="${c}" />
    <circle cx="180" cy="210" r="10" fill="#ffffff" opacity="0.9"/>
    <circle cx="220" cy="210" r="10" fill="#ffffff" opacity="0.9"/>
    <ellipse cx="200" cy="240" rx="20" ry="14" fill="#ffffff" opacity="0.9"/>`,

  robot: (c) => `
    <rect x="140" y="140" width="120" height="100" rx="14" fill="${c}" />
    <rect x="170" y="250" width="60" height="50" rx="8" fill="${c}" opacity="0.8"/>
    <circle cx="175" cy="180" r="12" fill="#ffffff" opacity="0.9"/>
    <circle cx="225" cy="180" r="12" fill="#ffffff" opacity="0.9"/>
    <rect x="190" y="100" width="20" height="30" fill="${c}"/>
    <circle cx="200" cy="95" r="10" fill="${c}"/>`,

  kite: (c) => `
    <path d="M200 90 L270 200 L200 310 L130 200 Z" fill="${c}" />
    <line x1="200" y1="310" x2="220" y2="360" stroke="${c}" stroke-width="4"/>`,

  ring: (c) => `
    <circle cx="200" cy="230" r="60" fill="none" stroke="${c}" stroke-width="16" />
    <path d="M175 175 L200 130 L225 175 Z" fill="${c}" />`,

  necklace: (c) => `
    <path d="M130 130 q70 110 140 0" fill="none" stroke="${c}" stroke-width="10" />
    <circle cx="200" cy="250" r="28" fill="${c}" />`,

  earring: (c) => `
    <circle cx="170" cy="140" r="14" fill="${c}" />
    <path d="M170 154 q0 60 0 90" stroke="${c}" stroke-width="8" fill="none"/>
    <circle cx="170" cy="260" r="22" fill="${c}" />
    <circle cx="230" cy="140" r="14" fill="${c}" />
    <path d="M230 154 q0 60 0 90" stroke="${c}" stroke-width="8" fill="none"/>
    <circle cx="230" cy="260" r="22" fill="${c}" />`,

  bone: (c) => `
    <path d="M140 200 q-20 -20 -40 0 q-20 20 0 40 q20 20 40 0 L260 200 q20 20 40 0 q20 -20 0 -40 q-20 -20 -40 0 Z" fill="${c}" />`,

  paw: (c) => `
    <ellipse cx="200" cy="240" rx="55" ry="40" fill="${c}" />
    <circle cx="150" cy="170" r="22" fill="${c}" />
    <circle cx="200" cy="150" r="24" fill="${c}" />
    <circle cx="250" cy="170" r="22" fill="${c}" />`,

  leash: (c) => `
    <path d="M120 150 q140 0 160 140" fill="none" stroke="${c}" stroke-width="14" />
    <circle cx="280" cy="290" r="22" fill="none" stroke="${c}" stroke-width="10"/>`,

  bowl: (c) => `
    <path d="M120 200 a80 60 0 0 0 160 0 Z" fill="${c}" />
    <ellipse cx="200" cy="200" rx="80" ry="18" fill="${c}" opacity="0.6"/>`,

  laptop: (c) => `
    <rect x="120" y="120" width="160" height="100" rx="8" fill="${c}" />
    <rect x="135" y="135" width="130" height="70" fill="#ffffff" opacity="0.85"/>
    <rect x="100" y="225" width="200" height="16" rx="6" fill="${c}" />`,

  monitor: (c) => `
    <rect x="110" y="110" width="180" height="120" rx="10" fill="${c}" />
    <rect x="125" y="125" width="150" height="90" fill="#ffffff" opacity="0.85"/>
    <rect x="180" y="230" width="40" height="30" fill="${c}" />
    <rect x="160" y="260" width="80" height="14" rx="6" fill="${c}" />`,

  keyboard: (c) => `
    <rect x="100" y="160" width="200" height="90" rx="10" fill="${c}" />
    ${Array.from({length: 4}).map((_,r)=>Array.from({length:7}).map((_,col)=>`<rect x="${115+col*26}" y="${175+r*18}" width="20" height="12" rx="2" fill="#ffffff" opacity="0.6"/>`).join('')).join('')}`,

  mouse: (c) => `
    <rect x="170" y="120" width="60" height="120" rx="30" fill="${c}" />
    <rect x="195" y="130" width="10" height="40" fill="#ffffff" opacity="0.7"/>`,

  printer: (c) => `
    <rect x="120" y="160" width="160" height="80" rx="10" fill="${c}" />
    <rect x="145" y="120" width="110" height="50" rx="6" fill="${c}" opacity="0.8"/>
    <rect x="150" y="240" width="100" height="40" fill="#ffffff" opacity="0.85" stroke="${c}" stroke-width="4"/>`
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomPrice() {
  const price = (Math.random() * 490 + 9.99).toFixed(2);
  return `$${price}`;
}

/**
 * Genera el SVG de un producto para una categoría dada.
 * @param {string} categoryKey
 * @param {number} size
 * @param {boolean} withBadge
 * @returns {{svg: string, name: string, category: string}}
 */
function generateProductSVG(categoryKey, size, withBadge) {
  const category = PRODUCT_CATEGORIES[categoryKey];
  const [bg, accent] = pick(category.palettes);
  const iconKey = pick(category.icons);
  const iconMarkup = ICONS[iconKey](accent);
  const name = pick(category.names);
  const sku = `SKU-${Math.floor(Math.random() * 90000 + 10000)}`;

  const badgeMarkup = withBadge ? `
    <g transform="translate(290, 30)">
      <rect x="0" y="0" width="90" height="40" rx="20" fill="${accent}" />
      <text x="45" y="26" font-family="Segoe UI, Arial, sans-serif" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">${randomPrice()}</text>
    </g>` : '';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="${size}" height="${size}">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}" />
      <stop offset="100%" stop-color="${shadeColor(bg, -6)}" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" rx="24" fill="url(#bgGrad)" />
  ${iconMarkup}
  ${badgeMarkup}
  <text x="200" y="370" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="600" fill="${accent}" text-anchor="middle">${name}</text>
  <text x="200" y="392" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="${accent}" opacity="0.7" text-anchor="middle">${sku}</text>
</svg>`;

  return { svg, name, category: category.label, sku };
}

function shadeColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  let r = (num >> 16) + Math.round(2.55 * percent);
  let g = ((num >> 8) & 0x00FF) + Math.round(2.55 * percent);
  let b = (num & 0x0000FF) + Math.round(2.55 * percent);
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return `#${(0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1)}`;
}
