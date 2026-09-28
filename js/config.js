/*
 * ============================================================
 *  SALON CONFIGURATION — edit this file to update the website
 * ============================================================
 *  Everything business-specific (phone, WhatsApp, address,
 *  Google listing, map, social links, opening hours) lives here.
 *  ⚠️  Values marked TODO are placeholders — replace them with
 *      the salon's real details before going live.
 */
window.SALON_CONFIG = {
  // WhatsApp number in international format, digits only (968 = Oman).
  whatsapp: "96898170404",

  // Phone number as it should be displayed / dialled.
  phoneDisplay: "+968 9817 0404",
  phoneDial: "+96898170404",

  // Address shown on the site (per language).
  address: {
    en: "Shop No. 81, Marina Building, Al Maha Street, Way No. 4717, Al Khuwair 33, Muscat, Oman",
    ar: "محل رقم ٨١، بناية مارينا، شارع المها، سكة رقم ٤٧١٧، الخوير ٣٣، مسقط، سلطنة عُمان"
  },

  // Google Maps / Google Business Profile.
  //  - mapsQuery: used for the embedded map and directions. Use the exact
  //    business name as it appears on Google, or "lat,lng" coordinates.
  //  - googlePlaceId: from https://developers.google.com/maps/documentation/places/web-service/place-id
  //    When set, the "Google listing" and "Write a review" buttons open the
  //    salon's exact profile. TODO: add the Place ID.
  //  - googleListingUrl: optional — paste the share link from Google Maps
  //    (e.g. https://maps.app.goo.gl/xxxx). Takes priority when set.
  mapsQuery: "Nasim Al Lail Ladies Beauty Salon, Marina Building, Al Khuwair 33, Muscat, Oman",
  googlePlaceId: "",
  googleListingUrl: "https://maps.app.goo.gl/hpRAdn1WAW1pne8a7",

  // Instagram profile URL. Instagram links stay hidden while this is empty.
  instagram: "https://www.instagram.com/nasim_alail07/",

  // Opening hours used for the hours table and the "Open now" badge.
  // Day index: 0 = Sunday … 6 = Saturday. Times are 24h, Muscat time (GMT+4).
  // Set a day to null if the salon is closed.
  hours: {
    0: ["09:30", "22:00"],
    1: ["09:30", "22:00"],
    2: ["09:30", "22:00"],
    3: ["09:30", "22:00"],
    4: ["09:30", "22:00"],
    5: ["11:00", "22:00"],
    6: ["09:30", "22:00"]
  },

  // Language shown to first-time visitors ("en" or "ar").
  defaultLang: "en",

  // Currency label per language.
  currency: { en: "OMR", ar: "ر.ع." }
};
