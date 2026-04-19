/**
 * ProjectsController (Controller)
 * Orchestrates fetching projects from the backend and rendering cards.
 */

import { fetchProjects } from "../models/GitHubAPI.js";
import { fallbackRepos } from "../models/PortfolioData.js";
import { renderProjects } from "../views/ProjectsView.js";
import { showToast } from "../views/ToastView.js";

const PROJECTS_CONTAINER_ID = "projectsGrid";

/**
 * Initializes the projects section: fetches from backend,
 * falls back to static data on failure.
 */
export async function initProjectsController() {
  try {
    const response = await fetchProjects();
    renderProjects(PROJECTS_CONTAINER_ID, response.projects);

    if (response.source === "github") {
      showToast(`Loaded ${response.projects.length} repositories from backend`);
      return;
    }

    showToast("Backend is serving fallback project data");
  } catch (error) {
    console.info("ProjectsController: Using fallback repos -", error.message);
    renderProjects(PROJECTS_CONTAINER_ID, fallbackRepos);
  }
}
