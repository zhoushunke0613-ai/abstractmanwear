export interface Product {
  id: string;
  category: string;
  name: Record<string, string>;
  description: Record<string, string>;
  material: string;
  sizes: string[];
  colors: string[];
  image: string;
  featured: boolean;
}

export const categories = [
  {
    id: "boxer-briefs",
    name: { en: "Boxer Briefs", zh: "平角内裤", ja: "ボクサーブリーフ" },
  },
  {
    id: "briefs",
    name: { en: "Briefs", zh: "三角内裤", ja: "ブリーフ" },
  },
  {
    id: "trunks",
    name: { en: "Trunks", zh: "短款平角裤", ja: "トランクス" },
  },
  {
    id: "sport",
    name: { en: "Sport", zh: "运动内裤", ja: "スポーツ" },
  },
];

export const products: Product[] = [
  {
    id: "modal-boxer-brief",
    category: "boxer-briefs",
    name: {
      en: "Modal Boxer Brief",
      zh: "莫代尔平角内裤",
      ja: "モダールボクサーブリーフ",
    },
    description: {
      en: "Ultra-soft Modal fabric with 3D ergonomic pouch. Breathable, moisture-wicking, and silky smooth against the skin.",
      zh: "超柔莫代尔面料，3D人体工学囊袋设计。透气吸湿，丝滑触感。",
      ja: "超ソフトモダール素材、3D人間工学ポーチ付き。通気性と吸湿性に優れ、シルクのような肌触り。",
    },
    material: "95% Modal / 5% Elastane",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Black", "Navy", "Gray", "White"],
    image: "/images/boxer-brief-1.jpg",
    featured: true,
  },
  {
    id: "ice-silk-boxer",
    category: "boxer-briefs",
    name: {
      en: "Ice Silk Boxer Brief",
      zh: "冰丝平角内裤",
      ja: "アイスシルクボクサーブリーフ",
    },
    description: {
      en: "Cooling ice silk technology for hot climates. Ultra-thin, lightweight, and quick-drying with seamless construction.",
      zh: "冰丝凉感科技，适合炎热气候。超薄轻量，速干无痕设计。",
      ja: "暑い気候向けのアイスシルク冷感技術。超薄・軽量・速乾のシームレス構造。",
    },
    material: "92% Nylon / 8% Elastane",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Black", "Light Gray", "Blue"],
    image: "/images/boxer-brief-2.jpg",
    featured: true,
  },
  {
    id: "cotton-brief",
    category: "briefs",
    name: {
      en: "Premium Cotton Brief",
      zh: "精梳棉三角内裤",
      ja: "プレミアムコットンブリーフ",
    },
    description: {
      en: "Long-staple combed cotton for everyday comfort. Classic cut with reinforced waistband and flat-lock seams.",
      zh: "长绒精梳棉，日常舒适之选。经典剪裁，加强腰带，平锁缝工艺。",
      ja: "毎日の快適さのための長繊維コーマコットン。強化ウエストバンドとフラットロックシーム。",
    },
    material: "95% Combed Cotton / 5% Elastane",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["White", "Black", "Heather Gray"],
    image: "/images/brief-1.jpg",
    featured: true,
  },
  {
    id: "micro-modal-trunk",
    category: "trunks",
    name: {
      en: "Micro-Modal Trunk",
      zh: "微莫代尔短款平角裤",
      ja: "マイクロモダールトランクス",
    },
    description: {
      en: "Luxuriously soft Micro-Modal with shorter inseam. Perfect balance of support and freedom with no-roll waistband.",
      zh: "奢华柔软的微莫代尔，短裤脚设计。支撑与自由的完美平衡，防卷腰带。",
      ja: "贅沢に柔らかいマイクロモダール、短めの股下。サポートと自由のバランス、巻き上がらないウエスト。",
    },
    material: "92% Micro-Modal / 8% Elastane",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Burgundy", "Navy"],
    image: "/images/trunk-1.jpg",
    featured: true,
  },
  {
    id: "sport-performance",
    category: "sport",
    name: {
      en: "Sport Performance Brief",
      zh: "运动功能内裤",
      ja: "スポーツパフォーマンスブリーフ",
    },
    description: {
      en: "Engineered for high-intensity activities. Anti-bacterial, quick-dry fabric with ventilation zones and anti-chafe design.",
      zh: "为高强度运动而设计。抗菌速干面料，透气区域设计，防磨损。",
      ja: "高強度アクティビティ向け設計。抗菌・速乾素材、通気ゾーンと防擦れ設計。",
    },
    material: "88% Recycled Polyester / 12% Elastane",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Black", "Dark Gray"],
    image: "/images/sport-1.jpg",
    featured: false,
  },
  {
    id: "bamboo-boxer",
    category: "boxer-briefs",
    name: {
      en: "Bamboo Fiber Boxer Brief",
      zh: "竹纤维平角内裤",
      ja: "バンブーファイバーボクサーブリーフ",
    },
    description: {
      en: "Sustainable bamboo fiber with natural antibacterial properties. Thermo-regulating and incredibly soft.",
      zh: "可持续竹纤维，天然抗菌性能。温度调节功能，触感极其柔软。",
      ja: "天然の抗菌性を持つサステナブルなバンブーファイバー。温度調節機能と驚くほどの柔らかさ。",
    },
    material: "70% Bamboo Viscose / 25% Cotton / 5% Elastane",
    sizes: ["M", "L", "XL", "2XL"],
    colors: ["Olive", "Black", "Charcoal"],
    image: "/images/boxer-brief-3.jpg",
    featured: false,
  },
];
