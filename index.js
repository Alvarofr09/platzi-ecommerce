const login = document.querySelector(".login");
const register = document.querySelector(".register");
const urlCreateUser = "https://api.escuelajs.co/api/v1/users/";
const urlAuthUser = "https://api.escuelajs.co/api/v1/auth/login";

login.addEventListener("submit", handleLoginSubmit);
register.addEventListener("submit", handleRegisterSubmit);

async function handleLoginSubmit(e) {
	try {
		e.preventDefault();

		const formData = Object.fromEntries(new FormData(this));
		console.log(formData);
		const user = {
			email: formData.email,
			password: formData.password,
		};

		const response = await fetch(urlAuthUser, {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				"Content-type": "application/json",
			},
		});

		console.log(response.status);
		if (response.status >= 200 && response.status <= 300) {
			document.location.href = "../categories/index.html";
		} else {
			this.reset();

			const messageError = document.querySelector(".error");
			if (!messageError) {
				this.insertAdjacentHTML(
					"beforeend",
					`
            <span class="error">Tus datos son erroneos</span>
            `
				);
			}
		}
	} catch (err) {
		console.log(err);
	}
}

async function handleRegisterSubmit(e) {
	try {
		e.preventDefault();

		const formData = Object.fromEntries(new FormData(this));
		console.log(formData);

		const user = {
			name: formData.nombre,
			email: formData.email,
			password: formData.password,
			avatar:
				"https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg",
		};

		const response = await fetch(urlCreateUser, {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				"Content-type": "application/json",
			},
		});

		console.log(response.status);
		if (response.status >= 200 && response.status <= 300) {
			alert("Usuario creado a la perfeccion");
			this.reset();

			const messageError = document.querySelector(".error");
			if (messageError) messageError.remove();
			alert("Te has registrado a la perfeccion");
		} else {
			const messageError = document.querySelector(".error");
			if (!messageError) {
				this.insertAdjacentHTML(
					"beforeend",
					`
            <span class="error">Tus datos son erroneos</span>
            `
				);
			}
		}
	} catch (error) {
		console.log(error);
	}
}
