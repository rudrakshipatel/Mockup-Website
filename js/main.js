(function () {
  "use strict";

  var CFG = window.SALON_CONFIG;
  var SERVICES = window.SALON_SERVICES;
  var PACKAGES = window.SALON_PACKAGES;
  var GALLERY = window.SALON_GALLERY;
  var FILTERS = window.GALLERY_FILTERS;

  /* ---------------------------------------------------------
   * Arabic translations. English text lives in index.html and
   * is captured on load, so the page works without JS too.
   * ------------------------------------------------------- */
  var AR = {
    "top.hours": "السبت–الخميس ١٠ص–١٠م · الجمعة ٢م–١٠م",
    "top.ladies": "للسيدات فقط · خصوصية وراحة",
    "brand.name": "نسيم الليل",
    "brand.tag": "صالون تجميل للسيدات",
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.prices": "الأسعار",
    "nav.gallery": "معرض الصور",
    "nav.contact": "تواصلي معنا",
    "cta.book": "احجزي الآن",
    "cta.bookWa": "احجزي عبر واتساب",
    "cta.viewPrices": "قائمة الأسعار",
    "cta.chat": "تحدثي معنا",
    "hero.eyebrow": "مسقط · سلطنة عُمان",
    "hero.title": "حيث تتألق كل امرأة<br><em>كنسيم الليل</em>",
    "hero.lead": "ملاذ خاص للسيدات فقط للعناية بالشعر والمكياج وتجهيز العرائس والأظافر والبشرة والحناء — بأيدي خبيرات يهتممن بأدق التفاصيل.",
    "hero.b1n": "١٠٠٪",
    "hero.b1": "للسيدات فقط",
    "hero.b2n": "+٤٠",
    "hero.b2": "خدمة تجميل",
    "hero.b3n": "٧",
    "hero.b3": "أيام في الأسبوع",
    "hero.cardA": "مكياج العرائس والمناسبات",
    "hero.cardB": "أدوات فاخرة ومعقمة",
    "hl.1t": "خصوصية تامة",
    "hl.1d": "صالون للسيدات فقط بطاقم نسائي وغرف خاصة.",
    "hl.2t": "النظافة أولاً",
    "hl.2d": "أدوات معقمة ومستلزمات تُستخدم لمرة واحدة لكل عميلة.",
    "hl.3t": "خبيرات تجميل",
    "hl.3d": "مدربات على أحدث صيحات الشعر والمكياج والعرائس.",
    "hl.4t": "منتجات عالية الجودة",
    "hl.4d": "علامات احترافية لطيفة على شعرك وبشرتك.",
    "about.stamp": "جوهرة<br>مسقط",
    "about.eyebrow": "عن الصالون",
    "about.title": "جمال وهدوء وعناية — تحت سقف واحد",
    "about.p1": "وُلد صالون نسيم الليل ليمنح نساء مسقط مكاناً يسترخين فيه ويشعرن بالجمال. من السشوار السريع إلى إطلالة العروس الكاملة، يستقبل فريقنا كل زيارة بنفس الدفء والاهتمام.",
    "about.p2": "نجمع بين التقنيات الحديثة والتقاليد التي تحبها عميلاتنا، مثل المكياج العربي والحناء والحمام المغربي، في مساحة خاصة ومريحة بالكامل.",
    "about.l1": "فريق وعميلات من السيدات فقط",
    "about.l2": "متخصصات في العرائس والمناسبات",
    "about.l3": "حجز سهل عبر واتساب",
    "about.l4": "خدمة منزلية للعرائس عند الطلب",
    "services.eyebrow": "خدماتنا",
    "services.title": "كل ما تحتاجينه لتبدين وتشعري بأفضل حال",
    "services.sub": "اضغطي على أي خدمة لرؤية أسعارها، أو احجزيها مباشرة عبر واتساب.",
    "services.viewPrices": "الأسعار",
    "services.book": "احجزي",
    "prices.eyebrow": "قائمة الأسعار",
    "prices.title": "أسعار واضحة",
    "prices.sub": "جميع الأسعار بالريال العُماني. قد يختلف السعر النهائي حسب طول الشعر والاستشارة.",
    "prices.from": "من",
    "prices.book": "احجزي",
    "pkg.eyebrow": "باقات العرائس والمناسبات",
    "pkg.title": "يومك المميز بأبهى صورة",
    "pkg.popular": "الأكثر طلباً",
    "pkg.book": "احجزي هذه الباقة",
    "gallery.eyebrow": "معرض الصور",
    "gallery.title": "لمحة من أعمالنا",
    "gallery.more": "شاهدي المزيد على إنستغرام",
    "book.eyebrow": "احجزي موعدك",
    "book.title": "احجزي مقعدك في ثوانٍ",
    "book.p": "املئي النموذج وسنفتح لك واتساب برسالة جاهزة للإرسال. يؤكد فريقنا الموعد فوراً خلال ساعات العمل.",
    "book.s1": "اختاري الخدمة والتاريخ والوقت",
    "book.s2": "أرسلي الرسالة الجاهزة عبر واتساب",
    "book.s3": "استلمي تأكيد الموعد من الصالون",
    "form.name": "اسمك",
    "form.service": "الخدمة",
    "form.date": "التاريخ المفضل",
    "form.time": "الوقت المفضل",
    "form.notes": "ملاحظات (اختياري)",
    "form.notesPh": "مثال: طول الشعر، عدد الأشخاص، نوع المناسبة",
    "form.error": "يرجى إدخال الاسم والخدمة والتاريخ والوقت.",
    "form.submit": "أرسلي الحجز عبر واتساب",
    "form.choose": "اختاري الخدمة…",
    "form.chooseTime": "اختاري الوقت…",
    "form.closed": "الصالون مغلق في هذا اليوم",
    "rev.title": "هل أعجبتك زيارتك؟",
    "rev.sub": "اقرئي آراء عميلاتنا أو شاركي تجربتك على صفحتنا في Google — فهذا يساعد سيدات مسقط في العثور علينا.",
    "rev.read": "آراء Google",
    "rev.write": "اكتبي تقييماً",
    "contact.eyebrow": "زورينا",
    "contact.title": "موقعنا في مسقط",
    "contact.addr": "العنوان",
    "contact.phone": "الهاتف وواتساب",
    "contact.hours": "ساعات العمل",
    "contact.directions": "الاتجاهات",
    "contact.listing": "صفحتنا على Google",
    "contact.open": "مفتوح الآن",
    "contact.closed": "مغلق الآن",
    "contact.closedDay": "مغلق",
    "footer.about": "صالون تجميل للسيدات فقط في مسقط يقدم خدمات الشعر والمكياج والعرائس والأظافر والبشرة والحناء.",
    "footer.links": "روابط سريعة",
    "footer.packages": "باقات العرائس",
    "footer.book": "احجزي موعداً",
    "footer.h1": "السبت – الخميس: ١٠:٠٠ ص – ١٠:٠٠ م",
    "footer.h2": "الجمعة: ٢:٠٠ م – ١٠:٠٠ م",
    "footer.rights": "صالون نسيم الليل للسيدات. جميع الحقوق محفوظة."
  };

  // English strings used only by JS-rendered parts.
  var EN_EXTRA = {
    "services.viewPrices": "Prices",
    "services.book": "Book",
    "prices.from": "from",
    "prices.book": "Book",
    "pkg.popular": "Most popular",
    "pkg.book": "Book this package",
    "form.choose": "Choose a service…",
    "form.chooseTime": "Choose a time…",
    "form.closed": "The salon is closed on this day",
    "contact.open": "Open now",
    "contact.closed": "Closed now",
    "contact.closedDay": "Closed"
  };

  var WA_TEXT = {
    general: {
      en: "Hello Naseem Al Lail, I would like to book an appointment.",
      ar: "مرحباً نسيم الليل، أرغب في حجز موعد."
    },
    service: {
      en: "Hello Naseem Al Lail, I would like to book: {s}.",
      ar: "مرحباً نسيم الليل، أرغب في حجز: {s}."
    }
  };

  var DAYS = {
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ar: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  };

  var EN = {};
  var lang = "en";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function t(key) {
    if (lang === "ar" && AR[key] != null) return AR[key];
    return EN[key] != null ? EN[key] : (EN_EXTRA[key] || key);
  }

  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- Links from config ---------------- */
  function waLink(message) {
    return "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(message);
  }
  function waService(name) {
    return waLink(WA_TEXT.service[lang].replace("{s}", name));
  }
  function googleListing() {
    if (CFG.googleListingUrl) return CFG.googleListingUrl;
    var url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CFG.mapsQuery);
    if (CFG.googlePlaceId) url += "&query_place_id=" + encodeURIComponent(CFG.googlePlaceId);
    return url;
  }
  function googleReview() {
    return CFG.googlePlaceId
      ? "https://search.google.com/local/writereview?placeid=" + encodeURIComponent(CFG.googlePlaceId)
      : googleListing();
  }
  function directions() {
    var url = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(CFG.mapsQuery);
    if (CFG.googlePlaceId) url += "&destination_place_id=" + encodeURIComponent(CFG.googlePlaceId);
    return url;
  }

  function applyLinks() {
    $$(".js-wa").forEach(function (a) { a.href = waLink(WA_TEXT.general[lang]); });
    $$(".js-phone").forEach(function (el) { el.textContent = CFG.phoneDisplay; });
    $$(".js-phone-link").forEach(function (a) { a.href = "tel:" + CFG.phoneDial; });
    $$(".js-address").forEach(function (el) { el.textContent = CFG.address[lang]; });
    $$(".js-google").forEach(function (a) { a.href = googleListing(); });
    $$(".js-google-review").forEach(function (a) { a.href = googleReview(); });
    $$(".js-directions").forEach(function (a) { a.href = directions(); });
    $$(".js-instagram").forEach(function (a) { a.href = CFG.instagram; });
    var map = $("#mapFrame");
    var src = "https://maps.google.com/maps?q=" + encodeURIComponent(CFG.mapsQuery) +
      "&hl=" + lang + "&z=15&output=embed";
    if (map.getAttribute("src") !== src) map.setAttribute("src", src);
  }

  /* ---------------- Price formatting ---------------- */
  function num(n) {
    var s = Number.isInteger(n) ? String(n) : n.toFixed(3).replace(/0+$/, "");
    return lang === "ar" ? s.replace(/\d/g, function (d) { return "٠١٢٣٤٥٦٧٨٩"[d]; }).replace(".", "٫") : s;
  }
  function price(p) {
    var cur = CFG.currency[lang];
    if (Array.isArray(p)) {
      if (p[1] == null) return t("prices.from") + " " + num(p[0]) + " " + cur;
      return num(p[0]) + " – " + num(p[1]) + " " + cur;
    }
    return num(p) + " " + cur;
  }

  /* ---------------- Renderers ---------------- */
  function renderServices() {
    $("#servicesGrid").innerHTML = SERVICES.map(function (s) {
      return '<article class="service-card reveal">' +
        '<div class="service-card__icon"><svg><use href="#' + s.icon + '"/></svg></div>' +
        "<h3>" + esc(s.name[lang]) + "</h3>" +
        "<p>" + esc(s.desc[lang]) + "</p>" +
        '<div class="service-card__meta"><span>' + price(minMax(s.items)) + "</span></div>" +
        '<div class="service-card__actions">' +
          '<a href="#prices" class="link-arrow" data-tab="' + s.id + '">' + t("services.viewPrices") + "</a>" +
          '<a class="btn btn--sm btn--whatsapp" target="_blank" rel="noopener" href="' + waService(s.name[lang]) + '">' +
            '<svg class="i"><use href="#i-whatsapp"/></svg> ' + t("services.book") + "</a>" +
        "</div></article>";
    }).join("");
    $$("#servicesGrid [data-tab]").forEach(function (a) {
      a.addEventListener("click", function () { selectTab(a.getAttribute("data-tab")); });
    });
  }

  function minMax(items) {
    var lo = Infinity;
    items.forEach(function (i) { lo = Math.min(lo, Array.isArray(i.price) ? i.price[0] : i.price); });
    return [lo, null];
  }

  var activeTab = SERVICES[0].id;
  function renderTabs() {
    $("#priceTabs").innerHTML = SERVICES.map(function (s) {
      var on = s.id === activeTab;
      return '<button type="button" role="tab" class="tab' + (on ? " is-active" : "") + '" aria-selected="' + on +
        '" data-id="' + s.id + '"><svg class="i"><use href="#' + s.icon + '"/></svg>' + esc(s.name[lang]) + "</button>";
    }).join("");
    $$("#priceTabs .tab").forEach(function (b) {
      b.addEventListener("click", function () { selectTab(b.getAttribute("data-id")); });
    });
    renderPricePanel();
  }

  function selectTab(id) {
    activeTab = id;
    renderTabs();
    var btn = $('#priceTabs .tab[data-id="' + id + '"]');
    if (btn && btn.scrollIntoView) btn.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }

  function renderPricePanel() {
    var s = SERVICES.filter(function (x) { return x.id === activeTab; })[0];
    $("#pricePanel").innerHTML =
      '<ul class="price-list">' + s.items.map(function (i) {
        return '<li class="price-item">' +
          '<span class="price-item__name">' + esc(i[lang]) + "</span>" +
          '<span class="price-item__dots" aria-hidden="true"></span>' +
          '<span class="price-item__price">' + price(i.price) + "</span>" +
          '<a class="price-item__book" target="_blank" rel="noopener" href="' + waService(i[lang]) + '" aria-label="' +
            esc(t("prices.book") + " " + i[lang]) + '"><svg class="i"><use href="#i-whatsapp"/></svg><span>' + t("prices.book") + "</span></a>" +
          "</li>";
      }).join("") + "</ul>";
  }

  function renderPackages() {
    $("#packagesGrid").innerHTML = PACKAGES.map(function (p) {
      return '<article class="package reveal' + (p.featured ? " package--featured" : "") + '">' +
        (p.featured ? '<span class="package__badge">' + t("pkg.popular") + "</span>" : "") +
        "<h3>" + esc(p.name[lang]) + "</h3>" +
        '<p class="package__price"><span>' + t("prices.from") + "</span> " + price(p.price) + "</p>" +
        '<ul class="checklist">' + p.items[lang].map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>" +
        '<a class="btn btn--block ' + (p.featured ? "btn--gold" : "btn--outline") + '" target="_blank" rel="noopener" href="' +
          waService(p.name[lang]) + '"><svg class="i"><use href="#i-whatsapp"/></svg> ' + t("pkg.book") + "</a>" +
        "</article>";
    }).join("");
  }

  var galleryFilter = "all";
  var visibleGallery = [];
  function renderGallery() {
    $("#galleryFilters").innerHTML = FILTERS.map(function (f) {
      return '<button type="button" class="chip' + (f.id === galleryFilter ? " is-active" : "") + '" data-f="' + f.id + '">' +
        esc(f[lang]) + "</button>";
    }).join("");
    $$("#galleryFilters .chip").forEach(function (b) {
      b.addEventListener("click", function () { galleryFilter = b.getAttribute("data-f"); renderGallery(); });
    });
    visibleGallery = GALLERY.filter(function (g) { return galleryFilter === "all" || g.cat === galleryFilter; });
    $("#galleryGrid").innerHTML = visibleGallery.map(function (g, idx) {
      return '<button type="button" class="gallery__item" data-idx="' + idx + '">' +
        '<img src="' + g.src + '" alt="' + esc(g.cap[lang]) + '" loading="lazy" decoding="async">' +
        '<span class="gallery__cap">' + esc(g.cap[lang]) + "</span></button>";
    }).join("");
    $$("#galleryGrid .gallery__item").forEach(function (b) {
      b.addEventListener("click", function () { openLightbox(+b.getAttribute("data-idx")); });
    });
  }

  /* ---------------- Lightbox ---------------- */
  var lbIdx = 0, lastFocus = null;
  function openLightbox(i) {
    lastFocus = document.activeElement;
    lbIdx = i; showLb();
    $("#lightbox").hidden = false;
    document.body.classList.add("no-scroll");
    $(".lightbox__close").focus();
  }
  function showLb() {
    var g = visibleGallery[lbIdx];
    $("#lightboxImg").src = g.src;
    $("#lightboxImg").alt = g.cap[lang];
    $("#lightboxCap").textContent = g.cap[lang];
  }
  function closeLb() {
    $("#lightbox").hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }
  function stepLb(d) {
    lbIdx = (lbIdx + d + visibleGallery.length) % visibleGallery.length; showLb();
  }
  function initLightbox() {
    $(".lightbox__close").addEventListener("click", closeLb);
    $(".lightbox__prev").addEventListener("click", function () { stepLb(lang === "ar" ? 1 : -1); });
    $(".lightbox__next").addEventListener("click", function () { stepLb(lang === "ar" ? -1 : 1); });
    $("#lightbox").addEventListener("click", function (e) { if (e.target.id === "lightbox") closeLb(); });
    document.addEventListener("keydown", function (e) {
      if ($("#lightbox").hidden) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") stepLb(lang === "ar" ? 1 : -1);
      if (e.key === "ArrowRight") stepLb(lang === "ar" ? -1 : 1);
    });
  }

  /* ---------------- Hours ---------------- */
  function fmtTime(hm) {
    var p = hm.split(":"), h = +p[0], m = p[1];
    var suffix = lang === "ar" ? (h < 12 ? "ص" : "م") : (h < 12 ? "am" : "pm");
    var h12 = h % 12 || 12;
    var s = h12 + (m !== "00" ? ":" + m : "") + " " + suffix;
    return lang === "ar" ? s.replace(/\d/g, function (d) { return "٠١٢٣٤٥٦٧٨٩"[d]; }) : s;
  }
  function muscatNow() {
    // Muscat is UTC+4 with no daylight saving.
    var now = new Date();
    return new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 4 * 3600000);
  }
  function renderHours() {
    var today = muscatNow().getDay();
    var order = [6, 0, 1, 2, 3, 4, 5]; // week starts Saturday in Oman
    $("#hoursTable").innerHTML = order.map(function (d) {
      var h = CFG.hours[d];
      return '<tr class="' + (d === today ? "is-today" : "") + '"><th>' + DAYS[lang][d] + "</th><td>" +
        (h ? '<span dir="auto">' + fmtTime(h[0]) + " – " + fmtTime(h[1]) + "</span>" : t("contact.closedDay")) + "</td></tr>";
    }).join("");
    var now = muscatNow(), h = CFG.hours[now.getDay()], open = false;
    if (h) {
      var mins = now.getHours() * 60 + now.getMinutes();
      var a = h[0].split(":"), b = h[1].split(":");
      open = mins >= a[0] * 60 + +a[1] && mins < b[0] * 60 + +b[1];
    }
    var el = $("#openNow");
    el.textContent = open ? t("contact.open") : t("contact.closed");
    el.className = "open-now " + (open ? "is-open" : "is-closed");
  }

  /* ---------------- Booking form ---------------- */
  function renderForm() {
    var sel = $("#bService"), keep = sel.value;
    sel.innerHTML = '<option value="">' + t("form.choose") + "</option>" +
      SERVICES.map(function (s) {
        return '<optgroup label="' + esc(s.name[lang]) + '">' + s.items.map(function (i, n) {
          return '<option value="' + s.id + ":" + n + '">' + esc(i[lang]) + "</option>";
        }).join("") + "</optgroup>";
      }).join("") +
      '<optgroup label="' + esc(t("pkg.eyebrow")) + '">' + PACKAGES.map(function (p, n) {
        return '<option value="pkg:' + n + '">' + esc(p.name[lang]) + "</option>";
      }).join("") + "</optgroup>";
    sel.value = keep;
    renderTimes();
  }

  function serviceLabel(v) {
    var p = v.split(":");
    if (p[0] === "pkg") return PACKAGES[+p[1]].name[lang];
    var s = SERVICES.filter(function (x) { return x.id === p[0]; })[0];
    return s ? s.items[+p[1]][lang] : v;
  }

  function renderTimes() {
    var dateVal = $("#bDate").value;
    var sel = $("#bTime"), keep = sel.value;
    var day = dateVal ? new Date(dateVal + "T12:00:00").getDay() : 6;
    var h = CFG.hours[day];
    if (!h) {
      sel.innerHTML = '<option value="">' + t("form.closed") + "</option>";
      return;
    }
    var start = +h[0].split(":")[0], end = +h[1].split(":")[0];
    var opts = ['<option value="">' + t("form.chooseTime") + "</option>"];
    for (var hr = start; hr < end; hr++) {
      ["00", "30"].forEach(function (m) {
        var v = (hr < 10 ? "0" : "") + hr + ":" + m;
        opts.push('<option value="' + v + '">' + fmtTime(v) + "</option>");
      });
    }
    sel.innerHTML = opts.join("");
    sel.value = keep;
  }

  function initForm() {
    var d = $("#bDate");
    var today = muscatNow();
    d.min = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
    d.addEventListener("change", renderTimes);
    $("#bookingForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var f = e.target;
      var name = f.name.value.trim(), svc = f.service.value, date = f.date.value, time = f.time.value;
      var err = $("#formError");
      if (!name || !svc || !date || !time) { err.hidden = false; return; }
      err.hidden = true;
      var dateObj = new Date(date + "T12:00:00");
      var dateTxt = dateObj.toLocaleDateString(lang === "ar" ? "ar-OM" : "en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      var lines = lang === "ar"
        ? ["مرحباً نسيم الليل، أرغب في حجز موعد:", "الاسم: " + name, "الخدمة: " + serviceLabel(svc), "التاريخ: " + dateTxt, "الوقت: " + fmtTime(time)]
        : ["Hello Naseem Al Lail, I would like to book an appointment:", "Name: " + name, "Service: " + serviceLabel(svc), "Date: " + dateTxt, "Time: " + fmtTime(time)];
      var notes = f.notes.value.trim();
      if (notes) lines.push((lang === "ar" ? "ملاحظات: " : "Notes: ") + notes);
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
    });
  }

  /* ---------------- Language ---------------- */
  function captureEnglish() {
    $$("[data-i18n]").forEach(function (el) { EN[el.getAttribute("data-i18n")] = el.textContent; });
    $$("[data-i18n-html]").forEach(function (el) { EN[el.getAttribute("data-i18n-html")] = el.innerHTML; });
    $$("[data-i18n-placeholder]").forEach(function (el) { EN[el.getAttribute("data-i18n-placeholder")] = el.placeholder; });
    EN.__title = document.title;
  }

  function setLang(l) {
    lang = l === "ar" ? "ar" : "en";
    var html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    $$("[data-i18n-placeholder]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-placeholder")); });
    document.title = lang === "ar" ? "صالون نسيم الليل للسيدات | مسقط، عُمان" : EN.__title;
    $(".lang-toggle__label").textContent = lang === "ar" ? "English" : "العربية";
    $("#langToggle").setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");

    applyLinks();
    renderServices();
    renderTabs();
    renderPackages();
    renderGallery();
    renderHours();
    renderForm();
    observeReveals();
    store("nal-lang", lang);
  }

  /* ---------------- UI behaviours ---------------- */
  function initNav() {
    var burger = $("#burger"), nav = $("#nav");
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open);
    });
    $$("#nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open"); burger.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false");
      });
    });
    var header = $("#header");
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Highlight current section in nav
    if ("IntersectionObserver" in window) {
      var links = $$("#nav a");
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            links.forEach(function (l) { l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id); });
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      ["home", "about", "services", "prices", "gallery", "contact"].forEach(function (id) {
        var s = document.getElementById(id); if (s) io.observe(s);
      });
    }
  }

  var revealIO = null;
  function observeReveals() {
    var els = $$(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("is-visible"); revealIO.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
    }
    els.forEach(function (el) { revealIO.observe(el); });
  }

  /* ---------------- Boot ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    captureEnglish();
    $("#year").textContent = new Date().getFullYear();
    initNav();
    initLightbox();
    initForm();
    $("#langToggle").addEventListener("click", function () { setLang(lang === "ar" ? "en" : "ar"); });

    var q = new URLSearchParams(location.search).get("lang");
    setLang(q || store("nal-lang") || CFG.defaultLang);
    setInterval(renderHours, 60000);
  });
})();
