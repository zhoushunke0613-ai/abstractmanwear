export type Locale = "en" | "zh" | "ja";

export const locales: Locale[] = ["en", "zh", "ja"];

export const localeNames: Record<Locale, string> = {
  en: "EN",
  zh: "CN",
  ja: "JP",
};

type TranslationKey =
  | "nav.home"
  | "nav.products"
  | "nav.about"
  | "nav.contact"
  | "nav.sizeGuide"
  | "hero.tagline"
  | "hero.subtitle"
  | "hero.cta"
  | "section.featured"
  | "section.featuredSub"
  | "section.whyUs"
  | "section.whyUsSub"
  | "about.title"
  | "about.subtitle"
  | "about.story"
  | "about.mission"
  | "about.missionText"
  | "about.values"
  | "about.value1"
  | "about.value1Text"
  | "about.value2"
  | "about.value2Text"
  | "about.value3"
  | "about.value3Text"
  | "contact.title"
  | "contact.subtitle"
  | "contact.name"
  | "contact.email"
  | "contact.company"
  | "contact.message"
  | "contact.send"
  | "contact.info"
  | "contact.emailLabel"
  | "contact.locationLabel"
  | "contact.location"
  | "products.title"
  | "products.subtitle"
  | "products.viewAll"
  | "products.inquiry"
  | "products.material"
  | "products.sizes"
  | "sizeGuide.title"
  | "sizeGuide.subtitle"
  | "sizeGuide.waist"
  | "sizeGuide.hips"
  | "sizeGuide.howTo"
  | "sizeGuide.howToText"
  | "footer.rights"
  | "footer.tagline"
  | "why.fabric"
  | "why.fabricText"
  | "why.fit"
  | "why.fitText"
  | "why.quality"
  | "why.qualityText";

