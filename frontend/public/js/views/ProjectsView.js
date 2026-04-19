/**
 * ProjectsView (View)
 * ────────────────────
 * Renders project cards into the DOM from repo data.
 */

import { getLangColor } from "../models/PortfolioData.js";

/**
 * Escapes HTML special characters to prevent XSS.
 * @param {string} str - Raw string
 * @returns {string} Escaped HTML string
 */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Renders an array of repo objects as project cards.
 * @param {string} containerId - ID of the grid container
 * @param {Array} repos - Array of GitHub repo objects
 */
export function renderProjects(containerId, repos) {
  const grid = document.getElementById(containerId);

  if (!grid) {
    console.warn(`ProjectsView: Container #${containerId} not found`);
    return;
  }

  grid.innerHTML = "";

  repos.forEach((repo, i) => {
    const card = document.createElement("div");
    card.className = `project-card reveal reveal-delay-${Math.min((i % 3) + 1, 4)}`;

    const color = getLangColor(repo.language);
    let desc = repo.description || "A project by Hiralal Kumar on GitHub.";
    if (desc.length > 120) desc = desc.substring(0, 120) + "...";

    card.innerHTML =
      '<div class="project-icon">' +
      '<svg class="icon-svg" width="22" height="22" viewBox="0 0 24 24"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>' +
      "</div>" +
      '<div class="project-name">' +
      escapeHtml(repo.name) +
      "</div>" +
      '<div class="project-desc">' +
      escapeHtml(desc) +
      "</div>" +
      '<div class="project-footer">' +
      '<div class="project-lang">' +
      '<span class="lang-dot" style="background:' +
      color +
      '"></span>' +
      escapeHtml(repo.language || "Code") +
      "</div>" +
      '<a href="' +
      escapeHtml(repo.html_url) +
      '" target="_blank" rel="noopener" class="project-link">' +
      "View " +
      '<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>' +
      "</a>" +
      "</div>";

    grid.appendChild(card);

    // Trigger reveal animation after append
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.classList.add("visible");
      });
    });
  });

  // Re-observe newly added cards for scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  grid.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
}
