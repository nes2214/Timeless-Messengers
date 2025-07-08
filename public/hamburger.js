function setupHamburgerMenu() {
  const btn = document.getElementById("hamburger-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) return;
  if (btn.dataset.listenerAttached === "true") return;
  btn.dataset.listenerAttached = "true";

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

document.addEventListener("DOMContentLoaded", setupHamburgerMenu);
document.addEventListener("astro:after-swap", setupHamburgerMenu);
