window.addEventListener('DOMContentLoaded', () => {

	// API link
	const BASE_URL = 'http://localhost:3000';

	const someUserBtn = document.querySelector('#userBtn');
	someUserBtn.addEventListener('click', async ()=> {
	
		const user_obj = {
			name: nameField.value,
			city: cityField.value,
			avatar: avatarField.value, 
			email: emailField.value,
			speciality: specialityField.value,
			status: Field.value
		}

		const userId = 1;
	
		fetch(`${BASE_URL}/users/`)
			.then( (resp) => resp.json() )
			.then( (data) => console.log('users', data);

			console.log('user', user_obj);
		}
	});
)};
