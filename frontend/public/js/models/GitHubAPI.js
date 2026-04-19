/**
 * ProjectAPI (Model)
 * Fetches project data from the backend so the frontend stays stateless.
 */

const PROJECTS_ENDPOINT = "/api/projects";

export async function fetchProjects() {
  const response = await fetch(PROJECTS_ENDPOINT);

  if (!response.ok) {
    throw new Error(`Projects API error: ${response.status}`);
  }

  const data = await response.json();

  if (!data || !Array.isArray(data.projects) || data.projects.length === 0) {
    throw new Error("No projects returned by backend");
  }

  return data;
}
