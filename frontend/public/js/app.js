/**
 * App Entry Point
 * ───────────────
 * Bootstraps all controllers and renders initial views.
 * This is the single entry point loaded by index.html.
 */

// ── Controllers ──
import { initThemeController } from "./controllers/ThemeController.js";
import { initNavController } from "./controllers/NavController.js";
import { initScrollReveal } from "./controllers/ScrollRevealController.js";
import { initProjectsController } from "./controllers/ProjectsController.js";

// ── Views ──
import { renderSkills } from "./views/SkillsView.js";

// ── Models ──
import { skills } from "./models/PortfolioData.js";

// ── Initialize everything ──
// Theme must init ASAP (before paint) to avoid flash
initThemeController();

// Nav & scroll controllers
initNavController();
initScrollReveal();

// Render static data
renderSkills("skillsGrid", skills);

// Fetch & render dynamic data
initProjectsController();
