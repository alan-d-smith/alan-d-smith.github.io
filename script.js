const projectImages = window.PORTFOLIO_CONFIG?.projectImages ?? {};

function applyProjectImageConfiguration() {
  document.querySelectorAll("[data-project-image]").forEach((image) => {
    const imageKey = image.dataset.projectImage;
    const configuration = projectImages[imageKey];

    if (!configuration?.src) {
      return;
    }

    image.src = configuration.src;
    image.alt = configuration.alt ?? "";
    image.style.setProperty("--image-fit", configuration.fit ?? "contain");
    image.style.setProperty(
      "--image-position",
      configuration.position ?? "center",
    );
  });
}

// Moves each project tile's spotlight to the pointer. The CSS centres it without JavaScript.
function trackTileSpotlights() {
  document.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("pointermove", (event) => {
      const bounds = tile.getBoundingClientRect();
      tile.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
      tile.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
    });
  });
}

applyProjectImageConfiguration();
trackTileSpotlights();

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
