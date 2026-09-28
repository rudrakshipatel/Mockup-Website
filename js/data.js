/*
 * ============================================================
 *  SERVICES, PRICES, PACKAGES & GALLERY (English + Arabic)
 * ============================================================
 *  ⚠️  Prices below are SAMPLE prices typical for Muscat salons.
 *      Replace them with the salon's actual price list.
 *  price: a number (fixed price) or [from, to] for a range.
 *  "from" prices can be shown by using [amount, null].
 */
window.SALON_SERVICES = [
  {
    id: "hair", icon: "s-hair",
    name: { en: "Hair Care & Styling", ar: "العناية بالشعر وتصفيفه" },
    desc: { en: "Cuts, blow-dry, colour, highlights, keratin & treatments.", ar: "قص، سشوار، صبغ، هايلايت، كيراتين وعلاجات." },
    items: [
      { en: "Hair wash & blow-dry",       ar: "غسيل وسشوار",                 price: [5, 10] },
      { en: "Haircut & styling",          ar: "قص وتصفيف الشعر",             price: [6, 12] },
      { en: "Fringe / trim",              ar: "قص الغرة / تشذيب الأطراف",     price: 3 },
      { en: "Hair curling / waves",       ar: "تمويج الشعر (كيرلي)",          price: [8, 15] },
      { en: "Updo / occasion hairstyle",  ar: "تسريحة مناسبات",               price: [15, 30] },
      { en: "Root colour",                ar: "صبغة جذور",                    price: [12, 18] },
      { en: "Full hair colour",           ar: "صبغة كاملة",                   price: [20, 40] },
      { en: "Highlights / balayage",      ar: "هايلايت / بالياج",             price: [35, 70] },
      { en: "Keratin / protein treatment",ar: "كيراتين / بروتين",             price: [40, 90] },
      { en: "Hair spa & deep conditioning",ar: "حمام زيت وترطيب عميق",         price: [10, 20] }
    ]
  },
  {
    id: "makeup", icon: "s-makeup",
    name: { en: "Makeup", ar: "المكياج" },
    desc: { en: "Soft glam, party, Arabic & occasion makeup.", ar: "مكياج ناعم، سهرة، عربي ومكياج مناسبات." },
    items: [
      { en: "Soft / day makeup",          ar: "مكياج ناعم / نهاري",           price: [12, 18] },
      { en: "Party / evening makeup",     ar: "مكياج سهرة",                   price: [20, 30] },
      { en: "Arabic / full glam makeup",  ar: "مكياج عربي / فل جلام",          price: [25, 40] },
      { en: "Engagement makeup",          ar: "مكياج خطوبة",                  price: [40, 60] },
      { en: "Eyelash application",        ar: "تركيب رموش",                   price: [3, 6] },
      { en: "Makeup + hairstyle combo",   ar: "مكياج + تسريحة",               price: [35, 55] }
    ]
  },
  {
    id: "bridal", icon: "s-bridal",
    name: { en: "Bridal", ar: "العرائس" },
    desc: { en: "Complete bridal looks, trials and home service.", ar: "إطلالات عرائس متكاملة، تجربة مسبقة وخدمة منزلية." },
    items: [
      { en: "Bridal makeup",              ar: "مكياج عروس",                   price: [80, 150] },
      { en: "Bridal hairstyle",           ar: "تسريحة عروس",                  price: [40, 70] },
      { en: "Bridal trial session",       ar: "جلسة تجربة للعروس",            price: [30, 50] },
      { en: "Bride's mother / sister makeup", ar: "مكياج أم / أخت العروس",    price: [25, 40] },
      { en: "Home service (bridal)",      ar: "خدمة منزلية للعروس",           price: [30, null] }
    ]
  },
  {
    id: "nails", icon: "s-nails",
    name: { en: "Nails", ar: "الأظافر" },
    desc: { en: "Manicure, pedicure, gel polish & extensions.", ar: "مانيكير، باديكير، طلاء جل وتركيب أظافر." },
    items: [
      { en: "Classic manicure",           ar: "مانيكير كلاسيك",               price: 5 },
      { en: "Classic pedicure",           ar: "باديكير كلاسيك",               price: 7 },
      { en: "Mani + pedi",                ar: "مانيكير + باديكير",            price: 11 },
      { en: "Gel polish (hands)",         ar: "طلاء جل لليدين",                price: [8, 10] },
      { en: "Gel polish (feet)",          ar: "طلاء جل للقدمين",               price: [8, 10] },
      { en: "Acrylic / gel extensions",   ar: "تركيب أظافر أكريليك / جل",      price: [15, 25] },
      { en: "Nail art (per nail)",        ar: "رسم على الأظافر (للظفر)",        price: 0.5 },
      { en: "Gel removal",                ar: "إزالة الجل",                    price: 2 }
    ]
  },
  {
    id: "skin", icon: "s-skin",
    name: { en: "Facials & Skincare", ar: "العناية بالبشرة" },
    desc: { en: "Deep cleansing, hydrating & glow facials.", ar: "تنظيف عميق، ترطيب وجلسات نضارة للبشرة." },
    items: [
      { en: "Express facial",             ar: "تنظيف بشرة سريع",              price: 12 },
      { en: "Deep cleansing facial",      ar: "تنظيف بشرة عميق",              price: [18, 25] },
      { en: "Hydrating / glow facial",    ar: "جلسة ترطيب ونضارة",            price: [20, 30] },
      { en: "Hydrafacial",                ar: "هيدرافيشل",                    price: [30, 45] },
      { en: "Face mask add-on",           ar: "ماسك إضافي",                   price: 5 }
    ]
  },
  {
    id: "threading", icon: "s-thread",
    name: { en: "Threading & Waxing", ar: "الخيط والشمع" },
    desc: { en: "Precise brows and gentle hair removal.", ar: "تحديد حواجب دقيق وإزالة شعر لطيفة." },
    items: [
      { en: "Eyebrow threading",          ar: "حواجب بالخيط",                 price: 2 },
      { en: "Upper lip threading",        ar: "شارب بالخيط",                  price: 1 },
      { en: "Full face threading",        ar: "وجه كامل بالخيط",              price: 5 },
      { en: "Eyebrow tint",               ar: "صبغة حواجب",                   price: 4 },
      { en: "Half arms waxing",           ar: "شمع نصف ذراع",                 price: 4 },
      { en: "Full arms waxing",           ar: "شمع ذراع كامل",                price: 6 },
      { en: "Full legs waxing",           ar: "شمع أرجل كاملة",               price: [8, 10] },
      { en: "Full body waxing",           ar: "شمع كامل الجسم",               price: [25, 35] }
    ]
  },
  {
    id: "henna", icon: "s-henna",
    name: { en: "Henna", ar: "الحناء" },
    desc: { en: "Traditional & modern henna designs.", ar: "نقوش حناء تقليدية وعصرية." },
    items: [
      { en: "Simple henna (both hands)",  ar: "حناء بسيطة (اليدين)",          price: [5, 8] },
      { en: "Detailed henna (both hands)",ar: "حناء نقش كامل (اليدين)",        price: [10, 15] },
      { en: "Henna for feet",             ar: "حناء للقدمين",                 price: [5, 10] },
      { en: "Bridal henna",               ar: "حناء عروس",                    price: [25, 50] },
      { en: "Hair henna",                 ar: "حناء للشعر",                   price: [8, 12] }
    ]
  },
  {
    id: "spa", icon: "s-spa",
    name: { en: "Moroccan Bath & Body", ar: "الحمام المغربي والجسم" },
    desc: { en: "Traditional Moroccan bath, scrubs & relaxation.", ar: "حمام مغربي تقليدي، تقشير واسترخاء." },
    items: [
      { en: "Moroccan bath",              ar: "حمام مغربي",                   price: [15, 20] },
      { en: "Royal Moroccan bath",        ar: "حمام مغربي ملكي",              price: [25, 35] },
      { en: "Body scrub",                 ar: "تقشير الجسم",                  price: [12, 18] },
      { en: "Relaxing body massage (60 min)", ar: "مساج استرخاء للجسم (٦٠ دقيقة)", price: [20, 30] }
    ]
  }
];

