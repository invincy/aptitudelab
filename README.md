# AptitudeLab

A bilingual, responsive competitive-exam learning MVP. Buildless ES modules: no package dependencies or API keys.

Kids Lab is available at `/kids.html`, linked from the front page. It includes 13 bilingual interactive playgrounds and 65 original gentle practice questions, separate from the exam question bank and progress. Counting, comparing, addition, subtraction, tens and ones, visible carrying and borrowing, equal groups, fair sharing, fractions, patterns, shapes, money/time/measurement and Vedic/mental methods are all implemented. Browser read-aloud uses available device voices; voice and Hindi support vary by browser. No microphone or child account is used.

The children's sequence is informed by NCERT foundational-stage guidance and official indexed teacher/textbook materials. Full textbook/handbook PDFs could not be retrieved during research; the source page records this limitation. Activities and questions are original. This is an introductory collection, not a complete school-grade curriculum.

## Run

Requires Node.js 20+ (tested with Node 24).

```sh
npm start
# http://127.0.0.1:4173
npm test
```

Serve `dist/` with any static web host. The local server binds only to loopback. The private hosted Site is declared in `.openai/hosting.json`.

## Features

- Six interactive topic labs: percentages, ratios, time and work, speed and distance, number series, and syllogisms.
- Sliders, visual grids, rate animations, an animated journey, sequence prediction and selectable set relationships.
- Four-step guided examples and lesson-completion tracking.
- Thirty original bilingual questions, immediate feedback, worked solutions and standalone topic quizzes.
- Configurable shuffled timed drills, question navigation, optional penalties, automatic submission on expiry and result review.
- Browser-local progress, recent-ten-answer topic mastery, history and JSON export.
- Exam filters for SSC, banking, railways and insurance, subject filters and bilingual search.
- English/Hindi interface and structured bilingual lesson/question content.
- Mobile navigation, responsive layouts, keyboard controls and reduced-motion styling.

## Structure

- `dist/content.js`: bilingual lessons, original question bank and source references.
- `dist/engine.js`: pure scoring, filtering, mastery, persistence parsing and time calculations.
- `dist/app.js`: application views and interaction handlers.
- `dist/style.css`: responsive design system.
- `tests/engine.test.mjs`: content integrity, scoring, filtering, timing and persistence tests.

## Content scope

This is a **foundation MVP**, not complete exam preparation or an official full-length mock. Filters select broad relevant topics; they do not set official timing, section weights or marking schemes. English, general awareness, advanced maths, data interpretation and other reasoning topics remain future content work. Railway mapping is provisional because the current RRB notice could not be retrieved during research.

Official sources reviewed on 23 November 2026 are linked inside the Syllabus & sources page: SSC CGL 2026, IBPS PO/MT XVI and LIC AAO Generalist 2025, plus the RRB official portal. Questions are original, not previous-year papers. Insurance topic mapping is a foundation path, not a comprehensive AAO syllabus.

## Data and limitations

No accounts, server database, analytics or cloud sync. Progress is stored under `aptitudelab-v1` in localStorage. Repeated answers count in practice mastery; it is not a score prediction. Active quizzes do not survive reloads. The timer uses absolute deadlines, so background tabs cannot pause it. Fonts load from Google Fonts with system fallbacks; all learning functionality is dependency-free.

## Validation

Eight Node test cases cover bilingual content integrity, valid answer keys, scoring and penalties, exam/topic filtering, mastery windows, timer expiry arithmetic, storage recovery and shuffling. Browser QA covered lesson completion, a manipulated percentage slider, quiz feedback, submission and skipped results, timed setup and navigation, saved progress across reload, Hindi switching and a 390px mobile layout. Browser QA notes are in `QA.md`.

The current suite has 28 passing tests, including percentage changes and Kids Lab content integrity, all permitted near-100 products, tens exchanges, sharing remainders, clock hands and guided regrouping. Kids Lab browser QA covered all 13 playgrounds, a full corrected-answer practice round, progress persistence, read-aloud dispatch, stage filters, and English/Hindi phone layouts.

## Teaching view

Open `/kids.html?lab=regroup` for carrying and borrowing. Four steps show the original blocks, exchange, removal or regrouping, and the answer. Number sliders restart the explanation. The Teaching view button hides navigation and enlarges the demonstration for screen recording; `/kids.html?lab=regroup&teach=1` opens it directly. This is a recording layout, not an exported video.

## Next development

Expand the reviewed question bank and syllabus coverage; add account-based sync and question-level spaced repetition; build notification-specific full mocks with independently verified pattern metadata. Keep official-source review dates explicit and all questions original.

