const urlCategories = "https://api.escuelajs.co/api/v1/categories";
const urlUser = "https://api.escuelajs.co/api/v1/users/1";

export async function getData(url) {
	const response = await fetch(url);
	const data = await response.json();

	return data;
}

export async function showListCategories(lista) {
	const categories = await getData(urlCategories);

	for (let i = 0; i < categories.length; i++) {
		const category = categories[i];

		const link = document.createElement("a");
		link.href = `../products/index.html?categoryId=${category.id}`;

		const li = document.createElement("li");
		li.classList.add("categoria");
		li.textContent = category.name;

		link.append(li);

		lista.append(link);
	}
}

export async function showProfile() {
	document.location.href = "../profile/index.hmtl";

	const user = await getData(urlUser);

	console.log(user);
}