window.SALON_PACKAGES = [
  {
    name: { en: "Glow Package", ar: "باقة النضارة" },
    price: 35,
    featured: false,
    items: {
      en: ["Deep cleansing facial", "Eyebrow threading", "Classic mani + pedi", "Blow-dry"],
      ar: ["تنظيف بشرة عميق", "حواجب بالخيط", "مانيكير + باديكير", "سشوار"]
    }
  },
  {
    name: { en: "Royal Bride", ar: "العروس الملكية" },
    price: 250,
    featured: true,
    items: {
      en: ["Bridal makeup & hairstyle", "Trial session", "Royal Moroccan bath", "Bridal henna", "Gel mani + pedi", "Facial & full body waxing"],
      ar: ["مكياج وتسريحة عروس", "جلسة تجربة", "حمام مغربي ملكي", "حناء عروس", "مانيكير وباديكير جل", "تنظيف بشرة وشمع كامل"]
    }
  },
  {
    name: { en: "Occasion Ready", ar: "جاهزة للمناسبة" },
    price: 45,
    featured: false,
    items: {
      en: ["Party makeup", "Occasion hairstyle", "Eyelashes", "Gel polish (hands)"],
      ar: ["مكياج سهرة", "تسريحة مناسبات", "رموش", "طلاء جل لليدين"]
    }
  }
];

// Gallery — replace the .svg placeholders with real salon photos (jpg/webp).
window.SALON_GALLERY = [
  { src: "images/gallery/bridal-1.svg", cat: "bridal", cap: { en: "Bridal look",        ar: "إطلالة عروس" } },
  { src: "images/gallery/hair-1.svg",   cat: "hair",   cap: { en: "Soft waves",         ar: "تمويج ناعم" } },
  { src: "images/gallery/makeup-1.svg", cat: "makeup", cap: { en: "Evening glam",       ar: "مكياج سهرة" } },
  { src: "images/gallery/nails-1.svg",  cat: "nails",  cap: { en: "Gel nail art",       ar: "رسم أظافر جل" } },
  { src: "images/gallery/henna-1.svg",  cat: "henna",  cap: { en: "Henna design",       ar: "نقش حناء" } },
  { src: "images/gallery/hair-2.svg",   cat: "hair",   cap: { en: "Balayage colour",    ar: "صبغة بالياج" } },
  { src: "images/gallery/makeup-2.svg", cat: "makeup", cap: { en: "Arabic makeup",      ar: "مكياج عربي" } },
  { src: "images/gallery/bridal-2.svg", cat: "bridal", cap: { en: "Bridal hairstyle",   ar: "تسريحة عروس" } },
  { src: "images/gallery/salon-1.svg",  cat: "salon",  cap: { en: "Our salon",          ar: "صالوننا" } }
];

window.GALLERY_FILTERS = [
  { id: "all",    en: "All",     ar: "الكل" },
  { id: "hair",   en: "Hair",    ar: "الشعر" },
  { id: "makeup", en: "Makeup",  ar: "المكياج" },
  { id: "bridal", en: "Bridal",  ar: "العرائس" },
  { id: "nails",  en: "Nails",   ar: "الأظافر" },
  { id: "henna",  en: "Henna",   ar: "الحناء" },
  { id: "salon",  en: "Salon",   ar: "الصالون" }
];
