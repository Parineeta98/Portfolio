/* =========================================================
   Project data
   Edit this array to add/change project cards — no HTML editing
   needed. Projects are grouped into categories; each category
   renders as its own labeled row of cards under #projectGrid.

   fields per project:
     title       - project name
     blurb       - 1-2 sentence summary (problem -> approach -> outcome)
     tags        - array of tool/tech strings
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
                        tags: ["Python", "Azure SQL", "Power BI"],
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Cognitive-Decline-Monitoring"
             },
             {
                        title: "Hospital Readmission Risk Analysis",
                        blurb: "Built an end-to-end pipeline analyzing 101K+ hospital encounters to identify drivers of 30-day diabetic readmission, then trained a logistic regression risk model (AUC 0.607) powering a daily Power BI discharge-planning watchlist.",
                        tags: ["Python", "scikit-learn", "Azure SQL", "Power BI"],
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Hospital-Readmission-Risk-Analysis"
             },
             {
                        title: "Covid Project",
                        blurb: "Explored global COVID-19 case, death, and vaccination data in SQL — using CTEs, temp tables, window functions, and views to calculate infection/death rates by country and rolling vaccination percentages.",
                        tags: ["SQL"],
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Covid_Project"
             }
                 ]
   },
   {
          category: "Finance & Marketing",
          projects: [
             {
                        title: "Retail Sales & Customer Segmentation Analysis",
                        blurb: "Analyzed 1,000+ retail transactions in Power BI to uncover seasonal revenue patterns, identifying two under-targeted high-value customer segments and turning them into a segment-specific marketing strategy.",
                        tags: ["Power BI", "DAX", "Power Query"],
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Retail-Sales-Analysis"
             },
             {
                        title: "A/B Testing & User Engagement Analysis",
                        blurb: "Simulated a product analytics A/B test in SQL and Tableau, finding a statistically significant conversion uplift (2.55% vs. 1.79%, p < 0.05) and that high-activity users convert up to 15x more than low-activity users.",
                        tags: ["SQL Server", "Tableau", "Excel"],
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/A-B-Testing"
             },
             {
                        title: "Currency Exchange Time Series Analysis",
                        blurb: "Evaluated 10 years of EUR/USD, GBP/JPY & CHF/CNY data using wavelet transforms and regression, identifying declining volatility trends and varying noise patterns across currency pairs.",
                        tags: ["NumPy", "Pandas", "Seaborn", "scikit-learn"],
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Currency-Exchange-Time-Series-Analysis-"
             },
             {
                        title: "Bank Customer Segmentation (K-Means)",
                        blurb: "Applied K-means clustering to segment bank customers by balance, purchases, credit, and payment behavior, achieving 96% accuracy in predicting customer segments.",
                        tags: ["NumPy", "Pandas", "Seaborn", "scikit-learn"],
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Customer-Segmentation-Analysis"
             }
                 ]
   },
   {
          category: "Academic",
          projects: [
             {
                        title: "Flanker Task",
                        blurb: "Built a Python implementation of the Flanker inhibitory-control paradigm (Eriksen & Eriksen, 1974), testing selective attention using shape-based congruent, incongruent, and neutral stimuli.",
                        tags: ["Python"],
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Flanker-task"
             },
             {
                        title: "Reports",
                        blurb: "A collection of written research reports, including a literature thesis review and an EEG replication study testing the relationship between the N200 component and Visual Encoding Time in an n-back task.",
                        tags: ["JASP", "Statsmodels", "MNE"],
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Reports"
             },
             {
                        title: "Hippocampal Microcircuit Model",
                        blurb: "Master's thesis: built a computational model (Brian Simulator) of a hippocampal pyramidal cell and interneuron to study how synaptic delays disrupt theta-rhythm synchrony — relevant to demyelination-related cognitive effects.",
                        tags: ["Python", "Brian Simulator", "NumPy", "SciPy"],
                        demoUrl: "",
                        codeUrl: "https://github.com/Parineeta98/Hippocampal-Microcircuit-Model-of-Pyramidal-Cell-and-Interneuron"
             }
                 ]
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

function renderProjectCard(p) {
     return `
         <article class="project-card">
               <div class="project-thumb">${initials(p.title)}</div>
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
});
