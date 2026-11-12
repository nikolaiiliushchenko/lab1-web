const toggleButton = document.querySelector(".details-toggle");
const details = document.querySelector("#extra-details");

toggleButton.addEventListener("click", () => {
  const isHidden = details.classList.toggle("is-hidden");
  toggleButton.textContent = isHidden
    ? "Показати більше"
    : "Приховати";
  toggleButton.setAttribute("aria-expanded", String(!isHidden));
});

const favoriteButton = document.querySelector(".favorite-button");

favoriteButton.addEventListener("click", () => {
  const isActive = favoriteButton.classList.toggle("is-active");
  favoriteButton.textContent = isActive
    ? "В обраному"
    : "Додати в обране";

  favoriteButton.setAttribute("aria-pressed", String(isActive));
});