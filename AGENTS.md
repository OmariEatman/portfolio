# Repository guidance

## Site and pages

Build a personal portfolio for Omari Eatman that introduces his work, highlights projects, and helps visitors get in touch.

Planned pages:
- `index.html`: Home page with a brief introduction, featured projects, and links to the other pages.
- `about.html`: About page with a biography, skills, and experience supplied by the owner.
- `projects.html`: Projects page with project descriptions, images, and links to demos or source code where available.
- `contact.html`: Contact page with contact details and social links supplied by the owner.

Do not invent personal details, qualifications, projects, testimonials, or contact information. Use clearly marked placeholders when content is missing.

## Design

Use this starting design direction unless the owner requests a change:
- Colors: navy (`#0F172A`) for primary text and dark sections, white (`#FFFFFF`) for the main background, light gray (`#F1F5F9`) for secondary surfaces, and teal (`#0F766E`) for links and accents.
- Fonts: use a system sans-serif stack such as `Arial, Helvetica, sans-serif` throughout, with bold headings and readable body text.
- Style: clean, modern, and minimal, with generous spacing, clear navigation, restrained decoration, and a consistent layout across pages.
- Make every page responsive, with readable color contrast, semantic HTML, visible keyboard focus, descriptive links, and alternative text for meaningful images.

## Implementation rules

- Use plain HTML, CSS, and JavaScript only.
- Do not introduce frameworks, component libraries, CSS frameworks, or build tools.
- Use relative file paths for internal navigation, stylesheets, scripts, images, and other local assets. External destinations may use full URLs.
- Keep shared styles in `css/styles.css`, shared JavaScript in `js/main.js`, and images in `images/` when those assets are needed.
- Keep code simple and readable. Prefer native browser features and add JavaScript only when it supports a useful interaction.
- Before completing a task, check the affected pages, navigation, local asset paths, and responsive layout. Run any existing checks relevant to the change.

## Git workflow

- After each completed task, review the diff and commit the task's changes with a clear, descriptive message.
- Keep commits focused on the completed task. Do not include unrelated changes or secrets.
- Push the commit to GitHub using the current branch and its configured upstream. If no upstream exists, use the repository's `origin` remote and set an upstream for the current branch.
- Do not force-push or rewrite shared history unless explicitly requested.
- If committing or pushing is blocked, report the blocker and do not claim that it succeeded.
