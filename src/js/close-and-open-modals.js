const openModalTeam = document.querySelector('.js-open-team-modal');
const modalTeam = document.querySelector('[data-modal-team]');
const closeTeam = document.querySelector('[data-close-team]');
const backdropModalTeam = document.querySelector('[data-modal-team]')

const modal = document.querySelector('[data-modal]');
const closeModal = document.querySelector('[data-close]');
const galleryCard = document.querySelector('.js-gallery-card')
const backdropModal = document.querySelector('[data-modal]');


openModalTeam.addEventListener('click', addHiddenClassToTeam);
closeTeam.addEventListener('click', addHiddenClassToTeam);
backdropModalTeam.addEventListener('click', addHiddenClassToTeam);

galleryCard.addEventListener('click', addHiddenClassToModal);
closeModal.addEventListener('click', addHiddenClassToModal);
backdropModal.addEventListener('click', addHiddenClassToModal)

function addHiddenClassToTeam() {
	modalTeam.classList.toggle("visually-hidden");
	closeByKeybord(modalTeam)
}

function addHiddenClassToModal(e) {
	e.preventDefault();
	modal.classList.toggle("visually-hidden");
	closeByKeybord(modal)
}

function closeByKeybord(value) {
	document.addEventListener("keydown", (e) => {
		if (e.code == "Escape") {
			value.classList.toggle("visually-hidden");
		}
	}, { once: true });
}