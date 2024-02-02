import { getData, showListCategories, showProfile } from "../utils/index.js";
const container = document.querySelector(".container");
const template = document.querySelector(".card--template");
const urlProducts = "https://api.escuelajs.co/api/v1/products?offset=0&limit=";
const url = new URL(document.location.href);
const categoryId = url.searchParams.get("categoryId");
const limit = 10;
const lista = document.querySelector(".lista-categorias");

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

			// Acortar el título a 10 palabras máximo
			const titleWords = product.title.split(" ");
			const shortenedTitle = titleWords.slice(0, 1).join(" ");
			name.textContent = shortenedTitle + (titleWords.length > 2 ? "..." : "");

			price.textContent = product.price + "€";

			// Acortar la descripción a 10 palabras máximo
			const descriptionWords = product.description.split(" ");
			const shortenedDescription = descriptionWords.slice(0, 8).join(" ");
			description.textContent =
				shortenedDescription + (descriptionWords.length > 8 ? "..." : "");

			container.appendChild(templateCard);
		}
	} catch (err) {
		console.log(err);
	}
}

showProfile();
showListCategories(lista);
showData(limit, categoryId);
