export default function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  if (window.location.hash !== `#${id}`) {
    window.history.pushState(null, "", `#${id}`);
  }

  const headerHeight = document.querySelector("header")?.getBoundingClientRect().height || 0;
  const top = Math.max(0, section.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
}