const translations: Record<Locale, Record<TranslationKey, string>> = {
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.sizeGuide": "Size Guide",
    "hero.tagline": "Comfort Beyond Skin",
    "hero.subtitle":
      "Premium men's underwear crafted with cutting-edge fabrics and minimalist design. Engineered for the modern man.",
    "hero.cta": "Explore Collection",
    "section.featured": "Featured Products",
    "section.featuredSub": "Designed for everyday comfort",
    "section.whyUs": "Why Abstract",
    "section.whyUsSub": "The science of comfort",
    "about.title": "About Us",
    "about.subtitle": "Redefining Men's Essentials",
    "about.story":
      "Founded with a simple belief: everyday essentials should be extraordinary. We combine advanced textile technology with minimalist aesthetics to create underwear that you forget you're wearing.",
    "about.mission": "Our Mission",
    "about.missionText":
      "To elevate the everyday experience through thoughtful design and innovative materials. Every stitch, every fabric choice, every detail is intentional.",
    "about.values": "Our Values",
    "about.value1": "Innovation",
    "about.value1Text":
      "Continuously pushing the boundaries of fabric technology and design.",
    "about.value2": "Sustainability",
    "about.value2Text":
      "Committed to responsible manufacturing and eco-friendly materials.",
    "about.value3": "Comfort",
    "about.value3Text":
      "Every product is engineered for maximum comfort and durability.",
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Interested in our products? We'd love to hear from you.",
    "contact.name": "Your Name",
    "contact.email": "Email Address",
    "contact.company": "Company Name",
    "contact.message": "Message",
    "contact.send": "Send Inquiry",
    "contact.info": "Contact Information",
    "contact.emailLabel": "Email",
    "contact.locationLabel": "Location",
    "contact.location": "Zhongshan, China",
    "products.title": "Our Collection",
    "products.subtitle": "Engineered comfort for every moment",
    "products.viewAll": "View All",
    "products.inquiry": "Inquire Now",
    "products.material": "Material",
    "products.sizes": "Sizes",
    "sizeGuide.title": "Size Guide",
    "sizeGuide.subtitle": "Find your perfect fit",
    "sizeGuide.waist": "Waist (cm)",
    "sizeGuide.hips": "Hips (cm)",
    "sizeGuide.howTo": "How to Measure",
    "sizeGuide.howToText":
      "Stand straight with your feet together. Measure around your natural waistline, keeping the tape comfortably loose.",
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Comfort Beyond Skin",
    "why.fabric": "Premium Fabrics",
    "why.fabricText":
      "Modal, Micro-Modal, and blended fabrics for unmatched softness.",
    "why.fit": "Ergonomic Fit",
    "why.fitText":
      "3D-contoured design that moves with your body naturally.",
    "why.quality": "Built to Last",
    "why.qualityText":
      "Reinforced stitching and colorfast dyes for long-lasting wear.",
  },
  zh: {
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    "nav.sizeGuide": "尺码指南",
    "hero.tagline": "超越肌肤的舒适",
    "hero.subtitle":
      "采用前沿面料与极简设计，为现代男性打造的高品质内衣。",
    "hero.cta": "探索系列",
    "section.featured": "精选产品",
    "section.featuredSub": "为日常舒适而设计",
    "section.whyUs": "为什么选择 Abstract",
    "section.whyUsSub": "舒适的科学",
    "about.title": "关于我们",
    "about.subtitle": "重新定义男士基本款",
    "about.story":
      "创立于一个简单的信念：日常用品应该是非凡的。我们将先进的纺织科技与极简美学相结合，打造让你忘记穿着感的内衣。",
    "about.mission": "我们的使命",
    "about.missionText":
      "通过用心设计和创新材料提升日常体验。每一针、每一种面料选择、每一个细节都有其意义。",
    "about.values": "我们的价值观",
    "about.value1": "创新",
    "about.value1Text": "不断突破面料技术和设计的边界。",
    "about.value2": "可持续",
    "about.value2Text": "致力于负责任的制造和环保材料。",
    "about.value3": "舒适",
    "about.value3Text": "每款产品都为最大舒适度和耐用性而设计。",
    "contact.title": "联系我们",
    "contact.subtitle": "对我们的产品感兴趣？期待您的来信。",
    "contact.name": "您的姓名",
    "contact.email": "电子邮箱",
    "contact.company": "公司名称",
    "contact.message": "留言",
    "contact.send": "发送询盘",
    "contact.info": "联系方式",
    "contact.emailLabel": "邮箱",
    "contact.locationLabel": "地址",
    "contact.location": "中国中山",
    "products.title": "产品系列",
    "products.subtitle": "为每一刻打造的工程级舒适",
    "products.viewAll": "查看全部",
    "products.inquiry": "立即询价",
    "products.material": "面料",
    "products.sizes": "尺码",
    "sizeGuide.title": "尺码指南",
    "sizeGuide.subtitle": "找到最适合你的尺码",
    "sizeGuide.waist": "腰围 (cm)",
    "sizeGuide.hips": "臀围 (cm)",
    "sizeGuide.howTo": "测量方法",
    "sizeGuide.howToText":
      "双脚并拢站直，在自然腰线处环绕测量，保持卷尺舒适松弛。",
    "footer.rights": "版权所有。",
    "footer.tagline": "超越肌肤的舒适",
    "why.fabric": "高端面料",
    "why.fabricText": "莫代尔、微莫代尔及混纺面料，柔软无与伦比。",
    "why.fit": "人体工学版型",
    "why.fitText": "3D 立体剪裁设计，与身体自然贴合。",
    "why.quality": "经久耐用",
    "why.qualityText": "加强缝线与不褪色染料，持久耐穿。",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.products": "製品",
    "nav.about": "会社概要",
    "nav.contact": "お問い合わせ",
    "nav.sizeGuide": "サイズガイド",
    "hero.tagline": "肌を超える心地よさ",
    "hero.subtitle":
      "最先端の素材とミニマルなデザインで作られた、現代の男性のためのプレミアムアンダーウェア。",
    "hero.cta": "コレクションを見る",
    "section.featured": "注目の製品",
    "section.featuredSub": "毎日の快適さのためにデザイン",
    "section.whyUs": "Abstractを選ぶ理由",
    "section.whyUsSub": "快適さの科学",
    "about.title": "会社概要",
    "about.subtitle": "メンズエッセンシャルの再定義",
    "about.story":
      "日常の必需品は特別であるべきという信念のもとに設立されました。先進的なテキスタイル技術とミニマルな美学を融合し、着ていることを忘れるアンダーウェアを創造しています。",
    "about.mission": "ミッション",
    "about.missionText":
      "思慮深いデザインと革新的な素材で日常の体験を向上させること。すべての縫い目、素材の選択、細部に意味があります。",
    "about.values": "バリュー",
    "about.value1": "イノベーション",
    "about.value1Text": "素材技術とデザインの限界を常に押し広げます。",
    "about.value2": "サステナビリティ",
    "about.value2Text": "責任ある製造とエコフレンドリーな素材に取り組んでいます。",
    "about.value3": "快適さ",
    "about.value3Text":
      "すべての製品は最高の快適さと耐久性のために設計されています。",
    "contact.title": "お問い合わせ",
    "contact.subtitle":
      "製品にご興味がおありですか？お気軽にご連絡ください。",
    "contact.name": "お名前",
    "contact.email": "メールアドレス",
    "contact.company": "会社名",
    "contact.message": "メッセージ",
    "contact.send": "お問い合わせを送信",
    "contact.info": "連絡先情報",
    "contact.emailLabel": "メール",
    "contact.locationLabel": "所在地",
    "contact.location": "中国・中山",
    "products.title": "コレクション",
    "products.subtitle": "あらゆる瞬間のための快適さ",
    "products.viewAll": "すべて見る",
    "products.inquiry": "今すぐお問い合わせ",
    "products.material": "素材",
    "products.sizes": "サイズ",
    "sizeGuide.title": "サイズガイド",
    "sizeGuide.subtitle": "ぴったりのサイズを見つける",
    "sizeGuide.waist": "ウエスト (cm)",
    "sizeGuide.hips": "ヒップ (cm)",
    "sizeGuide.howTo": "測り方",
    "sizeGuide.howToText":
      "足を揃えてまっすぐ立ち、自然なウエストラインを快適にゆるくテープで測ります。",
    "footer.rights": "All rights reserved.",
    "footer.tagline": "肌を超える心地よさ",
    "why.fabric": "プレミアム素材",
    "why.fabricText":
      "モダール、マイクロモダール、ブレンド素材による比類なき柔らかさ。",
    "why.fit": "人間工学的フィット",
    "why.fitText": "体の動きに自然に追従する3D立体設計。",
    "why.quality": "長持ち設計",
    "why.qualityText": "強化された縫製と色落ちしない染料で長期間着用可能。",
  },
};

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] || translations.en[key] || key;
}
