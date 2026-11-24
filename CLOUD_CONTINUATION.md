# AptitudeLab cloud continuation

Repository: `invincy/aptitudelab`

Continue from branch `codex/carrying-teaching-view`. The published production site is still the last stable 12-playground release. The new branch adds a thirteenth playground for visible carrying and borrowing, five original bilingual questions (65 total), and a clean teaching view intended for screen recordings.

## Run and verify

- Node.js 20+; no package installation required.
- `npm test` — 28 tests passed locally, including exhaustive permitted addition/subtraction inputs.
- `npm start` — serves `dist/` on port 4173. `server.mjs` binds to loopback; use the cloud environment's supported preview forwarding.
- Lesson URL: `/kids.html?lab=regroup`.
- Recording view: `/kids.html?lab=regroup&teach=1`.

## Work completed

- Addition allows first number 10–49 and second number 1–49; answers remain below 100.
- Subtraction allows first number 10–99 and second number 1 up to the first, so answers stay non-negative.
- Four steps show initial blocks, combination/exchange, regrouping/removal, and final number.
- The drawing and explanation handle examples requiring no exchange as well as zero answers.
- Existing Kids Lab and Exam Lab remain present.

## Remaining verification before publication

- Browser verified the addition example 27 + 18 through the exchange step and the teaching-view toggle on desktop.
- Complete browser checks for the final addition step, subtraction 52 − 27, no-exchange cases, mobile/Hindi layout, and the five new practice questions.
- Check controls that reset the story when values change, and exit teaching view.
- Update README/QA counts and record final verification.
- Publish only after these checks. Preserve the private Site and its exact ID in `.openai/hosting.json`; do not create a new Site.

Production Site project ID: `appgprj_6b034311000481919c3ad16f5f52ac37`. Source preparation and publishing require fresh short-lived Sites credentials; none are stored in this repository. Follow the installed Sites workflow, synchronize the exact source, and publish a matching archive. GitHub and Sites source remotes have separate roles.

User direction: keep extending the interactive maths website topic by topic without clarification questions. Show changes visibly and explain the underlying maths. Kids Lab teaching follows objects, pictures, symbols. The user intends to demonstrate it on YouTube; the teaching view is for recording, and no video has been produced yet.
