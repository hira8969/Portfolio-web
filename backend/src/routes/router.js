import { getProjectsResponse } from "../services/githubService.js";
import { sendJson, sendNoContent } from "../utils/http.js";

export async function routeRequest(request, response) {
  const url = new URL(request.url, "http://localhost");

  if (request.method === "OPTIONS") {
    sendNoContent(response);
    return;
  }

  if (request.method === "GET" && url.pathname === "/health") {
    sendJson(response, 200, {
      status: "ok",
      service: "portfolio-backend",
      timestamp: new Date().toISOString(),
    });
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/projects") {
    const data = await getProjectsResponse();
    sendJson(response, 200, data);
    return;
  }

  sendJson(response, 404, {
    error: "Not found",
    path: url.pathname,
  });
}
