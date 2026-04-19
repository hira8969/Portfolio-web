/**
 * SkillsView (View)
 * ─────────────────
 * Renders skill tags into the DOM.
 */

/**
 * Renders an array of skill strings as tags in the target container.
 * @param {string} containerId - The ID of the target container element
 * @param {string[]} skills - Array of skill names
 */
export function renderSkills(containerId, skills) {
  const grid = document.getElementById(containerId);

  if (!grid) {
    console.warn(`SkillsView: Container #${containerId} not found`);
    return;
  }

  skills.forEach((skill) => {
    const tag = document.createElement("span");
    tag.className = "skill-tag";
    tag.textContent = skill;
    grid.appendChild(tag);
  });
}
