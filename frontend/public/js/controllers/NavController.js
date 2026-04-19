/**
 * NavController (Controller)
 * ──────────────────────────
 * Handles mobile menu, active nav link highlighting, and navbar scroll effects.
 */

/**
 * Initializes the mobile menu toggle.
 */
function initMobileMenu() {
  const btn = document.getElementById("mobileToggle");
  const menu = document.getElementById("mobileMenu");

  if (!btn || !menu) {
    console.warn("NavController: Mobile menu elements not found");
    return;
  }

  let open = false;

  btn.addEventListener("click", () => {
    open = !open;
    btn.classList.toggle("active", open);
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
  });

  // Close menu when a link is clicked
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      open = false;
      btn.classList.remove("active");
      menu.classList.remove("open");
    });
  });
}

/**
 * Highlights the nav link corresponding to the currently visible section.
 */
function initActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function onScroll() {
    const scrollY = window.scrollY + 100;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
            link.style.color = "var(--accent)";
          } else {
            link.style.color = "";
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // Run on init
}

/**
 * Adjusts navbar border on scroll for depth effect.
 */
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 20) {
        navbar.style.borderBottomColor = "var(--border-strong)";
      } else {
        navbar.style.borderBottomColor = "var(--border)";
      }
    },
    { passive: true },
  );
}

/**
 * Initializes all navigation-related controllers.
 */
export function initNavController() {
  initMobileMenu();
  initActiveNavLink();
  initNavbarScroll();
}
