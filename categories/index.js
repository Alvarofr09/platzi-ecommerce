import { getData, showListCategories, showProfile } from "../utils/index.js";
const urlCategories = "https://api.escuelajs.co/api/v1/categories";
const template = document.querySelector(".card--template");
const container = document.querySelector(".container");
const lista = document.querySelector(".lista-categorias");

async function showData() {
	const categories = await getData(urlCategories);

	for (let i = 0; i < categories.length; i++) {
		const category = categories[i];

		const templateCard = document.importNode(template.content, true);

		const imagen = templateCard.querySelector(".card-image");
		const cardTitle = templateCard.querySelector(".card-title");
		const link = templateCard.querySelector(".card-link");
		// const editButton = templateCard.querySelector(".card-edit");
		// const deleteButton = templateCard.querySelector(".card-delete");

		// editButton.addEventListener("click", handleEdit);

		// deleteButton.addEventListener("click", handleDelete);

		imagen.src = category.image;
		cardTitle.textContent = category.name;
		link.href = `../products/index.html?categoryId=${category.id}`;

		container.append(templateCard);
	}
}

showProfile();
showListCategories(lista);
showData();
