import { fallbackRepos, portfolioConfig } from "../config/portfolioData.js";

const GITHUB_API_BASE = "https://api.github.com";

function normalizeRepo(repo) {
  return {
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    html_url: repo.html_url,
    fork: repo.fork,
  };
}

export async function fetchRepositories() {
  const { githubUsername, projectsLimit } = portfolioConfig;
  const requestUrl =
    `${GITHUB_API_BASE}/users/${githubUsername}/repos` +
    `?sort=updated&per_page=${projectsLimit}&type=owner`;

  const response = await fetch(requestUrl, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-backend",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("No repositories found");
  }

  let repos = data.filter((repo) => !repo.fork || data.length < 4);
  if (repos.length === 0) {
    repos = data;
  }

  return repos.slice(0, projectsLimit).map(normalizeRepo);
}

export async function getProjectsResponse() {
  try {
    const projects = await fetchRepositories();

    return {
      source: "github",
      projects,
    };
  } catch (error) {
    return {
      source: "fallback",
      projects: fallbackRepos,
      error: error.message,
    };
  }
}
