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
        const authOpenBtn = document.querySelector('.auth-open')
        const authPopup = document.querySelector('.auth-popup')
        const authCloseBtn = document.querySelector('.close-icon')
        let openMenu = false
        let openAuth = false

        function openBurgerMenu(openMenuProp) {
            if (!openMenuProp) {
                burgerBtn.classList.add('burger-icon_active')
                burgerMenu.classList.add('burger-content_active')
                body.classList.add('no-scroll')
                openMenuProp = !openMenuProp
            }
            return openMenuProp
        }
        function closeBurgerMenu(openMenuProp, openAuthProp) {
            if (openMenuProp) {
                burgerBtn.classList.remove('burger-icon_active')
                burgerMenu.classList.remove('burger-content_active')
                if (!openAuthProp) body.classList.remove('no-scroll')
                openMenuProp = !openMenuProp
            }
            return openMenuProp
        }
        function openAuthMenu(openAuthProp) {
            if (!openAuthProp) {
                authPopup.classList.add('auth-popup_active')
                body.classList.add('no-scroll')
                openAuthProp = !openAuthProp
            }
            return openAuthProp
        }
        function closeAuthMenu(openAuthProp) {
            if (openAuthProp) {
                authPopup.classList.remove('auth-popup_active')
                body.classList.remove('no-scroll')
            }
        }

        burgerBtn.addEventListener('click', () => {
            openBurgerMenu(openMenu)
            closeBurgerMenu(openMenu, openAuth)
            openMenu = !openMenu

        })
        authOpenBtn.addEventListener('click', () => {
            openMenu = closeBurgerMenu(openMenu, openAuth)
            openAuth = openAuthMenu(openAuth)
        })
        authCloseBtn.addEventListener('click', () => {
            closeAuthMenu(openAuth)
            openAuth = !openAuth
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