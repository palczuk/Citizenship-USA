# Civics Ledger — U.S. Naturalization Test Study Site

A static, no-build study site for the **2025 USCIS civics test** (Form M-1778): all 128 official questions and accepted answers, plus a dynamic quiz sized like the real interview.

- **Study** — browse all 128 questions grouped exactly like the official guide (American Government, American History, Symbols and Holidays), search, and filter to just the 20-question 65/20 shortlist.
- **Quiz** — three modes:
  - *Standard interview*: 20 random questions, need 12 correct (60%) to pass — same as the real test.
  - *65/20 shortlist*: 10 random questions from the 20 starred questions, need 6 correct (60%).
  - *Custom*: pick any number of questions (5–128); if you ask for fewer than the full pool, they're chosen at random.
  - Each mode can run as **multiple choice** (auto-graded) or **recall & self-grade** (closer to the real oral interview — you answer out loud, then reveal and mark yourself).
- Live tally of correct/wrong answers, a progress bar, and a results screen with a pass/fail stamp and a review list of everything you missed.

No frameworks, no build step — just HTML, CSS, and vanilla JavaScript, so it runs directly on GitHub Pages.

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in a browser.

## Publish on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Keeping answers current

Four questions ask about whoever holds an office "now" (President, Vice President, Speaker of the House, Chief Justice). These are marked with an **Updates** badge in Study mode and are set to the officeholders as of **August 2026**. Before a real interview, always double-check the current names at [uscis.gov/citizenship/testupdates](https://www.uscis.gov/citizenship/testupdates) and edit `js/data.js` if they've changed — search for `"current": true`.

Four more questions (U.S. senator, U.S. representative, governor, state capital) vary by where you live and are marked **Your answer**; they're excluded from the quiz and shown in Study mode with a note on how to look yours up.

## Project structure

```
civics-site/
├── index.html        # page shell, hero, study + quiz markup
├── css/style.css      # design system (colors, type, components)
├── js/data.js          # all 128 questions/answers as a JS array
└── js/app.js            # study rendering + quiz engine
```

## Source

Questions and answers transcribed from USCIS Form **M-1778 (09/25)**, *128 Civics Questions and Answers (2025 version)*. This is an independent study tool, not affiliated with USCIS or the U.S. government.
