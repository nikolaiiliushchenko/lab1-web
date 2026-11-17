// 1. Масив даних про країни світу (12 об'єктів у 5 регіонах)
const items = [
  {
    id: 1,
    title: "Україна",
    capital: "Київ",
    category: "Європа",
    population: 38000000,
    area: "603 628 км²",
    currency: "Гривня (UAH)",
    language: "Українська",
    image: "https://flagcdn.com/w640/ua.png"
  },
  {
    id: 2,
    title: "Франція",
    capital: "Париж",
    category: "Європа",
    population: 68000000,
    area: "551 695 км²",
    currency: "Євро (EUR)",
    language: "Французька",
    image: "https://flagcdn.com/w640/fr.png"
  },
  {
    id: 3,
    title: "Німеччина",
    capital: "Берлін",
    category: "Європа",
    population: 84400000,
    area: "357 588 км²",
    currency: "Євро (EUR)",
    language: "Німецька",
    image: "https://flagcdn.com/w640/de.png"
  },
  {
    id: 4,
    title: "Велика Британія",
    capital: "Лондон",
    category: "Європа",
    population: 67700000,
    area: "242 495 км²",
    currency: "Фунт стерлінгів (GBP)",
    language: "Англійська",
    image: "https://flagcdn.com/w640/gb.png"
  },
  {
    id: 5,
    title: "Японія",
    capital: "Токіо",
    category: "Азія",
    population: 124500000,
    area: "377 975 км²",
    currency: "Єна (JPY)",
    language: "Японська",
    image: "https://flagcdn.com/w640/jp.png"
  },
  {
    id: 6,
    title: "Південна Корея",
    capital: "Сеул",
    category: "Азія",
    population: 51700000,
    area: "100 210 км²",
    currency: "Вона (KRW)",
    language: "Корейська",
    image: "https://flagcdn.com/w640/kr.png"
  },
  {
    id: 7,
    title: "Індія",
    capital: "Нью-Делі",
    category: "Азія",
    population: 1428000000,
    area: "3 287 263 км²",
    currency: "Індійська рупія (INR)",
    language: "Гінді, Англійська",
    image: "https://flagcdn.com/w640/in.png"
  },
  {
    id: 8,
    title: "США",
    capital: "Вашингтон",
    category: "Америка",
    population: 334900000,
    area: "9 833 520 км²",
    currency: "Долар США (USD)",
    language: "Англійська",
    image: "https://flagcdn.com/w640/us.png"
  },
  {
    id: 9,
    title: "Канада",
    capital: "Оттава",
    category: "Америка",
    population: 40100000,
    area: "9 984 670 км²",
    currency: "Канадський долар (CAD)",
    language: "Англійська, Французька",
    image: "https://flagcdn.com/w640/ca.png"
  },
  {
    id: 10,
    title: "Бразилія",
    capital: "Бразиліа",
    category: "Америка",
    population: 203000000,
    area: "8 515 767 км²",
    currency: "Бразильський реал (BRL)",
    language: "Португальська",
    image: "https://flagcdn.com/w640/br.png"
  },
  {
    id: 11,
    title: "Єгипет",
    capital: "Каїр",
    category: "Африка",
    population: 112700000,
    area: "1 010 408 км²",
    currency: "Єгипетський фунт (EGP)",
    language: "Арабська",
    image: "https://flagcdn.com/w640/eg.png"
  },
  {
    id: 12,
    title: "Австралія",
    capital: "Канберра",
    category: "Океанія",
    population: 26600000,
    area: "7 692 024 км²",
    currency: "Австралійський долар (AUD)",
    language: "Англійська",
    image: "https://flagcdn.com/w640/au.png"
  }
];

// 2. Отримання елементів DOM
const grid = document.querySelector("#item-grid");
const searchInput = document.querySelector("#item-search");
const categorySelect = document.querySelector("#category-filter");
const sortSelect = document.querySelector("#sort-select");
const resultsCount = document.querySelector("#results-count");
const emptyMessage = document.querySelector("#empty-message");

