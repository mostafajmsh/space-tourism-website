const burger = document.querySelector('.burger')
const menuIcon = document.querySelector('.burger-icon')
const menuBar = document.querySelector('.menu-bar')
const menuBtns = document.querySelectorAll('.menu-but')
const subText = document.querySelector('.f-text')

let btnFlag = false

console.log(subText.id)

menuBtns.forEach(btn => {
    if(btn.id.toLowerCase() == subText.id.toLowerCase()){
        btn.classList.add('active-pg')
    }
})

burger.addEventListener('click', e => {
    if (btnFlag) {
        menuIcon.src = 'assets/shared/icon-close.svg'
        menuBar.style.display = 'flex'
        btnFlag = false
    } else {
        menuIcon.src = 'assets/shared/icon-hamburger.svg'
        menuBar.style.display = 'none'
        btnFlag = true
    }
})

window.addEventListener('resize', function () {
    if (window.innerWidth > 600) {
        menuBar.style.display = 'flex'
    } else {
        menuBar.style.display = 'none'
        menuIcon.src = 'assets/shared/icon-hamburger.svg'
        btnFlag = true
    }
    if (window.innerWidth < 600) {

    }
})

window.addEventListener('load', e => {
    e.preventDefault()
    if(window.innerWidth<600){
        menuBar.style.display = 'none'
        btnFlag = true
    }

})

// fetch('https://train-projecr-default-rtdb.firebaseio.com/data.json', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(destinations)
// })
// .then(res => {
//     console.log(res);
// })
// .catch(err => console.log(err))