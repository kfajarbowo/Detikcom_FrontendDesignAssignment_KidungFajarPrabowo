const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar-custom');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
	navbg.classList.toggle('active');
});

//slider sponsor
let copy = document.querySelector('.sponsor-slide').cloneNode(true);
document.querySelector('.sponsor').appendChild(copy);

//filter section artikel
const filterButtons = document.querySelectorAll('#filter-buttons button');
const filterableCards = document.querySelectorAll('#filterable-cards .card');
// Function to filter cards based on filter buttons
const filterCards = e => {
	document.querySelector('#filter-buttons .active').classList.remove('active');
	e.target.classList.add('active');
	filterableCards.forEach(card => {
		// show the card if it matches the clicked filter or show all cards if "all" filter is clicked
		if (
			card.dataset.name === e.target.dataset.filter ||
			e.target.dataset.filter === 'all'
		) {
			return card.classList.replace('hide', 'show');
		}
		card.classList.add('hide');
	});
};
filterButtons.forEach(button => button.addEventListener('click', filterCards));
