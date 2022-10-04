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
	
		fetch(`${BASE_URL}/users/${userId}`, {
			method: 'delete',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(user_obj)
		});

		console.log('user', user_obj);
	});
)};
