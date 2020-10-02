const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const openNavModal = document.querySelectorAll('[data-modal-nav]')
const closeNavModal = document.querySelectorAll('[data-close-nav]')
const closeModalContents = document.querySelectorAll('[data-close-content]')
const openMjModal = document.querySelectorAll('[data-mj-target]')
const openNwModal = document.querySelectorAll('[data-nw-target]')
const openTnwModal = document.querySelectorAll('[data-tnw-target]')
const openSmModal = document.querySelectorAll('[data-sm-target]')
const openNyModal = document.querySelectorAll('[data-ny-target]')
const openReModal = document.querySelectorAll('[data-re-target]')
//here

openMjModal.forEach(b => {
    b.addEventListener('click', () => {
        const mj = document.querySelector(b.dataset.mjTarget)
        openMj(mj)
    })
})
openNwModal.forEach(b => {
    b.addEventListener('click', () => {
        const nw = document.querySelector(b.dataset.nwTarget)
        openNw(nw)
    })
})
openTnwModal.forEach(b => {
    b.addEventListener('click', () => {
        const tnw = document.querySelector(b.dataset.tnwTarget)
        openTnw(tnw)
    })
})
openSmModal.forEach(b => {
    b.addEventListener('click', () => {
        const sm = document.querySelector(b.dataset.smTarget)
        openSm(sm)
    })
})
openNyModal.forEach(b => {
    b.addEventListener('click', () => {
        const ny = document.querySelector(b.dataset.nyTarget)
        openNy(ny)
    })
})
openReModal.forEach(b => {
    b.addEventListener('click', () => {
        const re = document.querySelector(b.dataset.reTarget)
        openRe(re)
    })
})
//here
closeModalContents.forEach(b => {
    b.addEventListener('click', () => {
        const mj = b.closest('.modal-content')
        const nw = b.closest('.modal-content')
        const tnw = b.closest('.modal-content')
        const sm = b.closest('.modal-content')
        const ny = b.closest('.modal-content')
        const re = b.closest('.modal-content')
        //here
        closeMj(mj)
        closeNw(nw)
        closeTnw(tnw)
        closeSm(sm)
        closeNy(ny)
        closeRe(re)
        //here
    })
})
function openMj(mj) {
    if (mj == null) return
    mj.classList.add('active')
}
function openNw(nw) {
    if (nw == null) return
    nw.classList.add('active')
}
function openTnw(tnw) {
    if (tnw == null) return
    tnw.classList.add('active')
}
function openSm(sm) {
    if (sm == null) return
    sm.classList.add('active')
}
function openNy(ny) {
    if (ny == null) return
    ny.classList.add('active')
}
function openRe(re) {
    if (re == null) return
    re.classList.add('active')
}
//here
function closeMj(mj) {
    if (mj == null) return
    mj.classList.remove('active')
}
function closeNw(nw) {
    if (nw == null) return
    nw.classList.remove('active')
}
function closeTnw(tnw) {
    if (tnw == null) return
    tnw.classList.remove('active')
}
function closeSm(sm) {
    if (sm == null) return
    sm.classList.remove('active')
}
function closeNy(ny) {
    if (ny == null) return
    ny.classList.remove('active')
}
function closeRe(re) {
    if (re == null) return
    re.classList.remove('active')
}
//here
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
    const modalsContent = document.querySelectorAll('.modal-content.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
    modalsContent.forEach(content => {
        closeMj(content)
        closeNw(content)
        closeTnw(content)
        closeSm(content)
        closeNy(content)
        closeRe(content)
        // here
    })
})