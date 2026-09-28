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
  // TODO: replace with the salon's real WhatsApp number.
  whatsapp: "96890000000",

  // Phone number as it should be displayed / dialled.
  // TODO: replace with the salon's real phone number.
  phoneDisplay: "+968 9000 0000",
  phoneDial: "+96890000000",

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
  mapsQuery: "Marina Building, Al Maha Street, Al Khuwair 33, Muscat, Oman",
  googlePlaceId: "",
  googleListingUrl: "",

  // Social links. TODO: add the real Instagram handle.
  instagram: "https://www.instagram.com/",

  // Opening hours used for the hours table and the "Open now" badge.
  // Day index: 0 = Sunday … 6 = Saturday. Times are 24h, Muscat time (GMT+4).
  // Set a day to null if the salon is closed.
  hours: {
    0: ["10:00", "22:00"],
    1: ["10:00", "22:00"],
    2: ["10:00", "22:00"],
    3: ["10:00", "22:00"],
    4: ["10:00", "22:00"],
    5: ["14:00", "22:00"],
    6: ["10:00", "22:00"]
  },

  // Language shown to first-time visitors ("en" or "ar").
  defaultLang: "en",

  // Currency label per language.
  currency: { en: "OMR", ar: "ر.ع." }
};
