const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const openNavModal = document.querySelectorAll('[data-modal-nav]')
const closeNavModal = document.querySelectorAll('[data-close-nav]')

openNavModal.forEach(b => {
    b.addEventListener('click', () => {
        const nav = document.querySelector(b.dataset.modalNav)
        openNav(nav)
    })
})

closeNavModal.forEach(b => {
    b.addEventListener('click', () => {
        const nav = b.closest('#nav-modal')
        closeNav(nav)
    })
})

function openNav(nav) {
    if (nav == null) return
    nav.classList.add('active')
}

function closeNav(nav) {
    if (nav == null) return
    nav.classList.remove('active')
}

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})