// Форматування числа населення з пробілами (наприклад: 38 000 000)
function formatPopulation(value) {
  return value.toLocaleString("uk-UA");
}

// 3. Створення HTML-шаблону картки (F1 — основні дані, F3 — детальна інформація)
function createCard(item) {
  return `
    <article class="card catalog-card" data-id="${item.id}">
      <img class="catalog-card__image" src="${item.image}" alt="Прапор країни ${item.title}">
      <div class="catalog-card__content">
        <p class="catalog-card__category">Регіон: ${item.category}</p>
        <h3 class="card-title">${item.title}</h3>
        <p><strong>Столиця:</strong> ${item.capital}</p>
        <p><strong>Населення:</strong> ${formatPopulation(item.population)} осіб</p>

        <button class="button card-details-button" type="button" aria-expanded="false" aria-controls="details-${item.id}">
          Детальніше
        </button>

        <div id="details-${item.id}" class="extra-details is-hidden">
          <p><strong>Столиця:</strong> ${item.capital}</p>
          <p><strong>Регіон:</strong> ${item.category}</p>
          <p><strong>Населення:</strong> ${formatPopulation(item.population)} осіб</p>
          <p><strong>Площа:</strong> ${item.area}</p>
          <p><strong>Валюта:</strong> ${item.currency}</p>
          <p><strong>Мова:</strong> ${item.language}</p>
        </div>
      </div>
    </article>
  `;
}

// 4. Рендеринг списку карток у DOM (F1, F2)
function renderItems(itemsToRender) {
  grid.innerHTML = itemsToRender.map(createCard).join("");
  resultsCount.textContent = `Знайдено країн: ${itemsToRender.length}`;
  emptyMessage.hidden = itemsToRender.length !== 0;
}

renderItems(items);

// 5. Спільна фільтрація за пошуком і регіоном (F2) та сортування (F4)
function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;
  const sortMode = sortSelect.value;

  const filteredItems = items.filter((item) => {
    const searchableText = `${item.title} ${item.capital}`.toLowerCase();
    const matchesText = searchableText.includes(query);
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;

    return matchesText && matchesCategory;
  });

  // Сортування відфільтрованого списку за назвою або населенням (F4)
  const sortedItems = [...filteredItems];

  if (sortMode === "name-asc") {
    sortedItems.sort((a, b) => a.title.localeCompare(b.title, "uk"));
  } else if (sortMode === "name-desc") {
    sortedItems.sort((a, b) => b.title.localeCompare(a.title, "uk"));
  } else if (sortMode === "pop-desc") {
    sortedItems.sort((a, b) => b.population - a.population);
  } else if (sortMode === "pop-asc") {
    sortedItems.sort((a, b) => a.population - b.population);
  }

  renderItems(sortedItems);
}

searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

// 6. Відкриття детальної інформації на картці країни (F3)
grid.addEventListener("click", (event) => {
  const button = event.target.closest(".card-details-button");
  if (!button) return;

  const card = button.closest(".catalog-card");
  const detailsBlock = card.querySelector(".extra-details");

  const isHidden = detailsBlock.classList.toggle("is-hidden");
  button.textContent = isHidden ? "Детальніше" : "Приховати деталі";
  button.setAttribute("aria-expanded", String(!isHidden));
});

// 7. Кнопка «Показати більше» у секції «Про наш довідник»
const aboutToggle = document.querySelector("#about-toggle");
const aboutDetails = document.querySelector("#about-extra-details");

if (aboutToggle && aboutDetails) {
  aboutToggle.addEventListener("click", () => {
    const isHidden = aboutDetails.classList.toggle("is-hidden");
    aboutToggle.textContent = isHidden ? "Показати більше" : "Приховати";
    aboutToggle.setAttribute("aria-expanded", String(!isHidden));
  });
}