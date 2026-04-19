import http from "node:http";
import { routeRequest } from "./routes/router.js";

const port = Number(process.env.PORT || 8080);

const server = http.createServer(async (request, response) => {
  try {
    await routeRequest(request, response);
  } catch (error) {
    console.error("Unhandled backend error:", error);
    response.writeHead(500, {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    });
    response.end(JSON.stringify({ error: "Internal server error" }));
  }
});

server.listen(port, () => {
  console.log(`portfolio-backend listening on port ${port}`);
});
