# Accessibility
<!-- Include a brief statement describing why accessibility matters to your project, who should be able to use and contribute to it, and what this document covers, such as your accessibility commitments, contributor expectations, and issue-reporting process. Write for people who may read this after encountering a barrier. Use  lain
language and describe user experiences rather than relying on legal language, technical jargon, or standards codes. -->

Accessibility is a core priority for **open-source projects**. We want everyone — including people with disabilities and people using assistive technology — to be able to read, navigate, and contribute to this site.

This document explains our accessibility commitment, how contributors can help us uphold it, and how to report accessibility issues.

## Priorities
<!-- Describe the outcomes the project prioritizes and how it works toward them. If you name a WCAG level as an accessibility target, make clear that it is an aspirational goal rather than a verified conformance claim. Only claim conformance after an evaluation, and identify the evaluated scope, date, method, and evaluator. Also describe the areas you prioritize, such as keyboard, screen reader, content, or language support. -->


- **Accessibility target:** We work toward [WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22). This target guides our work but is not a claim of verified conformance.
- **Keyboard support** — every interactive element must be reachable and operable with a keyboard alone, with a visible focus indicator and a logical tab order.
- **Screen reader support** — content uses semantic HTML and a logical heading hierarchy so it can be navigated with VoiceOver, NVDA, JAWS, and similar tools.
- **Readable content** — we use plain language when possible, descriptive link text, sufficient color contrast, semantic lists, and meaningful alternative text.
- **Translations** — languages declare which language they are in code so assistive tech can pronounce them correctly.

## Contributor expectations
<!-- Describe the accessibility guardrails that apply to contributions, including relevant testing, documentation, and continuous integration checks. Name specific tools only when the project uses them, and explain what evidence contributors should include with user-facing changes. -->

If you are contributing content or code, please follow these guardrails so we don't regress accessibility:

