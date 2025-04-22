// import { products } from "./products-data.js";

document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      tabBtns.forEach((b) => b.classList.remove("active"));

      setTimeout(() => {
        this.classList.add("active");
      }, 50);

      tabPanes.forEach((p) => {
        p.classList.remove("active");
        p.style.opacity = 0;
      });

      const tabId = this.getAttribute("data-tab");
      const activePane = document.getElementById(tabId);

      setTimeout(() => {
        activePane.classList.add("active");
        setTimeout(() => {
          activePane.style.opacity = 1;
        }, 50);
      }, 300);
    });
  });

  tabPanes.forEach((p) => {
    if (p.classList.contains("active")) {
      p.style.opacity = 1;
    } else {
      p.style.opacity = 0;
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const cardsContainers = document.querySelectorAll(".cards");

  if (cardsContainers.length === 0) {
    console.error("Error");
    return;
  }

  function createCard(product) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
      <div class="card-image">
        <img src="${product.images[0]}" alt="${product.description}" />
        <div class="heading-parent">
          <h6>${product.discount > 0 ? `-${product.discount}%` : ""}</h6>
        </div>
      </div>
      <div class="heart-parent">
        <input class="heart" id="toggle-heart-${product.id}" type="checkbox" />
        <label for="toggle-heart-${product.id}" aria-label="like">❤</label>
      </div>
      <div class="card-content">
        <div class="flexibling">
          <h3>${product.price} ₽</h3>
          <h4>${
            product.discount > 0
              ? `${(product.price * (1 + product.discount / 100)).toFixed(2)} ₽`
              : ""
          }</h4>
        </div>
        <div class="flexibling">
          <p>С картой</p>
          <p>Обычная</p>
        </div>
        <p>${product.description}</p>
        <img
          style="margin-top: 8px; margin-bottom: 8px"
          src="./assets/images/stars-group.svg"
          alt="Rating stars"
        />
        <button class="btn">В корзину</button>
      </div>
    `;

    return cardElement;
  }

  function renderCards(container, products) {
    container.innerHTML = "";
    products.forEach((product) => {
      const cardElement = createCard(product);
      container.appendChild(cardElement);
    });
  }

  const discountedProducts = products.filter((product) => product.discount > 0);
  const last4DiscountedProducts = discountedProducts.slice(-4);
  renderCards(cardsContainers[0], last4DiscountedProducts);

  const last4Products = products.slice(-4);
  renderCards(cardsContainers[1], last4Products);


  const topRatedProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  renderCards(cardsContainers[2], topRatedProducts);
});

document.addEventListener("DOMContentLoaded", function () {
  const articklesContainer = document.querySelector(".artickles");


  const artickles = [
    {
      title: "Оформите карту «Северяночка»",
      description: "И получайте бонусы при покупке в магазинах и на сайте",
      image: "./images/artickle.png",
    },
    {
      title: "Покупайте акционные товары",
      description: "И получайте вдвое больше бонусов",
      image: "./images/art.png",
    },
  ];

  
  artickles.forEach((artickle) => {
    const artickleElement = document.createElement("div");
    artickleElement.classList.add("artickle");

    artickleElement.innerHTML = `
      <div class="content">
        <h4>${artickle.title}</h4>
        <p>${artickle.description}</p>
      </div>
      <div class="img">
        <img src="${artickle.image}" alt="${artickle.title}" />
      </div>
    `;

    articklesContainer.appendChild(artickleElement);
  });
});




document.addEventListener("DOMContentLoaded", function () {

  const cardsData = [
    {
      image: "./images/c-1.png",
      date: "05.03.2021",
      title: "Режим использования масок и перчаток на территории магазинов",
      description:
        "Подробная информация о режимах использования масок и перчаток на территории магазинов 'ЛЕНТА'. Информация обновляется каждый будний день.",
      buttonText: "Подробнее",
    },
    {
      image: "./images/c-2.png",
      date: "06.03.2021",
      title: "Как выбрать свежие продукты в магазине",
      description:
        "Подробная информация о режимах использования масок и перчаток на территории магазинов 'ЛЕНТА'. Информация обновляется каждый будний день",
      buttonText: "Читать",
    },
    {
      image: "./images/c-3.png",
      date: "07.03.2021",
      title: "Режим использования масок и перчаток на территории магазинов",
      description:
        "Подробная информация о режимах использования масок и перчаток на территории магазинов 'ЛЕНТА'. Информация обновляется каждый будний день",
      buttonText: "Узнать больше",
    },
  ];


  const cardsContainer = document.querySelector(".carding .cards");

  cardsData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("biggest-card");

    cardElement.innerHTML = `
      <div class="card-img">
        <img src="${card.image}" alt="${card.title}" />
        <div class="biggest-content">
      </div>
        <h6>${card.date}</h6>
        <h4>${card.title}</h4>
        <p>${card.description}</p>
        <button><span>${card.buttonText}</span></button>
      </div>
    `;

    cardsContainer.appendChild(cardElement);
  });

  console.log("Cards added successfully:", cardsData);
});


