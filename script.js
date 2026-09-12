/* =========================================================
   Project data
   Edit this array to add/change project cards — no HTML editing
   needed. Projects are grouped into categories; each category
   renders as its own labeled row of cards under #projectGrid.

   fields per project:
     title       - project name
     blurb       - 1-2 sentence summary (problem -> approach -> outcome)
     tags        - array of tool/tech strings
     visual      - key into CHART_SVGS picking the thumbnail chart style
     demoUrl     - link to a live demo/dashboard (optional, omit or set "")
     codeUrl     - link to the GitHub repo (optional, omit or set "")
   ========================================================= */
const PROJECT_CATEGORIES = [
   {
          category: "Health Tech",
          projects: [
             {
                        title: "Cognitive Decline Monitoring (OASIS-2)",
                        blurb: "Analyzed 373 longitudinal MRI visits across 150 subjects to flag dementia progression patterns, quantifying a 7x variation in brain-volume decline that led to a switch from fixed-interval to individualized monitoring.",
                        tags: ["Python", "Pandas", "Seaborn", "Azure SQL", "Power BI", "DAX"],
                        visual: "line-down",
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Cognitive-Decline-Monitoring"
             },
             {
                        title: "Hospital Readmission Risk Analysis",
                        blurb: "Built an end-to-end pipeline analyzing 101K+ hospital encounters to identify drivers of 30-day diabetic readmission, then trained a logistic regression risk model (AUC 0.607) powering a daily Power BI discharge-planning watchlist.",
                        tags: ["Python", "Pandas", "scikit-learn", "Statsmodels", "Azure SQL", "Power BI"],
                        visual: "bar",
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Hospital-Readmission-Risk-Analysis"
             },
             {
                        title: "Covid Project",
                        blurb: "Explored global COVID-19 case, death, and vaccination data in SQL — using CTEs, temp tables, window functions, and views to calculate infection/death rates by country and rolling vaccination percentages.",
                        tags: ["SQL"],
                        visual: "area",
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Covid_Project"
             }
                 ]
   },
   {
          category: "Finance & Marketing",
          projects: [
             {
                        title: "Retail Sales Analysis",
                        blurb: "Analyzed 1,000+ retail transactions in Power BI to uncover seasonal revenue patterns, identifying two under-targeted high-value customer segments and turning them into a segment-specific marketing strategy.",
                        tags: ["Power BI", "DAX"],
                        visual: "donut",
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Retail-Sales-Analysis"
             },
             {
                        title: "A/B Testing & User Engagement Analysis",
                        blurb: "Simulated a product analytics A/B test in SQL and Tableau, finding a statistically significant conversion uplift (2.55% vs. 1.79%, p < 0.05) and that high-activity users convert up to 15x more than low-activity users.",
                        tags: ["SQL Server", "Tableau"],
                        visual: "bar-compare",
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/A-B-Testing"
             },
             {
                        title: "Currency Exchange Time Series Analysis",
                        blurb: "Evaluated 10 years of EUR/USD, GBP/JPY & CHF/CNY data using wavelet transforms and regression, identifying declining volatility trends and varying noise patterns across currency pairs.",
                        tags: ["NumPy", "Pandas", "Seaborn", "scikit-learn"],
                        visual: "line-multi",
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Currency-Exchange-Time-Series-Analysis-"
             },
             {
                        title: "Bank Customer Segmentation (K-Means)",
                        blurb: "Applied K-means clustering to segment bank customers by balance, purchases, credit, and payment behavior, achieving 96% accuracy in predicting customer segments.",
                        tags: ["Python", "Pandas", "NumPy", "SciPy", "scikit-learn", "Seaborn", "Excel", "Git"],
                        visual: "scatter",
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Customer-Segmentation-Analysis"
             }
                 ]
   }
   ];

/* =========================================================
   Project thumbnail visuals
   Small inline data-viz graphics standing in for a screenshot —
   each project card gets one of these, picked by its "visual" key.
   Reuses the same .grid-line / .chart-line-* / .chart-fill-*
   classes as the hero chart so the whole site stays visually
   consistent. Pure original artwork, not a real dashboard capture.
   ========================================================= */
