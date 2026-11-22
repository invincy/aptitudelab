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
