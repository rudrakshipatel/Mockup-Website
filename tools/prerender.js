#!/usr/bin/env node
/*
 * Writes a static English copy of the services, price list, gallery,
 * reviews and booking-form options into index.html, so the page shows
 * them even where JavaScript doesn't run (link previews, some checkers,
 * search tools). In the browser, js/main.js replaces them as usual.
 *
 * Run after editing js/data.js or js/config.js:   node tools/prerender.js
 * No dependencies needed.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = { window: {}, module: { exports: {} }, console };
ctx.window.window = ctx.window;
vm.createContext(ctx);
for (const f of ["js/config.js", "js/data.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
}
// main.js reads its data from `window.*`; expose them as globals too.
Object.assign(ctx, ctx.window);
vm.runInContext(fs.readFileSync(path.join(root, "js/main.js"), "utf8"), ctx, { filename: "js/main.js" });
const r = ctx.module.exports;

const blocks = {
  services: r.servicesHTML(),
  prices: r.allPricesHTML(),
  gallery: r.galleryHTML(),
  options: r.serviceOptionsHTML(),
  reviews: r.reviewsHTML()
};

const file = path.join(root, "index.html");
let html = fs.readFileSync(file, "utf8");
for (const [name, content] of Object.entries(blocks)) {
  const re = new RegExp("(<!-- prerender:" + name + " -->)[\\s\\S]*?(<!-- /prerender:" + name + " -->)");
  if (!re.test(html)) throw new Error("Missing prerender marker: " + name);
  html = html.replace(re, (_, a, b) => a + content + b);
}
fs.writeFileSync(file, html);
console.log("index.html updated:", Object.keys(blocks).join(", "));
