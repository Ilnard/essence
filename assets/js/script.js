document.addEventListener('DOMContentLoaded', () => {
    function dropDownMenu() {
        const profile = document.querySelector('.profile')
        const profileNav = document.querySelector('.profile__bot')
        const dropDownIcon = document.querySelector('.drop-down-icon')

        profile.addEventListener('click', () => {
            profileNav.classList.toggle('profile-bot-visible')
            dropDownIcon.classList.toggle('drop-down-up')
        })
        window.addEventListener('click', e => {
            const target = e.target
            if (!target.closest('.profile')) {
                profileNav.classList.remove('profile-bot-visible')
                dropDownIcon.classList.remove('drop-down-up')
            }
        })
    }
    // dropDownMenu()
    function slider() {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    slider()
    function burgerMenuFunc() {
        const burgerBtn = document.querySelector('.burger-icon')
        const burgerMenu = document.querySelector('.burger-content')
        const body = document.querySelector('body')
        const authBtn = document.querySelector('.auth-open')
        const authPopup = document.querySelector('.auth-popup')

        function openCloseBurgerMenu() {
            burgerBtn.classList.toggle('burger-icon_active')
            burgerMenu.classList.toggle('burger-content_active')
        }

        burgerBtn.addEventListener('click', () => {
            openCloseBurgerMenu()
            body.classList.toggle('no-scroll')
        })
        authBtn.addEventListener('click', () => {
            authPopup.classList.toggle('auth-popup_active')
            openCloseBurgerMenu()
        })
    }
    burgerMenuFunc()
    function authNav() {
        const links = document.querySelectorAll('.auth-nav__link')
        const forms = document.querySelectorAll('.auth__form')

        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', () => {
                links.forEach(link => {
                    link.classList.remove('auth-nav__link_active')
                })
                links[i].classList.add('auth-nav__link_active')
                forms.forEach(form => {
                    form.classList.remove('auth__form_active')
                })
                forms[i].classList.add('auth__form_active')
            })
        }
    }
    authNav()
})