const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})

const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if (readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = 'Show less';
    } else {
        readMoreBtn.textContent = 'Show more';
    }
})

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0)
}
);

const openBtn = document.querySelector('.contactBtn');
const modalClose = document.querySelector('.close');
const mediaClose = document.querySelector('.mediaClose');
const modal = document.querySelector('.modal');
const hello = document.getElementById('helloWorld');
const landing = document.querySelector('.landing');
const site = document.querySelector('body');
const mediaModal = document.querySelector('.mediaModal');
const mq = window.matchMedia("(max-width: 600px)");

openBtn.addEventListener('click', openModal);

function openModal() {
    if (mq.matches) {
        mqModal();

    } else {
        modal.style.display = 'block'
        hello.style.display = 'none'
        site.style.overflow = 'hidden'
        landing.style.position = 'unset'
    }
};

function mqModal() {
    mediaModal.style.display = 'block'
    modal.style.display = 'none'
    landing.style.position = 'unset'
    hello.style.display = 'none'
    site.style.overflow = 'hidden'
}


modalClose.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none'
    hello.style.display = 'block'
    site.style.overflow = 'scroll'
    landing.style.position = 'relative'
};

mediaClose.addEventListener('click', closeMqModal)

function closeMqModal() {
    mediaModal.style.display = 'none'
    hello.style.display = 'block'
    site.style.overflow = 'scroll'
    landing.style.position = 'relative'
}

modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

mediaModal.addEventListener('click', function (e) {
    if (e.target.classList.contains('mediaModal')) {
        closeMqModal();
    }
});






