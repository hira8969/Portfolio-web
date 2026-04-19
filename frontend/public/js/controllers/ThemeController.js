/**
 * ThemeController (Controller)
 * ────────────────────────────
 * Manages dark/light theme toggling with localStorage persistence.
 */

const sunIcon =
  '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke-width="2" stroke-linecap="round"/>';
const moonIcon =
  '<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>';

/**
 * Initializes the theme toggle controller.
 * Reads saved preference from localStorage or system preference.
 */
export function initThemeController() {
  const html = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  if (!toggle || !icon) {
    console.warn("ThemeController: Toggle or icon element not found");
    return;
  }

  function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    icon.innerHTML = theme === "dark" ? sunIcon : moonIcon;
  }

  // Apply saved or system-preferred theme
  const saved = localStorage.getItem("theme");
  if (saved) {
    setTheme(saved);
  } else {
    setTheme(
      window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark",
    );
  }

  // Toggle on click
  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}
