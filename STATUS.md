# STATUS — Free Flipping Starter Kit

## What was built

A free, printable, plain-English starter kit for eBay and Amazon reselling,
published by Asdale Dynamics, LLC (Indiana, formed October 2026). Written in
the same "explain it like a friend would" plain-English, step-by-step,
never-condescending style as Dylan Asdale's *The Massive AI Manual* and
dylanasdale.github.io.

Files:
- `README.md` — kit overview, who it's for, what's inside, a step-by-step
  "your first flip" walkthrough, how to use each piece, print info, testing,
  license, and Asdale Dynamics, LLC credit
- `LICENSE` — MIT, Copyright (c) 2026 Asdale Dynamics, LLC (exact line)
- `templates/ebay-listing-template.md` — copy-and-fill eBay listing (title,
  condition, description, photos, shipping, returns)
- `templates/amazon-listing-template.md` — copy-and-fill Amazon listing
  (product ID, title, bullets, images, offer)
- `calculators/ebay-profit-calculator.html` — self-contained browser-based
  eBay profit calculator (works when opened as a file, no server)
- `calculators/amazon-profit-calculator.html` — self-contained browser-based
  Amazon profit calculator (works when opened as a file, no server)
- `assets/js/profit-calculator.js` — canonical shared calculation logic
  (fees, total cost, net profit, margin, ROI)
- `assets/js/tests/profit-calculator.test.js` — Node.js test suite for the
  calculator logic
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
   `calculators/amazon-profit-calculator.html` directly in any browser
   (double-click works; no server needed). Enter costs and fees, click
   "Calculate profit." Everything runs locally in the browser.
3. Templates and logs: open the `.md` files in any Markdown viewer or text
   editor, copy the template, fill in your item details.
4. Print: use your browser's Print command on any page; `print.css` strips
   navigation and colors for clean paper output.
5. Tests: `node assets/js/tests/profit-calculator.test.js`

## Verification results

- `node assets/js/tests/profit-calculator.test.js` — all assertions passed
  (fee, total cost, net profit, margin, ROI for eBay-style and Amazon-style
  inputs, zero-sale edge case, currency formatting)
- Calculators are now self-contained (inline JS) and verified to work when
  opened directly via `file://` — no external module loading that could fail
  offline
- All HTML files readable; calculator script executes without errors
- `LICENSE` contains exact line: `Copyright (c) 2026 Asdale Dynamics, LLC`
- `README.md`, `index.html`, calculator footers, and `STATUS.md` credit
  Asdale Dynamics, LLC
- No `.github/workflows` directory present; no secrets or personal data found
  in any file
- Git initialized and committed as Dylan Asdale
  (dylanasdale@users.noreply.github.com), plain commit messages, no
  Co-authored-by trailers; nothing pushed, no remote created

## Known gaps

- Calculators are estimates only; eBay and Amazon fees change over time —
  users must check current fee schedules before pricing (noted in the UI and
  README)
- No automated HTML/CSS linting configured (no build tooling in this static
  kit)
- CSV sourcing log example contains fictitious illustrative data only
- Not legal, tax, or financial advice
