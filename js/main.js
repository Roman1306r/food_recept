const body = document.querySelector('body')
const headerMenu = document.querySelector('.header__menu')
const headerBurger = document.querySelector('.header__burger')
window.addEventListener('load', (e) => {
    setTimeout(() => document.querySelector('.load').style.display = 'none', 2000)
    setTimeout(() => document.querySelector('.content__header').style.cssText = 'transform: translate(0, 0)', 2000)
})

headerBurger.addEventListener('click', (e) => {
    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')
})
const scrollToPageHTMLTags = document.querySelectorAll('section')
const headerLinks = document.querySelectorAll('.header__link')
if(headerLinks.length > 0){
    for (let i = 0; i < headerLinks.length; i++) {
        const link = headerLinks[i];
        link.onclick = e => {
            // console.log(e.currentTarget);
            e.preventDefault()
            
            headerLinks.forEach(item => item.classList.remove('active'))
            link.classList.add('active')
            for (let j = 0; j < scrollToPageHTMLTags.length; j++) {
                const className = scrollToPageHTMLTags[j].className;
                const section = scrollToPageHTMLTags[j];
                if(className.includes(link.dataset.scr)) {
                    section.scrollIntoView({
                        block: "start",
                        inline: "nearest",
                        behavior: "smooth"
                    })
                } 
            }
            if(window.innerWidth < 992) {
                headerBurger.classList.remove('active')
                headerMenu.classList.remove('active')
            }
        }    
    }
}





const search = document.querySelector('.search')
const searchCloseBtn = document.querySelector('.search-close')
const searchOpenBtn = document.querySelector('.content__header-icon.searchopen')
searchCloseBtn.onclick = function(e) {
    e.preventDefault()
    search.classList.add('close')
    search.style.cssText = 'transform: translate(0, -100%)'
}
searchOpenBtn.onclick = e => {
    e.preventDefault()
    search.classList.remove('close')
    search.style.cssText = 'transform: translate(0, 0%)'
}
const searchInput = document.querySelector('#search')
const searchResult = document.querySelector('.search__result')
const arraySearchResult = Array.from(document.querySelectorAll('.s')) 
let currentLinkScroll
searchInput.addEventListener('input', (e) => {
    let resultLinksArray = []
    if(arraySearchResult.length > 0) {
            for (let i = 0; i < arraySearchResult.length; i++) {
                const headerShop = arraySearchResult[i];
                resultLinksArray.push(headerShop.textContent.toLowerCase().replace(/#/g, '').slice(0, 1).toUpperCase() + headerShop.textContent.toLowerCase().replace(/#/g, '').slice(1))
            }
    }
    for (let j = 0; j < resultLinksArray.length; j++) {
        const words = resultLinksArray[j];
        if(words.includes(searchInput.value)) {
            searchResult.innerHTML = words
        }       
    }
    if(searchInput.value == '') searchResult.innerHTML = ''
})
searchInput.addEventListener('blur', (e) => {
    searchInput.value = ''
})
searchResult.addEventListener('click', (e) => {
    e.preventDefault()
    console.clear()
    let res = searchResult.innerHTML
    for (let k = 0; k < arraySearchResult.length; k++) {
        const element = arraySearchResult[k];
        if(element.textContent.toLowerCase().replace(/#/g, '').slice(0, 1).toUpperCase() + element.textContent.toLowerCase().replace(/#/g, '').slice(1) === res) {
            element.scrollIntoView({
                block: "center",
                behavior: "smooth"
            })
        }  
    } 
    searchResult.textContent = ''
    search.classList.add('close')
    search.style.cssText = 'transform: translate(0, -100%)'
})























function cssHelper(htmlCollection){
    Array.from(htmlCollection).filter(item => {
        if(!item.classList.contains('pop')) item.style.display = 'none'
        if(item.classList.contains('pop')) item.style.display = 'flex'
        if(window.innerWidth > 767) {
            document.querySelectorAll('.filter__card').forEach(item => item.style.flex = '1 0 50%')
            document.querySelectorAll('.filter__card').forEach(item => item.style.margin = '0 10px 0 0')
            document.querySelectorAll('.filter__inline-block').forEach(item => item.style.flex = '1 0 50%')
        }
    })
}


const btnsContainer = document.querySelectorAll('#btns__container button')
const cards = document.querySelectorAll('.filter__card')
if(btnsContainer.length > 0){
    for (let i = 0; i < btnsContainer.length; i++) {
        const button = btnsContainer[i];
        button.addEventListener('click', (e) => {
            e.preventDefault()
            btnsContainer.forEach(item=> item.classList.remove('active'))
            button.classList.add('active')
            const id = button.getAttribute('id')
            if(id === 'new') {
                Array.from(cards).filter(item => {
                    if(!item.classList.contains('new')) item.style.display = 'none'
                    if(item.classList.contains('new')) item.style.display = 'flex'
                    if(window.innerWidth > 767) {
                        document.querySelectorAll('.filter__card').forEach(item => item.style.flex = '1 0 50%')
                        document.querySelectorAll('.filter__card').forEach(item => item.style.margin = '0 10px 0 0')
                        document.querySelectorAll('.filter__inline-block').forEach(item => item.style.flex = '1 0 50%')
                    } 
                })
            }
            if(id === 'all') {
                Array.from(cards).forEach(item => item.style.display = 'flex')
                if(window.innerWidth > 767) {
                    document.querySelectorAll('.filter__card').forEach(item => item.style.flex = '0 0 50%')
                    document.querySelectorAll('.filter__card').forEach(item => item.style.margin = '0 0px 0 0')
                    document.querySelectorAll('.filter__inline-block').forEach(item => item.style.flex = '0 0 100%')
                }         
            }
            if(id === 'pop') {
                cssHelper(cards)
            }
        })
        
    }
}



const like = document.querySelectorAll('.filter__card-like img')
const likeCounter = document.querySelectorAll('.filter__card-like span')
if(like.length > 0) {
    for (let i = 0; i < like.length; i++) {
        const imgLike = like[i];
        imgLike.addEventListener('click', (e)=> {
            if(likeCounter[i].innerHTML == 1) {
                likeCounter[i].innerText = ''
                imgLike.setAttribute('src', 'images/filter/like.png')
            } else {
                imgLike.setAttribute('src', 'images/filter/like-red.png')
                likeCounter[i].innerHTML = 1
            }
            
        })    
    }
}






const btnUp = document.querySelector('.up')
window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > 400) btnUp.classList.add('watch')
    else   btnUp.classList.remove('watch') 

})
btnUp.onclick = (e) => window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
}) 

