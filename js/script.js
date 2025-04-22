let cards = document.querySelector(".cards");
function getProducts(el) {
  let card = document.createElement("div");
  card.className = "card";

  let cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  let cardImg = document.createElement("img");
  cardImg.src = el.images[0];
  cardImg.alt = el.name;
  cardHeader.appendChild(cardImg);

  let cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";

  let cardFooterH2 = document.createElement("h2");
  let cardFooterText = document.createTextNode(`${el.name}`);
  cardFooterH2.appendChild(cardFooterText);

  let cardFooterP = document.createElement("p");
  cardFooterP.innerHTML = `<i> ${el.description} </i>`;

  let cardFooterBtn = document.createElement("button");
  cardFooterBtn.innerHTML = "<i> Add to card</i>";
  // cardFooter.append(cardFooterH2, cardFooterP, cardFooterBtn);
  cardFooter.prepend(cardFooterBtn);
  cardFooter.prepend(cardFooterP);
  cardFooter.prepend(cardFooterH2);

  card.append(cardHeader, cardFooter);
  return card;
}

products.map((el) => {
  let card = getProducts(el);
  cards.append(card);
});

let pr = products
  .filter((el) => {
    return el.discount > 0;
  })
  .slice(-4);
console.log(pr);
console.log(products.slice(-4));
