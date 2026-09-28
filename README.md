# Naseem Al Lail Ladies Beauty Salon — Website

A bilingual (English / العربية) website for **Naseem Al Lail Ladies Beauty Salon**, Muscat, Oman.
It's plain HTML, CSS and JavaScript with no build step, so it can be hosted anywhere: GitHub Pages, Netlify, cPanel and so on.

## Features

- **WhatsApp booking**
  - Floating button, header button and a "Book" button on every service and price row. Each one opens WhatsApp with a message already written.
  - A booking form (name, service, date, time, notes) that turns into a ready-to-send WhatsApp message.
- **English / Arabic** switch with full right-to-left layout and Arabic fonts (Tajawal and Amiri). The site remembers each visitor's choice. You can also link straight to a language with `?lang=ar`.
- **Services and price list**
  - 8 categories, shown as cards and as a price table with tabs.
  - Prices can be a single amount, a range or a "from" price, and they show Arabic numerals in Arabic.
- **Bridal and occasion packages.**
- **Gallery** with category filters and a full-screen image viewer that works with the keyboard.
- **Google Maps** embedded map, a **Get directions** button, and links to the **Google listing** and **Write a review**.
- **Opening hours** table with a live "Open now / Closed now" badge on Muscat time, and today's row highlighted.
- Works on phones, keeps animations light (and turns them off for visitors who prefer less motion), and includes SEO tags and `BeautySalon` structured data.

## Before going live: fill in the real details

The address is filled in (Shop No. 81, Marina Building, Al Khuwair 33). The remaining values below are **placeholders**:

| File | What to change |
|---|---|
| `js/config.js` | WhatsApp number, phone, Google Place ID or Maps share link, Instagram link, opening hours |
| `js/data.js` | Service names and **prices** (the current prices are *examples* typical for Muscat), packages |
| `images/gallery/` | Replace the placeholder `.svg` artwork with real salon photos (`.jpg`/`.webp`), then update the paths in `js/data.js` |
| `index.html` | "About" text and the stats in the hero section, if they need to change |

### Linking the Google Business Profile
1. Find the salon on Google Maps, click **Share** and copy the link. Paste it into `googleListingUrl`.
2. For the "Write a review" button, get the **Place ID** from
   <https://developers.google.com/maps/documentation/places/web-service/place-id> and paste it into `googlePlaceId`.
3. Set `mapsQuery` to the exact business name as it appears on Google, or to `"lat,lng"` coordinates, so the map points to the right spot.

## Running locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