const form = document.getElementById('email')
let placeholder = form.getAttribute('placeholder')
form.onfocus = (e) => form.setAttribute('placeholder', '')
form.onblur = (e) => form.setAttribute('placeholder', placeholder)





const footerYear = document.querySelector('.footer__year span')
footerYear.innerHTML = new Date().getFullYear()



//Реализация прокрутки по меню
window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > 650 && window.pageYOffset < 1350) {
        headerLinks.forEach(item => item.classList.remove('act'))
        document.querySelector('[data-scr="page-block2"]').classList.add('act')
    } else if (window.pageYOffset > 1350 && window.pageYOffset < 1900) {
        headerLinks.forEach(item => item.classList.remove('act'))
        document.querySelector('[data-scr="page-block3"]').classList.add('act')
    } else if (window.pageYOffset > 1900) {
        headerLinks.forEach(item => item.classList.remove('act'))
        document.querySelector('[data-scr="page-block4"]').classList.add('act')
    } else {
        headerLinks.forEach(item => item.classList.remove('act'))
        document.querySelector('[data-scr="page-block1"]').classList.add('act') 
    }
})



const btnTheme = document.querySelector('.content__header-icon.theme')
btnTheme.onclick = e => {
    e.preventDefault()
    if(!btnTheme.classList.contains('dark')) {
        document.querySelector('.content__header-icon.theme img').setAttribute('src', 'images/content-header/luna.png')
        body.style.cssText = ` background-color: rgb(0, 0, 0, 0.7)`
        document.querySelector('.content__header-title').style.cssText = `color: white;`
        document.querySelector('.recept__title').style.cssText = `color: #d9be8f;`
        document.querySelector('.filter__title').style.cssText = `color: #d9be8f;`
        document.querySelectorAll('.filter__card-title').forEach(item => item.style.cssText = `color: white;`)
        document.querySelectorAll('.filter__card-recept').forEach(item => item.style.cssText = `color: #d9be8f;`)
        document.querySelectorAll('.filter__card-like span').forEach(item => item.style.cssText = `color: #d9be8f;`)
        document.querySelectorAll('.filter__card-icons span').forEach(item => item.style.cssText = `color: #d9be8f;`)
        document.querySelectorAll('.filter__card').forEach(item => item.style.cssText = `box-shadow: 0px 0px 1px #d9be8f;`)
        document.querySelector('.hot__title').style.cssText = `color: #d9be8f;`
        document.querySelector('.footer__body').style.cssText = `color: white;`
        document.querySelector('.footer__body a').style.cssText = `color: #d9be8f;`
        document.querySelector('.footer__body span').style.cssText = `color: #d9be8f;`
        document.querySelector('.header').style.cssText = `background-color: #404040;`
        if(window.innerWidth < 993) document.querySelector('.header__menu').style.cssText = `background-color: #38342d;`
        btnTheme.classList.add('dark')
    } else {
        document.querySelector('.content__header-icon.theme img').setAttribute('src', 'images/content-header/sonne.png')
        body.style.cssText = `background-color: rgb(0, 0, 0, 0.2)`
        document.querySelector('.content__header-title').style.cssText = `color: black;`
        document.querySelector('.recept__title').style.cssText = `color: orange;`
        document.querySelector('.filter__title').style.cssText = `color: orange;`
        document.querySelectorAll('.filter__card-title').forEach(item => item.style.cssText = `color: black;`)
        document.querySelectorAll('.filter__card-recept').forEach(item => item.style.cssText = `color: orange;`)
        document.querySelectorAll('.filter__card-like span').forEach(item => item.style.cssText = `color: red;`)  
        document.querySelectorAll('.filter__card-icons span').forEach(item => item.style.cssText = `color: black;`)
        document.querySelectorAll('.filter__card').forEach(item => item.style.cssText = `box-shadow: 0px 0px 1px black;`)
        document.querySelector('.hot__title').style.cssText = `color: orange;`
        document.querySelector('.footer__body').style.cssText = `color: black;`
        document.querySelector('.footer__body a').style.cssText = `color: #ff3604;`
        document.querySelector('.footer__body span').style.cssText = `color: #ff3604;`
        document.querySelector('.header').style.cssText = `background-color: grey;`
        if(window.innerWidth < 993) document.querySelector('.header__menu').style.cssText = `background-color:  #a55200;`
        btnTheme.classList.remove('dark')
    }

}










