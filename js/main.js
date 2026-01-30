// ===== Smooth scrolling (only for same-page anchors) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ===== Scroll-to-top button =====
const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) scrollBtn.style.display = "block";
  else scrollBtn.style.display = "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Theme toggle with persistence =====
const toggleBtn = document.getElementById("themeToggle");

function setTheme(mode) {
  // mode: "dark" | "light"
  if (mode === "light") {
    document.body.classList.add("light");
    toggleBtn.querySelector(".icon").textContent = "☀️";
    toggleBtn.querySelector(".label").textContent = "Light";
  } else {
    document.body.classList.remove("light");
    toggleBtn.querySelector(".icon").textContent = "🌙";
    toggleBtn.querySelector(".label").textContent = "Dark";
  }
  localStorage.setItem("theme", mode);
}

// Initialize theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") {
  setTheme(savedTheme);
} else {
  // Default to system preference
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  setTheme(prefersLight ? "light" : "dark");
}

toggleBtn.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});

// ===== Fade-in on scroll =====
const fadeSections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);

fadeSections.forEach(section => observer.observe(section));

console.log("✅ Portfolio UI refreshed (modern) + Theme persistence loaded!");