const CHART_SVGS = {
     "line-down": `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
           <line x1="0" y1="25" x2="200" y2="25" class="grid-line" />
                 <line x1="0" y1="55" x2="200" y2="55" class="grid-line" />
                       <line x1="0" y1="85" x2="200" y2="85" class="grid-line" />
                             <polyline class="chart-line chart-line-white" points="0,20 40,35 80,30 120,55 160,60 200,80" />
                                   <polyline class="chart-line chart-line-teal" points="0,32 40,46 80,50 120,66 160,78 200,90" />
                                       </svg>`,

     "line-multi": `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
           <line x1="0" y1="25" x2="200" y2="25" class="grid-line" />
                 <line x1="0" y1="55" x2="200" y2="55" class="grid-line" />
                       <line x1="0" y1="85" x2="200" y2="85" class="grid-line" />
                             <polyline class="chart-line chart-line-white" points="0,60 30,40 60,50 90,25 120,45 150,20 180,35 200,15" />
                                   <polyline class="chart-line chart-line-teal" points="0,80 30,70 60,85 90,55 120,68 150,40 180,58 200,42" />
                                       </svg>`,

     "bar": `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
           <line x1="0" y1="90" x2="200" y2="90" class="grid-line" />
                 <rect x="14" y="55" width="24" height="35" rx="3" class="chart-fill-dim" />
                       <rect x="54" y="40" width="24" height="50" rx="3" class="chart-fill-white" />
                             <rect x="94" y="20" width="24" height="70" rx="3" class="chart-fill-teal" />
                                   <rect x="134" y="48" width="24" height="42" rx="3" class="chart-fill-white" />
                                         <rect x="174" y="30" width="24" height="60" rx="3" class="chart-fill-teal-light" />
                                             </svg>`,

     "bar-compare": `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
           <line x1="0" y1="90" x2="200" y2="90" class="grid-line" />
                 <rect x="24" y="50" width="28" height="40" rx="3" class="chart-fill-white" />
                       <rect x="64" y="60" width="28" height="30" rx="3" class="chart-fill-dim" />
                             <rect x="118" y="30" width="28" height="60" rx="3" class="chart-fill-teal" />
                                   <rect x="158" y="66" width="28" height="24" rx="3" class="chart-fill-teal-light" />
                                       </svg>`,

     "area": `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
           <line x1="0" y1="25" x2="200" y2="25" class="grid-line" />
                 <line x1="0" y1="55" x2="200" y2="55" class="grid-line" />
                       <polygon points="0,70 40,50 80,60 120,35 160,45 200,25 200,100 0,100" class="chart-fill-teal-area" />
                             <polyline class="chart-line chart-line-teal" points="0,70 40,50 80,60 120,35 160,45 200,25" />
                                 </svg>`,

     "donut": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
           <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="14" />
                 <circle cx="50" cy="50" r="36" fill="none" class="chart-line-teal" stroke-width="14" stroke-dasharray="145 226" stroke-linecap="round" transform="rotate(-90 50 50)" />
                       <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="14" stroke-dasharray="55 226" stroke-dashoffset="-145" stroke-linecap="round" transform="rotate(-90 50 50)" />
                           </svg>`,

     "scatter": `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
           <line x1="0" y1="90" x2="200" y2="90" class="grid-line" />
                 <line x1="0" y1="55" x2="200" y2="55" class="grid-line" />
                       <circle cx="30" cy="70" r="6" class="chart-fill-white" />
                             <circle cx="46" cy="60" r="6" class="chart-fill-white" />
                                   <circle cx="38" cy="80" r="6" class="chart-fill-dim" />
                                         <circle cx="120" cy="35" r="6" class="chart-fill-teal" />
                                               <circle cx="136" cy="28" r="6" class="chart-fill-teal" />
                                                     <circle cx="150" cy="42" r="6" class="chart-fill-teal-light" />
                                                           <circle cx="80" cy="50" r="6" class="chart-fill-dim" />
                                                                 <circle cx="170" cy="65" r="6" class="chart-fill-white" />
                                                                     </svg>`
};

function chartThumb(visual) {
     return CHART_SVGS[visual] || CHART_SVGS["line-down"];
}

function initials(title) {
     return title
       .split(" ")
       .filter(Boolean)
       .slice(0, 2)
       .map((w) => w[0].toUpperCase())
       .join("");
}

function slugify(str) {
     return str
       .toLowerCase()
       .replace(/[^a-z0-9]+/g, "-")
       .replace(/^-+|-+$/g, "");
}

function renderProjectCard(p) {
     return `
         <article class="project-card" id="${slugify(p.title)}">
               <div class="project-thumb">${chartThumb(p.visual)}</div>
                     <div class="project-body">
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
                                                                                                               `;
}

function renderProjects() {
     const grid = document.getElementById("projectGrid");
     if (!grid) return;

  grid.innerHTML = PROJECT_CATEGORIES.map((cat) => `
      <div class="project-category">
            <h3 class="category-heading">${cat.category}</h3>
                  <div class="project-grid">
                          ${cat.projects.map(renderProjectCard).join("")}
                                </div>
                                    </div>
                                      `).join("");
}

/* =========================================================
   Skill dropdowns
   Clicking a skill button in the Skills section opens a small
   dropdown right below it, listing the projects that used that
   skill (the Projects section itself is untouched). Matching is
   normalized (case/punctuation-insensitive) and substring-based so
   e.g. "SQL" also matches "Azure SQL" / "SQL Server", with a couple
   of explicit aliases for tags that use different wording (SKLearn
   vs. scikit-learn).
   ========================================================= */
const SKILL_ALIASES = { sklearn: "scikitlearn" };

function normalizeSkill(str) {
     return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function skillMatchesTag(skill, tag) {
     const skillNorm = normalizeSkill(skill);
     const s = SKILL_ALIASES[skillNorm] || skillNorm;
     const t = normalizeSkill(tag);
     return t === s || t.includes(s) || s.includes(t);
}

function getProjectsForSkill(skill) {
     const matches = [];
     PROJECT_CATEGORIES.forEach((cat) => {
          cat.projects.forEach((p) => {
                if (p.tags.some((tag) => skillMatchesTag(skill, tag))) {
                     matches.push({ title: p.title, id: slugify(p.title) });
                }
          });
     });
     return matches;
}

function renderSkillDropdown(skill) {
     const projects = getProjectsForSkill(skill);
     if (!projects.length) {
          return `<p class="skill-dropdown-empty">Not used in a project yet.</p>`;
     }
     return `
          <p class="skill-dropdown-title">Used in</p>
          <ul>${projects.map((p) => `<li><a href="#${p.id}" class="skill-dropdown-link">${p.title} →</a></li>`).join("")}</ul>
     `;
}

function initSkillFilters() {
     document.querySelectorAll(".skill-group").forEach((group) => {
          const dropdown = group.querySelector(".skill-dropdown");
          const buttons = [...group.querySelectorAll(".skill-tag")];
          if (!dropdown) return;

          buttons.forEach((btn) => {
                btn.addEventListener("click", () => {
                     const skill = btn.textContent.trim();
                     const wasActive = btn.classList.contains("active");

                     buttons.forEach((b) => b.classList.remove("active"));

                     if (wasActive) {
                          dropdown.hidden = true;
                          dropdown.innerHTML = "";
                          return;
                     }

                     btn.classList.add("active");
                     dropdown.innerHTML = renderSkillDropdown(skill);
                     dropdown.hidden = false;
                });
          });
     });
}

function initNav() {
     const toggle = document.getElementById("navToggle");
     const nav = document.getElementById("nav");
     if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
         const isOpen = nav.classList.toggle("open");
         toggle.setAttribute("aria-expanded", String(isOpen));
  });

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
     initSkillFilters();
});
