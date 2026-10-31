(function () {
  "use strict";

  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    root.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
      });
    }

    // Mobile menu toggle
    const menuBtn = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", function () {
        const expanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", String(!expanded));
        navLinks.classList.toggle("is-open");
      });
    }

    // Auto year in footer
    const yearEl = document.getElementById("current-year");
    if (yearEl && !yearEl.textContent.trim()) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  });
})();

