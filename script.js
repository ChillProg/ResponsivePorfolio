const toggleButton = document.getElementById('toggle-button');
const navbarLinks = document.getElementById('navbar-links');
const closeButton = document.getElementById('close-button');
const body = document.body;

function closeNavbar() {
	navbarLinks.classList.remove('active');
	body.classList.remove('no-scroll');
}

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
	body.classList.toggle('no-scroll')
});

closeButton.addEventListener('click', closeNavbar);

window.addEventListener('resize', () => {
	if (window.innerWidth > 880) {
		closeNavbar();
	}
});

const navbarLinksItems = document.querySelectorAll('.navbar-links a');
navbarLinksItems.forEach(link => {
	link.addEventListener('click', closeNavbar);
});