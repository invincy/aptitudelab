# Verification

23 November 2026

## Automated checks

`npm test`: 8/8 passed. Syntax checks passed for all application modules. Content has six topics with five questions each and both language variants.

## Browser checks

- Desktop dashboard renders with navigation, topic cards and local progress.
- Percentage lesson reveals four guided steps and transitions to a quiz, recording completion.
- Correct answer shows immediate explanation and locks the checked response.
- Submitting with four unanswered questions reports one correct, zero wrong and four skipped; all solution explanations are available.
- A five-question timed mixed drill starts at ten minutes with a chosen 0.25 penalty. Question palette supports skipping and revisiting; submission produces results.
- Reload retains lesson completion and answer history.
- Hindi changes navigation, headings, lesson/question content and filters.
- 390 × 844 mobile layout provides fixed bottom navigation and readable stacked content.
- Ratio slider changes redistributed shares (3:3 gives 300/300), work simulation shows 4-day combined time, speed slider recalculates 61 × 2 = 122 km, sequence reveal gives 19, and syllogism selection changes the set diagram and conclusion.
- Topic search finds the requested lab; mobile lesson has no horizontal overflow.
- Automated timer arithmetic verifies deadline and expiry; actual three-minute browser expiry is not exercised.

## Known boundaries

Progress is local to a browser. Active drills are not resumed after reload. No user account, cloud sync, full official mocks or complete exam syllabus. Question repetition counts in mastery. Railway mapping is provisional. External fonts gracefully fall back to installed fonts.

## Mobile front page revision

- Replaced the dashboard introduction with a phone-first front page, live percentage grid and slider, exam chips, a suggested next lesson, six tappable topic tiles, timed-practice entry and local progress summary.
- Checked 390 × 844 English and 360 × 800 Hindi layouts. No page-level horizontal overflow; exam chips intentionally scroll within their row.
- Percentage slider recalculates the display (25 to 26 out of 100). Main call to action opens the percentage lesson.
- Railway chip shows five relevant topic tiles and preserves the selected exam when changing language.
- Bottom navigation has short mobile labels and safe-area padding.

## Visible percentage changes

- Added meaning, increase, decrease and two-change modes to the percentage lesson. Same-scale bars show before/after values; a hatched section shows the removed amount.
- Starting-value and percentage sliders update the visual, net change and teaching steps immediately. Two changes can each increase or decrease; the second change uses the intermediate value.
- Browser checks: 400 + 25% = 500; 400 − 25% = 300; 500 + 20% then −20% = 480 (−4%); two 20% increases = 720 (+44%); changing the second decrease to 21% gives 474 (−5.2%). Hindi controls and 390px mobile layout verified, with no browser errors or page-level horizontal overflow.
- Added five arithmetic tests for single and successive changes, zero change, full decrease, and the original base for net percentage. Total automated checks: 13 passing.

## Kids Lab · 24 November 2026

- 12 original bilingual playgrounds, 60 unique three-choice practice questions with explanations, optional browser read-aloud, local completion scores and JSON export.
- Browser checked counting/tap sequence and zero, comparing groups, addition hops, balloon take-away and difference modes, 23 − 8 regrouping, array rotation, fair sharing with a remainder, fraction selection, repeating patterns, shape rotation, shop change, clock hands, ruler length and four mental-maths methods.
- A five-question round was completed with one initial wrong answer corrected. The completion score remained 4/5 on the first try, and persisted after reload.
- Confirmed 10 stars shared among 3 friends displays 3 each and 1 left in the pool. Confirmed 23 − 8 ends at 1 ten and 5 ones. The regrouping control is disabled after completion until replay/reset.
- Confirmed ×9 reasoning, 99 × 11 = 1089 with regrouping-safe arithmetic, and 98 × 97 = 9506 using a base-100 strip/overlap model.
- Checked English at 390px, Hindi at 360px, and the desktop home. Mobile had no page-level horizontal overflow. Tested the link between the existing Exam Lab and Kids Lab.
- Read-aloud dispatch reports available browser playback; actual Hindi voice availability is device-dependent. Text remains available throughout.
- 24 automated tests passed. An addition rendering issue introduced while adding the regrouping story was found and fixed before publication; all playground render checks subsequently passed.
- Official NCERT framework text and indexed teacher guidance informed the approach. Full textbook and handbook requests failed; source limitations are displayed in the grown-up page. No book exercise or artwork was copied.
- Scope: introductory activities for the agreed 12 areas, not a complete grade-by-grade curriculum. Progress is device-local; no child identity, account or cross-device sync.

## Carrying and teaching view · 25 November 2026

- Added the thirteenth bilingual playground and five original questions (65 Kids Lab questions). All 28 automated checks pass, including exhaustive permitted addition/subtraction arithmetic.
- Browser verified 27 + 18 = 45, the ten-ones exchange, 52 − 27 = 25 with crossed removed blocks, 52 − 52 = 0, and no-exchange 10 + 1 = 11.
- Sliders reset the lesson to step one. Reducing the starting number clamps subtraction's second number to its new maximum.
- All five new practice questions completed with 5/5 first-try score.
- English/Hindi controls, narrow phone layout with no horizontal overflow, desktop teaching layout and teaching-view exit checked. Teaching view preserves live controls and hides surrounding navigation.
- Saved a full-page teaching-view screenshot. No video export was requested or produced.
