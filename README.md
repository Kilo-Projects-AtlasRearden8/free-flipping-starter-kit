# Free Flipping Starter Kit

A free, printable, plain-English starter kit for eBay and Amazon reselling.
Listing templates, profit calculators, sourcing logs, and pricing tips — no
secrets, no sign-ups, no personal data required.

Built and published by **Asdale Dynamics, LLC** (Indiana, formed October 2026),
the small-business and author tool imprint of Dylan Asdale, registered nurse
turned AI author and founder of [dylanasdale.github.io](https://dylanasdale.github.io).

## What's inside

| Folder | What it contains |
|--------|------------------|
| `templates/` | Plain-English eBay and Amazon listing templates you can copy and fill in |
| `calculators/` | Static HTML profit calculators for eBay and Amazon (runs in your browser, nothing sent anywhere) |
| `logs/` | Sourcing log template (Markdown + CSV example) to track what you buy and sell |
| `tips/` | Pricing tips written in plain English |
| `assets/` | CSS and JavaScript for the calculators and print styles |

## How to use

1. **Listing templates** — Open `templates/ebay-listing-template.md` or
   `templates/amazon-listing-template.md`, copy the text into your listing,
   and fill in the bracketed fields. Print them out if you like working on paper.
2. **Profit calculators** — Open `calculators/ebay-profit-calculator.html` or
   `calculators/amazon-profit-calculator.html` in any web browser. Fill in your
   costs and fees to see your estimated profit before you list. Everything runs
   locally in your browser; no data leaves your computer.
3. **Sourcing log** — Use `logs/sourcing-log-template.md` (paper-friendly) or
   `logs/sourcing-log-example.csv` (spreadsheet-friendly) to record every item
   you source, what you paid, and what it sold for.
4. **Pricing tips** — Read `tips/pricing-tips.md` for beginner-friendly guidance
   on pricing items to sell.

## Printable

Every page is designed to print cleanly. Open any HTML file and use your
browser's Print command, or print the Markdown templates from your favorite
Markdown viewer. The `assets/css/print.css` stylesheet strips navigation and
colors for clean paper output.

## Testing

The calculator logic is covered by a small Node.js test suite:

```
node assets/js/tests/profit-calculator.test.js
```

## License

MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. See `LICENSE`.

## About Asdale Dynamics, LLC

Asdale Dynamics, LLC is an Indiana LLC founded by Dylan Asdale, a registered
nurse turned AI author. The LLC publishes beginner-friendly AI education,
books and guides, and practical tools — including small-business and reselling
resources like this kit. Learn more at [dylanasdale.github.io](https://dylanasdale.github.io).

This kit is education and general small-business information only. It is not
legal, tax, or financial advice. Prices, fees, and policies on eBay and Amazon
change over time — always check the current fee schedules before you list.
