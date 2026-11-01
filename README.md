# Free Flipping Starter Kit

Free, printable, plain-English tools for eBay and Amazon reselling: listing
templates, profit calculators, a sourcing log, and pricing tips.

Built by **Asdale Dynamics, LLC** — an Indiana small-business and author
imprint founded by Dylan Asdale, a registered nurse turned AI author. Dylan
explains things "like a friend would": plain English, step by step, never
condescending. This kit is written in that same spirit.

---

## Who this is for

You if you're new to reselling and want to start without spending money on
tools, courses, or subscriptions. Everything here is:

- **Free** — no subscriptions, no sign-ups, no accounts
- **Printable** — works on paper if that's how you like to work
- **Plain English** — no jargon, no assumptions
- **Local-first** — the calculators run entirely in your browser; nothing
  leaves your computer and nothing is sold to anyone

---

## What's inside

| Folder | What it contains |
|--------|------------------|
| `templates/` | Copy-and-fill eBay and Amazon listing templates |
| `calculators/` | eBay and Amazon profit calculators (open in any browser) |
| `logs/` | Sourcing log to track what you buy and sell |
| `tips/` | Plain-English pricing tips |
| `assets/` | Styles for screen and print |

---

## Your first flip, step by step

1. **Pick one item** you already own and no longer need.
2. **Open a listing template** — `templates/ebay-listing-template.md` or
   `templates/amazon-listing-template.md` — and fill in the blanks. Be honest
   about condition and flaws; buyers trust honesty.
3. **Run the numbers** — open
   `calculators/ebay-profit-calculator.html` or
   `calculators/amazon-profit-calculator.html`, enter what you paid and what
   you expect to sell for, and check the profit before you list.
4. **List it** using the filled-in template and clear, well-lit photos.
5. **Log the sale** in `logs/sourcing-log-template.md` so you can see what's
   actually profitable after fees.
6. **Review monthly** — drop anything that consistently loses money.

---

## How to use each piece

**Listing templates** — Open the Markdown file, copy the text, and paste it
into your eBay or Amazon listing. Fill in every bracketed field. You can print
the template and work on paper first.

**Profit calculators** — Open either HTML file in any web browser. Enter your
costs and fees, then click "Calculate profit." Everything runs locally in your
browser; no data is sent anywhere. Print the result if you like.

**Sourcing log** — Use the Markdown template on paper or the CSV example in a
spreadsheet. Add one row per item the day you buy it, then fill in "Sold for"
and "Sold date" when it sells. Net profit = sold for − (purchase cost + fees +
shipping supplies).

**Pricing tips** — Read `tips/pricing-tips.md` for beginner-friendly guidance
on pricing from sold items, knowing your fees, and setting a floor price.

---

## Printable

Every page is designed to print cleanly. Open any HTML file and use your
browser's Print command, or print the Markdown templates from your favorite
Markdown viewer. The `assets/css/print.css` stylesheet strips navigation and
colors for clean paper output.

---

## Testing

The calculator logic is covered by a small Node.js test suite:

```
node assets/js/tests/profit-calculator.test.js
```

---

## License

MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. See `LICENSE`.

---

## About Asdale Dynamics, LLC

Asdale Dynamics, LLC is an Indiana LLC founded in October 2026 by Dylan
Asdale — registered nurse, AI author of *The Massive AI Manual*, and founder of
[dylanasdale.github.io](https://dylanasdale.github.io). The LLC publishes
beginner-friendly AI education, books and guides, and practical tools —
including small-business and reselling resources like this kit.

This kit is general small-business information only. It is not legal, tax, or
financial advice. eBay and Amazon fees and policies change over time — always
check the current fee schedules before you list or price.
