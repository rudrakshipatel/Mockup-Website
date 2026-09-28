# Nasim Al Lail Ladies Beauty Salon — Website

A bilingual (English / العربية) website for **Nasim Al Lail Ladies Beauty Salon**, Muscat, Oman.

> **Demo site.** This is a sample website made by Rudrakshi Patel to show the salon. It is not their official site. It carries `noindex` so search engines don't list it, the footer says it's a sample, prices are marked as sample prices, and placeholder images say "Your photos here".
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

Filled in: address (Shop No. 81, Marina Building, Al Khuwair 33), WhatsApp/phone (+968 9817 0404), opening hours (9:30 am–10 pm daily, Fridays 11 am–10 pm), Instagram ([@nasim_alail07](https://www.instagram.com/nasim_alail07/)) and the Google Maps listing (<https://maps.app.goo.gl/hpRAdn1WAW1pne8a7>). Still to confirm:

| File | What to change |
|---|---|
| `js/config.js` | Google Place ID (optional): lets "Write a review" open Google's review box directly instead of the listing |
| `js/data.js` | Service list and **prices**. The current prices are *examples* typical for Muscat, and the service list hasn't been checked against the salon's menu |
| `images/gallery/` | Add the salon's real photos (see below) |
| `index.html` | The same links and details are also written into the HTML so they work without JavaScript. Update them there too if they change |

### Linking the Google Business Profile
1. Find the salon on Google Maps, click **Share** and copy the link. Paste it into `googleListingUrl`.
2. For the "Write a review" button, get the **Place ID** from
   <https://developers.google.com/maps/documentation/places/web-service/place-id> and paste it into `googlePlaceId`.
3. Set `mapsQuery` to the exact business name as it appears on Google, or to `"lat,lng"` coordinates, so the map points to the right spot.

## Adding the salon's photos

1. Save the photos (for example from the salon's Google listing or Instagram, with the owner's permission) into `images/gallery/`. Use `.jpg` or `.webp`, around 1200px on the long side.
2. In `js/data.js`, point `SALON_PHOTOS` (hero and About images) and each `SALON_GALLERY` entry at the new files, and set the category and caption.
3. For visitors without JavaScript, also update the three `src="images/gallery/…svg"` values on the hero and About images in `index.html`.

## Adding Google reviews

Add 2–3 reviews to `SALON_REVIEWS` in `js/data.js`. Copy the text word for word from the salon's Google listing, and use the reviewer's first name only:

```js
window.SALON_REVIEWS = [
  { name: "Aisha", stars: 5, text: "Exact review text from Google…" }
];
```

The review cards stay hidden while the list is empty. The rating shown (5.0 from 100+ reviews) is set in `index.html` and `js/main.js` (Arabic).

## Static copy for visitors without JavaScript

`index.html` includes an English copy of the services, price list, gallery, reviews and booking options between `<!-- prerender:… -->` markers. That way link previews and simple checkers still see the content. After editing `js/data.js` or `js/config.js`, refresh it with:

```bash
node tools/prerender.js
```

(Node.js only, no packages to install.)

## Running locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
