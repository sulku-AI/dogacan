// Footer year
document.getElementById("yr").textContent = new Date().getFullYear();

// Tap anywhere in the hero to drop a little heart (playful touch from the reference design)
(function () {
  const hero = document.getElementById("top");
  if (!hero) return;
  hero.addEventListener("click", (e) => {
    if (e.target.closest("a, button")) return;
    const h = document.createElement("span");
    h.textContent = "♥";
    h.style.cssText =
      `position:absolute;left:${e.offsetX}px;top:${e.offsetY}px;color:#E53E3E;` +
      "font-size:26px;pointer-events:none;z-index:5;transition:all 1s ease;opacity:1;";
    hero.appendChild(h);
    requestAnimationFrame(() => {
      h.style.transform = "translateY(-60px)";
      h.style.opacity = "0";
    });
    setTimeout(() => h.remove(), 1100);
  });
})();
