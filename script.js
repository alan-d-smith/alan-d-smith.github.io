const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const projectImages = window.PORTFOLIO_CONFIG?.projectImages ?? {};
const mobileNavigation = window.matchMedia("(max-width: 680px)");

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

function setMenuOpen(isOpen) {
  if (!menuButton || !navigation) {
    return;
  }

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "Close" : "Menu";
  navigation.classList.toggle("open", isOpen);
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (
    event.key !== "Escape" ||
    menuButton?.getAttribute("aria-expanded") !== "true"
  ) {
    return;
  }

  setMenuOpen(false);
  menuButton.focus();
});

mobileNavigation.addEventListener("change", () => setMenuOpen(false));

applyProjectImageConfiguration();

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
