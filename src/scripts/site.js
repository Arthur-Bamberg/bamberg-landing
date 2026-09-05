const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMobile = document.querySelector("[data-nav-mobile]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const onScroll = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

if (navToggle && navMobile) {
  const label = navToggle.querySelector(".sr-only");

  const setOpen = (open) => {
    navToggle.setAttribute("aria-expanded", String(open));
    navMobile.hidden = !open;
    if (label) label.textContent = open ? "Fechar menu" : "Abrir menu";
  };

  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setOpen(false);
    });
  });
}