- **Testing**
  - For UI changes, test with an automated accessibility tool (such as [axe DevTools](https://www.deque.com/axe/devtools/) or the [GitHub Accessibility Scanner](https://github.com/github/accessibility-scanner)).
  - Do at least one keyboard-only pass on any changes involving interactive UI elements.
      - Tab order is logical (no jumps, no traps, reaches all interactive controls).
      - Visible focus indicator is always present and has sufficient contrast.
      - All actions work by keyboard (Tab/Shift+Tab, Enter, Space, arrow keys where expected).
      - No keyboard trap (can move into and out of modals, menus, popovers, editors).
  - Spot-check screen reader behavior for new components or significant content changes.
      - Able to navigate by headings and landmarks.
      - Controls have clear, accessible labels (programmatic name that matches the action/field purpose).
      - Custom controls expose proper semantics/state (role, name, value; toggles/expanded/selected announced).
      - Lists and list items are announced appropriately.
      - Dynamic updates are announced appropriately (errors, async status, validation, toasts via ARIA live regions as needed).
      - Reading order is logical.
- **Documentation and content**
  - Use a logical heading hierarchy (do not skip levels).
  - Use real list elements (not just formatted to look like a list; same with headings).
  - Use unique, descriptive link text (avoid "click here" / "read more").
  - Provide meaningful alternative text for images; refer to the [W3C alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/).
  - For complex images or diagrams, include a text alternative nearby.
  - For tables, provide column and row headers.
  - For videos, provide captions and a transcript.
  - Don't use color as the only way to convey meaning.
  - Content reflows without loss of information or functionality (test at 200% and with narrow widths).
- **CI/CD**
  - PRs may be blocked if they introduce accessibility violations detected by our linting or scanning workflows.
  - Resolve flagged issues, or document why a violation cannot be addressed in the PR description.

## Reporting accessibility issues
<!-- Provide a direct, accessible way to report a barrier or request help. Invite useful context such as the affected task, URL, observed behavior, browser, operating system, and assistive technology. Make screenshots or recordings optional and do not require disability disclosure. -->

If you run into an accessibility barrier, please let us know — we treat accessibility reports as expertise, not complaints.

1. **Open an issue** using the [accessibility issue template](https://github.com/open-source-accessibility/accessibility-toolkit/issues/new?template=accessibility.yml).
2. Include, when possible:
   - What you were trying to do and what went wrong.
   - The page URL.
   - Steps to reproduce
   - Your operating system, browser, and assistive technology (with versions).
   - A screen recording or screenshot, if you're comfortable sharing one.
   - Severity, using the [defined taxonomy](#severity).

### Severity
<!-- If your project uses severity levels, define them and give practical examples based on how strongly a barrier affects a user's ability to complete a task. Keep labels consistent with your issue template and resolution targets if those processes exist. Maintainers can assign or confirm severity during triage; reporters do not need to. -->

- **Critical:** Prevents you from completing a core task (for example, you cannot read an article at all).
- **Serious:** Significant difficulty, but a workaround exists.
- **Moderate:** Annoyance or inconsistent experience.
- **Minor:** Minor issue with minimal impact on usability.

### How we respond
<!-- Explain what reporters can expect after submitting an accessibility issue, including acknowledgement, status updates, workarounds, expected timelines, and opportunities to verify a fix. Use commitments your project can consistently uphold. -->

- We will acknowledge the reporter's experience promptly, respectfully, and constructively  treating accessibility reports as valuable project expertise rather than complaints.
- We will not require reporters to disclose a diagnosis or other personal information.
- We will explain next steps, known limitations, and relevant dependencies.
- Where possible, we will provide a workaround while a fix is in progress.
- We will provide updates when the status or expected timeline changes (for example, "We're working on this — tracking in #123").
- We may ask the reporter to confirm that a fix resolves the barrier before closing the issue.
- We will thank the reporter for helping improve the project.

### Resolution expectations
<!-- Describe how accessibility issues are prioritized and the target response or resolution time for each severity level. Explain when these timelines begin and how delays, workarounds, and revised dates will be communicated. -->

Resolution expectations help reporters understand when action is likely and help maintainers prioritize issues consistently. After triage, we assign each issue a severity, owner, and target resolution date.

- **Critical:** Resolve within 30 days.
- **Serious:** Resolve within 60 days.
- **Moderate:** Resolve within 90 days.
- **Minor:** Resolve within 90 days.

These targets begin when the issue is opened. If we cannot meet a target, we will explain the delay, share any available workaround, and provide a revised target date.

## Ownership and maintenance
<!-- Identify the team, role, or maintainer responsible for accessibility and describe their responsibilities to the project. Include the review cadence and how ownership transfers when responsibilities change. -->

Accessibility is owned by **[maintainer name or role]**.

### Responsibilities

The accessibility owner is responsible for:

- Triaging accessibility reports.
- Tracking accessibility work and known barriers.
- Sharing status updates and escalating unresolved accessibility risks to project maintainers.
- Keeping the project's accessibility documentation current.

## Supported environments
<!-- List the platforms, devices, browsers, input methods, and assistive technologies the project supports or has tested. Include versions where useful, note partial support, and avoid implying support for combinations that have not been evaluated. -->

This site is published as static HTML and is intended to work across:

- **Web (desktop):** latest two versions of Chrome, Edge, Firefox, and Safari.
- **Web (mobile):** latest two versions of Mobile Safari and Chrome on Android.
- **Assistive technology:** VoiceOver (macOS / iOS), NVDA (Windows), JAWS (Windows), TalkBack (Android).

Partial-support notes:

- Some translated languages may render with reduced typographic polish in older browsers.
- Embedded third-party widgets are supported on a best-effort basis.

## Known limitations
<!-- Describe known barriers in terms of the affected user experience, such as "videos do not have captions," rather than standards codes. Include available workarounds or equivalent access and link to tracked issues. If no limitations are currently documented, describe what has been tested instead of claiming that no barriers exist. -->

  - Some older articles may not yet meet every guideline (for example, missing alternative text or non-descriptive link text). We are working through these as we update content.
  - Embedded third-party content (videos, external images) may not always include captions or transcripts.
  
**Note**: Please open an accessibility issue if you find one.

## Feedback
<!-- Explain how users and contributors can suggest improvements to this statement or the project's accessibility practices. Direct active accessibility barriers to the reporting process above. -->

Accessibility is an ongoing practice, not a one-time fix. If you have suggestions for improving this statement or our practices, please open an issue or a pull request. Thank you for helping make Accessibility Toolkit usable by everyone.