//!! Находим все классы специльно заданные элементам для анимации
const animItems = document.querySelectorAll('.anim__items');

if(animItems.length>0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll () {
        for(let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offSet(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;  
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('init') ;
            } else {
                //!! Если у элемента есть этот класс то при возврате к нему повторно анимироваться он не будет
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('init') 
                }
            }
        }
    }
    //!! Функция которая точно отслеживает скролл
    function offSet(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {  top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    //!! Запускаем функции анимации с задержкой чтобы все успело прогрузится
    setTimeout(()=> {
        animOnScroll ()
    }, 1000)
}





//POPUP
let registerObject = {}
const popup = document.querySelector('.popup')
const popupContainer = document.querySelector('.popup__container')
const popupCloseLink = document.querySelector('.popup__body-close')
const admin = document.querySelector('.content__header-icon.admin img')
window.addEventListener('keydown', (e) => {
   if(e.code === 'Escape')  {
    popup.classList.remove('initial')
   }
})
admin.onclick = (e) =>  {
    popup.classList.add('initial')
}
popupCloseLink.onclick = (e) => {
    popup.classList.remove('initial')
}
popupContainer.onclick = (e) => {
    if(e.target.classList.contains('popup__container')) {
        popup.classList.remove('initial')
    }     
}
const popupInputs = document.querySelectorAll('.popup__form-input')
if(popupInputs.length > 0) {
    for (let i = 0; i < popupInputs.length; i++) {
        const input = popupInputs[i];
        let inputPlaceholder = input.getAttribute('placeholder')
        input.addEventListener('focus', (e) => {
            input.setAttribute('placeholder', '')
        })
        input.addEventListener('blur', (e) => {
            input.setAttribute('placeholder', inputPlaceholder)
        })   
    }
}



const login = document.querySelector('#login')
const password = document.querySelector('#pass')
const popupForm = document.querySelector('.popup__form')
const windowSend = document.querySelector('.window')
const windowSendText = document.querySelector('.window p')
const infoPassword = document.querySelector('.popup__form-password')
popupForm.addEventListener('submit', (e) => {
    if(login.value  === registerObject.login && password.value ===  registerObject.password || login.value === 'admin' && password.value === '1234') {
        e.preventDefault()
        popupForm.reset()
        popup.classList.remove('initial')
        windowSendText.textContent = 'Авторизация выполнена успешно!'
        windowSend.classList.add('act')
        setTimeout(() => windowSend.classList.remove('act'), 2000)
        admin.setAttribute('src', 'images/content-header/ava.png')
        popupForm.style.display = 'none'
        document.querySelector('.popup__autorisiert').style.display = 'block'
    } else {
        document.querySelector('.window img').setAttribute('src', 'images/close.svg')
        windowSendText.textContent = 'Неправильный логин или пароль!'
        windowSend.classList.add('act')
        setTimeout(() =>{
            windowSend.classList.remove('act')
            document.querySelector('.window img').setAttribute('src', 'images/content-header/ok.png')
        }, 2000)
    }  
})
document.querySelector('#exit').addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.remove('initial')
    windowSendText.textContent = 'Вы вышли из аккаунта!'
    windowSend.classList.add('act')
    setTimeout(() => windowSend.classList.remove('act'), 2000)
    admin.setAttribute('src', 'images/content-header/door.png')
    popupForm.style.display = 'block'
    document.querySelector('.popup__autorisiert').style.display = 'none'
    registerObject = {}
})
infoPassword.onclick = (e) => {
    e.preventDefault()
    if(registerObject.password) {
        windowSendText.textContent = `Логин: ${registerObject.login}, пароль: ${registerObject.password} `
    } else {
        windowSendText.textContent = `Логин: admin , пароль: 1234`
    }
    windowSend.classList.add('act')
    setTimeout(() => windowSend.classList.remove('act'), 8000)
}






