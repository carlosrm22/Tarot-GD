export interface Sefira {
  nombre: string;
  titulo: string;
  descripcion: string;
  color: string;
  elemento: string;
  planeta: string;
  nombre_divino: string;
}

export interface Path {
  start: keyof typeof SEPHIROTH_COORDS;
  end: keyof typeof SEPHIROTH_COORDS;
  letra: string;
  carta: string;
}

export const SEPHIROTH_COORDS = {
  kether: { x: 300, y: 50 },
  chokmah: { x: 150, y: 150 },
  binah: { x: 450, y: 150 },
  chesed: { x: 150, y: 250 },
  geburah: { x: 450, y: 250 },
  tiferet: { x: 300, y: 300 },
  netzach: { x: 150, y: 400 },
  hod: { x: 450, y: 400 },
  yesod: { x: 300, y: 450 },
  malkuth: { x: 300, y: 550 }
} as const;

export const SEPHIROTH_INFO: Record<keyof typeof SEPHIROTH_COORDS, Sefira> = {
  kether: {
    nombre: "Kether",
    titulo: "La Corona",
    descripcion: "El punto primordial de la creación, la unidad divina.",
    color: "#ffffff",
    elemento: "Aire primordial",
    planeta: "Primer móvil",
    nombre_divino: "Eheieh"
  },
  chokmah: {
    nombre: "Chokmah",
    titulo: "La Sabiduría",
    descripcion: "La fuerza dinámica y masculina del universo.",
    color: "#4169E1",
    elemento: "Fuego",
    planeta: "Zodíaco",
    nombre_divino: "Yah"
  },
  binah: {
    nombre: "Binah",
    titulo: "El Entendimiento",
    descripcion: "La forma receptiva y femenina del universo.",
    color: "#4B0082",
    elemento: "Agua",
    planeta: "Saturno",
    nombre_divino: "YHVH Elohim"
  },
  chesed: {
    nombre: "Chesed",
    titulo: "La Misericordia",
    descripcion: "La gracia y el amor expansivo.",
    color: "#1E90FF",
    elemento: "Agua",
    planeta: "Júpiter",
    nombre_divino: "El"
  },
  geburah: {
    nombre: "Geburah",
    titulo: "La Severidad",
    descripcion: "El juicio y la restricción necesaria.",
    color: "#FF0000",
    elemento: "Fuego",
    planeta: "Marte",
    nombre_divino: "Elohim Gibor"
  },
  tiferet: {
    nombre: "Tiferet",
    titulo: "La Belleza",
    descripcion: "El centro armonizador del árbol.",
    color: "#FFD700",
    elemento: "Aire",
    planeta: "Sol",
    nombre_divino: "YHVH Eloah VeDaath"
  },
  netzach: {
    nombre: "Netzach",
    titulo: "La Victoria",
    descripcion: "Las emociones y el deseo natural.",
    color: "#32CD32",
    elemento: "Agua",
    planeta: "Venus",
    nombre_divino: "YHVH Tzabaoth"
  },
  hod: {
    nombre: "Hod",
    titulo: "El Esplendor",
    descripcion: "El intelecto y la forma.",
    color: "#FF4500",
    elemento: "Aire",
    planeta: "Mercurio",
    nombre_divino: "Elohim Tzabaoth"
  },
  yesod: {
    nombre: "Yesod",
    titulo: "El Fundamento",
    descripcion: "La base de la manifestación material.",
    color: "#9370DB",
    elemento: "Aire",
    planeta: "Luna",
    nombre_divino: "Shaddai El Chai"
  },
  malkuth: {
    nombre: "Malkuth",
    titulo: "El Reino",
    descripcion: "El mundo material y físico.",
    color: "#8B4513",
    elemento: "Tierra",
    planeta: "Tierra",
    nombre_divino: "Adonai Melekh"
  }
};

export const PATHS_INFO: Path[] = [
  { start: "kether", end: "chokmah", letra: "א", carta: "El Loco" },
  { start: "kether", end: "binah", letra: "ב", carta: "El Mago" },
  { start: "kether", end: "tiferet", letra: "ג", carta: "La Sacerdotisa" },
  { start: "chokmah", end: "binah", letra: "ד", carta: "La Emperatriz" },
  { start: "chokmah", end: "tiferet", letra: "ה", carta: "El Emperador" },
  { start: "chokmah", end: "chesed", letra: "ו", carta: "El Hierofante" },
  { start: "binah", end: "tiferet", letra: "ז", carta: "Los Amantes" },
  { start: "binah", end: "geburah", letra: "ח", carta: "La Carroza" },
  { start: "chesed", end: "geburah", letra: "ט", carta: "La Fuerza" },
  { start: "chesed", end: "tiferet", letra: "י", carta: "El Ermitaño" },
  { start: "chesed", end: "netzach", letra: "כ", carta: "La Rueda" },
  { start: "geburah", end: "tiferet", letra: "ל", carta: "La Justicia" },
  { start: "geburah", end: "hod", letra: "מ", carta: "El Colgado" },
  { start: "tiferet", end: "netzach", letra: "נ", carta: "La Muerte" },
  { start: "tiferet", end: "yesod", letra: "ס", carta: "La Templanza" },
  { start: "tiferet", end: "hod", letra: "ע", carta: "El Diablo" },
  { start: "netzach", end: "hod", letra: "פ", carta: "La Torre" },
  { start: "netzach", end: "yesod", letra: "צ", carta: "La Estrella" },
  { start: "netzach", end: "malkuth", letra: "ק", carta: "La Luna" },
  { start: "yesod", end: "hod", letra: "ר", carta: "El Sol" },
  { start: "hod", end: "malkuth", letra: "ש", carta: "El Juicio" },
  { start: "yesod", end: "malkuth", letra: "ת", carta: "El Universo" }
];