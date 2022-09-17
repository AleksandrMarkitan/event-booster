const openModalTeam = document.querySelector('.js-open-team-modal');
const modalTeam = document.querySelector('[data-modal-team]');
const closeTeam = document.querySelector('[data-close-team]');

const modal = document.querySelector('[data-modal]');
const closeModal = document.querySelector('[data-close]');
const galleryCard = document.querySelector('.gallery__card')


openModalTeam.addEventListener('click', addHiddenClassToTeam);
closeTeam.addEventListener('click', addHiddenClassToTeam);

function addHiddenClassToTeam() {
	modalTeam.classList.toggle("visually-hidden");
}

galleryCard.addEventListener('click', addHiddenClassToModal);
closeModal.addEventListener('click', addHiddenClassToModal);

function addHiddenClassToModal() {
	modal.classList.toggle("visually-hidden");
}
