import { getData, showListCategories, showProfile } from "../utils/index.js";
const container = document.querySelector(".container");
const template = document.querySelector(".card--template");
const urlProducts = "https://api.escuelajs.co/api/v1/products?offset=0&limit=";
const url = new URL(document.location.href);
const categoryId = url.searchParams.get("categoryId");
const limit = 10;
const lista = document.querySelector(".lista-categorias");
const buttonProfile = document.querySelector(".boton-profile");

console.log(categoryId);

async function showData(limit, category) {
	try {
		const products = await getData(
			urlProducts + limit + "&categoryId=" + category
		);

		for (let i = 0; i < products.length; i++) {
			const product = products[i];
			const templateCard = document.importNode(template.content, true);

			const imagen = templateCard.querySelector(".product-image");
			const name = templateCard.querySelector(".product-name");
			const price = templateCard.querySelector(".product-price");
			const description = templateCard.querySelector(".product-description");

			imagen.src = product.images[1];

			name.textContent = product.title;
			price.textContent = product.price + "€";
			description.textContent = product.description;

			container.appendChild(templateCard);
		}
	} catch (err) {
		console.log(err);
	}
}

buttonProfile.addEventListener("click", showProfile);

showListCategories(lista);
showData(limit, categoryId);