const popupRegistrLink = document.querySelector('.content__header-icon.registration')
const popupRegistr = document.querySelector('.popup.registration')
const popupCloseLinkRegistr = document.querySelector('.popup__body-close.registration')
const registerLink = document.querySelector('.popup__form-register-link')

registerLink.onclick = (e) => {
    e.preventDefault()
    popup.classList.remove('initial')
    popupRegistr.classList.add('initial')
}
popupRegistrLink.addEventListener('click', (e) => {
    e.preventDefault()
    if(registerObject.password) {
        document.querySelector('.window img').setAttribute('src', 'images/close.svg')
        windowSendText.textContent = 'Вы уже зарегистрированы!'
        windowSend.classList.add('act')
        setTimeout(() =>{
            windowSend.classList.remove('act')
            document.querySelector('.window img').setAttribute('src', 'images/content-header/ok.png')
        }, 2000)
    } else {
        popupRegistr.classList.add('initial')
    }
})
popupCloseLinkRegistr.onclick = (e) => {
    popupRegistr.classList.remove('initial')
}
window.onclick = (e) => {
    if(e.target.classList.contains('popup__container')) {
        popupRegistr.classList.remove('initial')
    }     
}
window.addEventListener('keydown', (e) => {
    if(e.code === 'Escape')  {
        popupRegistr.classList.remove('initial')
    }
 })

const formRegistr = document.querySelector('.popup__form.registr')
const loginReg = document.getElementById('login-registr')
const passwordReg = document.getElementById('pass-registr')
const linkPopupExit = document.querySelector('.popup__form-register-link.registr')
linkPopupExit.onclick = (e) => {
    e.preventDefault()
    popup.classList.add('initial')
    popupRegistr.classList.remove('initial') 
} 
formRegistr.addEventListener('submit', (e) => {
    if(loginReg.value !== '' && passwordReg.value !== '') {
        e.preventDefault()
        registerObject.login = loginReg.value
        registerObject.password = passwordReg.value
        formRegistr.reset()
        windowSendText.textContent = 'Вы зарегистрированы!'
        windowSend.classList.add('act')
        setTimeout(() => windowSend.classList.remove('act'), 2000)
        popupRegistr.classList.remove('initial') 
        popup.classList.add('initial')
        console.log(registerObject);
    } else {
        document.querySelector('.window img').setAttribute('src', 'images/close.svg')
        windowSendText.textContent = 'Введите корректные данные!'
        windowSend.classList.add('act')
        setTimeout(() =>{
            windowSend.classList.remove('act')
            document.querySelector('.window img').setAttribute('src', 'images/content-header/ok.png')
        }, 2000)
    }
})