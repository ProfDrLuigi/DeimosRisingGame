/* Bootstrap enhances image dialogs and mobile navigation; all copy is English. */
(() => {
  "use strict";
  const images = {
    gameplay: { file: "gameplay.png", title: "Under the canopy", alt: "A gold player ship in the jungle, a gun turret, and yellow projectiles in the macOS port." },
    coast: { file: "coast.png", title: "Troubled waters", alt: "A green ship fires at enemy aircraft above a rocky river landscape." },
    canyon: { file: "canyon.png", title: "Between rock and fire", alt: "A gold ship flies between sandstone cliffs past a gun emplacement." }
  };
  document.querySelector("#image-modal").addEventListener("show.bs.modal", event => {
    const selected = images[event.relatedTarget?.dataset.image];
    if (!selected) return;
    const image = document.querySelector("#modal-image");
    image.src = "assets/images/" + selected.file;
    image.alt = selected.alt;
    document.querySelector("#image-title").textContent = selected.title;
  });
  document.querySelectorAll("#navigation a").forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.querySelector("#navigation");
      if (window.innerWidth < 992 && window.bootstrap && nav.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false }).hide();
      }
    });
  });
})();
