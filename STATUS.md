# STATUS — Free Flipping Starter Kit

## What was built

A free, printable, plain-English starter kit for eBay and Amazon reselling,
published by Asdale Dynamics, LLC (Indiana, formed October 2026).

Files:
- `README.md` — kit overview, how to use, credits, license
- `LICENSE` — MIT, Copyright (c) 2026 Asdale Dynamics, LLC
- `templates/ebay-listing-template.md` — copy-and-fill eBay listing (title, condition, description, photos, shipping)
- `templates/amazon-listing-template.md` — copy-and-fill Amazon listing (product ID, title, bullets, images, offer)
- `calculators/ebay-profit-calculator.html` — browser-based eBay profit calculator
- `calculators/amazon-profit-calculator.html` — browser-based Amazon profit calculator
- `assets/js/profit-calculator.js` — shared calculation logic (fees, total cost, net profit, margin, ROI)
- `assets/js/tests/profit-calculator.test.js` — Node.js test suite for the calculator
- `assets/css/style.css` — shared screen styles
- `assets/css/print.css` — print styles for clean paper output
- `logs/sourcing-log-template.md` — printable sourcing log table
- `logs/sourcing-log-example.csv` — spreadsheet-ready sourcing log example
- `tips/pricing-tips.md` — plain-English pricing guidance
- `index.html` — static landing page linking everything
- `calculators/README.md` — notes on publishing the calculators to GitHub Pages
- `.gitignore` — standard ignores
- `STATUS.md` — this file

No `.github/workflows` files. No secrets, API keys, or personal data. No build
step — static HTML and Markdown only.

## How to run

1. Open the folder in a file browser, or open `index.html` in any web browser
   to browse the kit.
2. Calculators: open `calculators/ebay-profit-calculator.html` or
   `calculators/amazon-profit-calculator.html`, enter your costs and fees, and
   click Calculate profit. Everything runs locally in the browser.
3. Templates and logs: open the `.md` files in any Markdown viewer or text
   editor, copy the template, and fill in your item details.
4. Print: use your browser's Print command on any page; `print.css` strips
   navigation and colors for clean paper output.
5. Tests: `node assets/js/tests/profit-calculator.test.js`

## Verification results

- `node assets/js/tests/profit-calculator.test.js` — all assertions passed
  (fee, total cost, net profit, margin, ROI for eBay-style and Amazon-style
  inputs, zero-sale edge case, currency formatting)
- All HTML files load; calculator JS module imports correctly
- `LICENSE` contains exact line: `Copyright (c) 2026 Asdale Dynamics, LLC`
- `README.md`, `index.html`, and footer credits mention Asdale Dynamics, LLC
- No `.github/workflows` directory present; no secrets or personal data found
  in any file
- Git initialized and committed as Dylan Asdale
  (dylanasdale@users.noreply.github.com), plain commit message, no
  Co-authored-by trailers; nothing pushed, no remote created

## Known gaps

- Calculators are estimates only; eBay and Amazon fees change over time — users
  must check current fee schedules before pricing (noted in the UI and README)
- No automated HTML/CSS linting configured (no build tooling in this static kit)
- CSV sourcing log example contains fictitious illustrative data only
- Not legal, tax, or financial advice
