# Nasim Al Lail Ladies Beauty Salon — Website

A bilingual (English / العربية) website for **Nasim Al Lail Ladies Beauty Salon**, Muscat, Oman.
It's plain HTML, CSS and JavaScript with no build step, so it can be hosted anywhere: GitHub Pages, Netlify, cPanel and so on.

## Features

- **WhatsApp booking**
  - Floating button, header button and a "Book" button on every service and price row. Each one opens WhatsApp with a message already written.
  - A booking form (name, service, date, time, notes) that turns into a ready-to-send WhatsApp message.
- **English / Arabic** switch with full right-to-left layout and Arabic fonts (Tajawal and Amiri). The site remembers each visitor's choice. You can also link straight to a language with `?lang=ar`.
- **Services and price list**
  - 7 categories, shown as cards and as a price table with tabs.
  - Prices can be a single amount, a range or a "from" price, and they show Arabic numerals in Arabic.
- **Gallery** with category filters and a full-screen image viewer that works with the keyboard.
- **Google Maps** embedded map, a **Get directions** button, and links to the **Google listing** and **Write a review**.
- **Opening hours** table with a live "Open now / Closed now" badge on Muscat time, and today's row highlighted.
- Works on phones, keeps animations light (and turns them off for visitors who prefer less motion), and includes SEO tags and `BeautySalon` structured data.

## Before going live: fill in the real details

Filled in: address (Shop No. 81, Marina Building, Al Khuwair 33), WhatsApp/phone (+968 9817 0404) and opening hours (9:30 am–10 pm daily, Fridays 11 am–10 pm). Still to confirm:

| File | What to change |
|---|---|
| `js/config.js` | Google Maps share link or Place ID (the buttons currently search Google Maps for the salon by name and address), Instagram link (hidden until added) |
| `js/data.js` | Service list and **prices**. The current prices are *examples* typical for Muscat, and the service list hasn't been checked against the salon's menu |
| `images/gallery/` | Replace the placeholder `.svg` artwork with real salon photos (`.jpg`/`.webp`), then update the paths in `js/data.js` |
| `index.html` | The same links and details are also written into the HTML so they work without JavaScript. Update them there too if they change |

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
