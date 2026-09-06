/* =========================================================
   Project data
   Edit this array to add/change project cards — no HTML editing
   needed. Each project renders as one card in the #projectGrid.

   fields:
     title       - project name
     blurb       - 1-2 sentence summary (problem -> approach -> outcome)
     tags        - array of tool/tech strings
     demoUrl     - link to a live demo/dashboard (optional, omit or set "")
     codeUrl     - link to the GitHub repo (optional, omit or set "")
     placeholder - true while this card still needs real content
   ========================================================= */
const PROJECTS = [
  {
    title: "OASIS-2 Brain MRI Analysis",
    blurb: "TODO: Longitudinal analysis of brain volume, cognitive scores, and dementia progression across subject groups. Add your key finding here in one sentence.",
    tags: ["SQL", "Python", "Power BI"],
    demoUrl: "",
    codeUrl: "",
    placeholder: true
  },
  {
    title: "Brain Data Dashboard",
    blurb: "TODO: Short description of what the dashboard tracks, who it's for, and the one insight it surfaces best.",
    tags: ["Power BI", "DAX"],
    demoUrl: "",
    codeUrl: "",
    placeholder: true
  },
  {
    title: "Your Next Project",
    blurb: "TODO: Add a new project here — copy this object in the PROJECTS array and fill in the details.",
    tags: ["SQL", "Python"],
    demoUrl: "",
    codeUrl: "",
    placeholder: true
  }
];

function initials(title) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => `
    <article class="project-card">
      <div class="project-thumb">${initials(p.title)}</div>
      <div class="project-body">
        ${p.placeholder ? '<span class="placeholder-badge">Placeholder</span>' : ""}
        <h3>${p.title}</h3>
        <p>${p.blurb}</p>
        <ul class="tag-list">
          ${p.tags.map((t) => `<li>${t}</li>`).join("")}
        </ul>
        <div class="project-links">
          ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener">Live demo →</a>` : ""}
          ${p.codeUrl ? `<a href="${p.codeUrl}" target="_blank" rel="noopener">Code →</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile menu after tapping a link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNav();
  initFooterYear();
});
