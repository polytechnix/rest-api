window.addEventListener('DOMContentLoaded', () => {

	const posts = document.querySelector('#getPosts');
	const resultField = document.querySelector('#viewRenderResult');

	// API link
	const BASE_URL = 'http://localhost:3000';

	posts.addEventListener('click', () => { 
		const result = await getPostsData();

		result.forEach((elemnt) => {
			resultField.innerHTML += renderData(elemnt);
		})
	});

	const getPostsData = async () => {
		const response = await fetch(`${BASE_URL}/users`);
		return await response.json();
	};

	const renderData = (props) => { 
		return `
			<ul>
				<li>${props.name}</li>
			</ul>
		`;
	}

};