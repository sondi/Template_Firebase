'use strict';

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event){
	event.preventDefault();
	const name = document.getElementById('name').value;
	const tel = document.getElementById('tel').value;
	const email = document.getElementById('email').value;
	const company = document.getElementById('company').value;
	const message = document.getElementById('message').value;

	const params = {
		name,
		tel,
		email,
		company,
		message
	}
	console.log(params)
})