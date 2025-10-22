// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Back-to-top button
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.id = "scrollTop";
  document.body.appendChild(scrollBtn);
  
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "30px";
  scrollBtn.style.right = "30px";
  scrollBtn.style.padding = "10px 14px";
  scrollBtn.style.fontSize = "18px";
  scrollBtn.style.borderRadius = "50%";
  scrollBtn.style.background = "#0058ff";
  scrollBtn.style.color = "white";
  scrollBtn.style.border = "none";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.display = "none";
  scrollBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  scrollBtn.title = "Back to top";
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) scrollBtn.style.display = "block";
    else scrollBtn.style.display = "none";
  });
  
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Dark Mode Toggle
  const toggleBtn = document.getElementById("themeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
  
  // Fade-in Animation on Scroll
  const fadeSections = document.querySelectorAll(".fade-section");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });
  
  fadeSections.forEach(section => observer.observe(section));
  
  console.log("✅ Portfolio with Dark Mode & Animations Loaded Successfully!");
  