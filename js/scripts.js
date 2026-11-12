// Крок 2. Масив даних (8 фільмів у 3 категоріях)
const items = [
  {
    id: 1,
    title: "Дюна: Частина друга",
    category: "фантастика",
    description: "Жанр: наукова фантастика, пригоди. Продовження епічної саги про пустельну планету Арракіс.",
    image: "https://upload.wikimedia.org/wikipedia/uk/3/39/%D0%94%D1%8E%D0%BD%D0%B0_%D0%A7%D0%B0%D1%81%D1%82%D0%B8%D0%BD%D0%B0_%D0%B4%D1%80%D1%83%D0%B3%D0%B0.jpg?utm_source=uk.wikipedia.org&utm_campaign=index&utm_content=original"
  },
  {
    id: 2,
    title: "Мисливці на привидів: Крижана імперія",
    category: "комедії",
    description: "Жанр: комедія, фентезі. Нове покоління героїв рятує світ від льодовикового апокаліпсису.",
    image: "https://thumb.wikimedia.org/wikipedia/uk/thumb/e/ed/%D0%9C%D0%B8%D1%81%D0%BB%D0%B8%D0%B2%D1%86%D1%96_%D0%BD%D0%B0_%D0%BF%D1%80%D0%B8%D0%B2%D0%B8%D0%B4%D1%96%D0%B2%2C_%D0%9A%D1%80%D0%B8%D0%B6%D0%B0%D0%BD%D0%B0_%D1%96%D0%BC%D0%BF%D0%B5%D1%80%D1%96%D1%8F%2C_2024%2C_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/250px-%D0%9C%D0%B8%D1%81%D0%BB%D0%B8%D0%B2%D1%86%D1%96_%D0%BD%D0%B0_%D0%BF%D1%80%D0%B8%D0%B2%D0%B8%D0%B4%D1%96%D0%B2%2C_%D0%9A%D1%80%D0%B8%D0%B6%D0%B0%D0%BD%D0%B0_%D1%96%D0%BC%D0%BF%D0%B5%D1%80%D1%96%D1%8F%2C_2024%2C_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
  },
  {
    id: 3,
    title: "Ґодзілла та Конґ: Нова імперія",
    category: "фантастика",
    description: "Жанр: фантастика, бойовик. Епічна битва прадавніх титанів проти нової підземної загрози.",
    image: "https://thumb.wikimedia.org/wikipedia/uk/thumb/7/78/%D2%90%D0%BE%D0%B4%D0%B7%D1%96%D0%BB%D0%BB%D0%B0_%D1%82%D0%B0_%D0%9A%D0%BE%D0%BD%D0%B3_%D0%9D%D0%BE%D0%B2%D0%B0_%D1%96%D0%BC%D0%BF%D0%B5%D1%80%D1%96%D1%8F.jpg/250px-%D2%90%D0%BE%D0%B4%D0%B7%D1%96%D0%BB%D0%BB%D0%B0_%D1%82%D0%B0_%D0%9A%D0%BE%D0%BD%D0%B3_%D0%9D%D0%BE%D0%B2%D0%B0_%D1%96%D0%BC%D0%BF%D0%B5%D1%80%D1%96%D1%8F.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
  },
  {
    id: 4,
    title: "Оппенгеймер",
    category: "драми",
    description: "Жанр: біографічна драма, історія. Історія створення атомної бомби фізиком Робертом Оппенгеймером.",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg"
  },
  {
    id: 5,
    title: "Інтерстеллар",
    category: "фантастика",
    description: "Жанр: наукова фантастика, драма. Подорож крізь червоточину в пошуках нового дому для людства.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  },
  {
    id: 6,
    title: "Готель «Гранд Будапешт»",
    category: "комедії",
    description: "Жанр: пригодницька комедія. Кумедні пригоди легендарного консьєржа Густава та портьє Зеро Мустафи.",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Grand_Budapest_Hotel.png"
  },
  {
    id: 7,
    title: "Людина-павук: Крізь Всесвіт",
    category: "комедії",
    description: "Жанр: анімація, комедія, пригоди. Майлз Моралес вирушає у подорож мультивсесвітом героїв.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg"
  },
  {
    id: 8,
    title: "Зелена миля",
    category: "драми",
    description: "Жанр: драма. Зворушлива історія наглядача в'язниці Пола Еджкомба та незвичайного в'язня Джона Коффі.",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg"
  }
];

// Крок 3. Отримання елементів DOM
const grid = document.querySelector("#item-grid");
const searchInput = document.querySelector("#item-search");
const categorySelect = document.querySelector("#category-filter");
const resultsCount = document.querySelector("#results-count");
const emptyMessage = document.querySelector("#empty-message");

// Крок 4. Створення шаблону картки
function createCard(item) {
  return `
    <article class="card catalog-card" data-id="${item.id}">
      <img class="catalog-card__image" src="${item.image}"
           alt="${item.title}">
      <div class="catalog-card__content">
        <p class="catalog-card__category">Категорія: ${item.category}</p>
        <h3 class="card-title">${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `;
}

// Крок 5. Реалізація рендерингу
function renderItems(itemsToRender) {
  grid.innerHTML = itemsToRender.map(createCard).join("");
  resultsCount.textContent = `Знайдено: ${itemsToRender.length}`;
  emptyMessage.hidden = itemsToRender.length !== 0;
}

renderItems(items);

// Крок 6. Спільна фільтрація за пошуком і категорією
function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;

  const filteredItems = items.filter((item) => {
    const searchableText =
      `${item.title} ${item.description}`.toLowerCase();
    const matchesText = searchableText.includes(query);
    const matchesCategory = selectedCategory === "all" ||
      item.category === selectedCategory;

    return matchesText && matchesCategory;
  });

  renderItems(filteredItems);
}

searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);

// показ і приховування блоку "Про кінотеатр" лаб5
const toggleButton = document.querySelector(".details-toggle");
const details = document.querySelector("#extra-details");

if (toggleButton && details) {
  toggleButton.addEventListener("click", () => {
    const isHidden = details.classList.toggle("is-hidden");
    toggleButton.textContent = isHidden
      ? "Показати більше"
      : "Приховати";
    toggleButton.setAttribute("aria-expanded", String(!isHidden));
  });
}