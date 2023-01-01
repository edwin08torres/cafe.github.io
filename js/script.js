const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const HamburgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCar = document.querySelector(".navbar-shopping-car");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productCard = document.querySelector(".product-card");
const productInfo = document.querySelector(".product-info-detail");
const productInfoClose = document.querySelector(".product-detail-close");
const productInfoDetail = document.querySelector(".product-info-detail");

menuEmail.addEventListener("click", toggleMenuDesktop);
HamburgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCar.addEventListener("click", toggleCarMenu);
// productInfoClose.addEventListener("click", closeInfoProduct);

// función de min-aside de login,etc
function toggleMenuDesktop() {
  const isAsideClose = aside.classList.contains("isactive");

  if (!isAsideClose) {
    aside.classList.add("isactive");
  }

  productInfo.classList.add("isactive");
  desktopMenu.classList.toggle("isactive");
}

// función de menu hamburguesa
function toggleMobileMenu() {
  const isAsideClose = aside.classList.contains("isactive");

  if (!isAsideClose) {
    aside.classList.add("isactive");
  }

  productInfo.classList.add("isactive");
  mobileMenu.classList.toggle("isactiveM");
}

// función de shopping car
function toggleCarMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("isactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("isactive");

  //   Para quitar un aside por otro podemos realizarlo de 2 maneras, la cuales son las siguientes:

  // 1.- utilizamos un condicional, donde hacemos la pregunta o la condición, de que si el mobile menu esta abierto
  // le add la clase 'isactiveM' que su función es cerrarla.
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("isactiveM");
  }

  // 2.- Esta es la segunda opción lo cual es de manera directa y optimizada donde solo mandamos a llamar un método
  // de ClassList que es el 'add', lo cual este agrega una clase a este elemento, y la clase que agrega es la que tiene las propiedades de ocultar
  // la interfaz.
  desktopMenu.classList.add("isactive");
  productInfo.classList.add("isactive");
  aside.classList.toggle("isactive");
}

function toggleInfoProduct() {
  productInfo.classList.remove("isactive");
  aside.classList.add("isactive");
  desktopMenu.classList.add("isactive");
}

function closeInfoProduct() {
  productInfo.classList.add("isactive");
}
const productList = [];
productList.push({
  name: "Cafe mokka",
  price: 85,
  image: "../img/rsz_jonathan-pielmayer-hdtwglz8ldc-unsplash.jpg",
  descripción:
    "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});
productList.push({
  name: "Café capuccino",
  price: 120,
  image: "../img/rsz_mike-kenneally-zlwdjoktua8-unsplash.jpg",
  descripción:
    "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});
productList.push({
  name: "Expresso café",
  price: 110,
  image: "../img/blog-1.jpeg",
});
productList.push({
  name: "Cafe mokka",
  price: 85,
  image: "../img/rsz_jonathan-pielmayer-hdtwglz8ldc-unsplash.jpg",
});
productList.push({
  name: "Café capuccino",
  price: 120,
  image: "../img/rsz_mike-kenneally-zlwdjoktua8-unsplash.jpg",
});
productList.push({
  name: "Expresso café",
  price: 110,
  image: "../img/blog-1.jpeg",
});

// Productos en el home
for (const product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);
  productImg.addEventListener("click", toggleInfoProduct);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  productInfo.addEventListener("click", toggleInfoProduct);

  const productDetalle = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerHTML = "$" + product.price;
  const productName = document.createElement("p");
  productName.innerHTML = product.name;

  // Con 'appenChild', solo me deja insertar un elemento a la vez
  // productDetalle.appendChild(productPrice);
  // productDetalle.appendChild(productName);

  // Mientras con append puedo insertar más de uno
  productDetalle.append(productPrice, productName);

  const productInfoFigure = document.createElement("figure");
  const productImgCar = document.createElement("img");

  productImgCar.setAttribute("src", "../img/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCar);

  productInfo.append(productDetalle, productInfoFigure);

  productCard.append(productImg, productInfo);

  cardsContainer.appendChild(productCard);
}

const productListAside = [];
productListAside.push({
  name: "Cafe mokka",
  price: 85,
  image: "../img/rsz_jonathan-pielmayer-hdtwglz8ldc-unsplash.jpg",
  descripción:
    "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

// Productos en el aside
for (const product of productListAside) {
  const productDetailClose = document.createElement("div");
  productDetailClose.classList.add("product-detail-close");
  productDetailClose.addEventListener('click', closeInfoProduct)
  const iconoExit = document.createElement("i");
  iconoExit.classList.add("close", 'fa-solid', 'fa-xmark');

  const imgProduct = document.createElement("img");
  imgProduct.classList.add("bike");
  imgProduct.setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  //-----------------------------------------------------------------//
  const productPrice = document.createElement("p");
  productPrice.innerHTML = "$" + product.price;
  const productName = document.createElement("p");
  productName.innerHTML = product.name;
  const productDescripcion = document.createElement("p");
  productDescripcion.innerHTML = product.descripción;
  const buttonAddCar = document.createElement("button");
  buttonAddCar.append("Add to cart");
  buttonAddCar.classList.add("primary-button", "add-to-cart-button");
  productInfo.append(
    productPrice,
    productName,
    productDescripcion,
    buttonAddCar
  );
  //-----------------------------------------------------------------//

  const imgAddCar = document.createElement("img");
  imgAddCar.setAttribute("src", "../img/bt_add_to_cart.svg");

  buttonAddCar.appendChild(imgAddCar);
  //-----------------------------------------------------------------//

  productDetailClose.appendChild(iconoExit);

  //-----------------------------------------------------------------//

  productInfoDetail.append(productDetailClose, imgProduct, productInfo);
}
