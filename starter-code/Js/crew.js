import destinations from '../data.json' assert {type: 'json'}

let pageBtns = document.querySelectorAll('.pers-btn')
let subject = document.querySelector('.subject')
let name = document.querySelector('.name')
let description = document.querySelector('.description')
let image = document.querySelector('.main-img')

let crewArray = destinations.crew

subject.innerHTML = crewArray[0].role
name.innerHTML = crewArray[0].name
description.innerHTML = crewArray[0].bio
image.src = crewArray[0].images.webp

pageBtns.forEach(btn => {

    if (btn.id.toLowerCase() == subject.innerHTML.toLowerCase()) {
        btn.classList.add('active')
    }
    btn.addEventListener('click', e => {
        let filtered = crewArray.filter(item => {
            return btn.id == item.role
        })
        let crewObj = filtered[0]
        subject.innerHTML = crewObj.role
        name.innerHTML = crewObj.name
        description.innerHTML = crewObj.bio
        image.src = crewObj.images.webp
        let prevPage = document.querySelector('.active')
        prevPage.classList.remove('active')
        btn.classList.add('active')
    })
})

// window.addEventListener('load', e => {
//     e.preventDefault()
//     if (window.innerWidth < 600) {
//         menuBar.style.display = 'none'
//         btnFlag = true
//     }

//     fetch('https://train-projecr-default-rtdb.firebaseio.com/data.json')
//         .then(res => res.json())
//         .then(data => {
//             let pageData = Object.entries(data)
//             console.log(pageData[0][1].crew)
//             let crewData = pageData[0][1].crew

//             subject.innerHTML = crewData[0].role
//             name.innerHTML = crewData[0].name
//             description.innerHTML = crewData[0].bio
//             image.src = crewData[0].images.webp
            
//             pageBtns.forEach(btn => {
            
//                 if (btn.id.toLowerCase() == subject.innerHTML.toLowerCase()) {
//                     btn.classList.add('active')
//                 }
//                 btn.addEventListener('click', e => {
//                     let filtered = crewData.filter(item => {
//                         return btn.id == item.role
//                     })
//                     let crewObj = filtered[0]
//                     subject.innerHTML = crewObj.role
//                     name.innerHTML = crewObj.name
//                     description.innerHTML = crewObj.bio
//                     image.src = crewObj.images.webp
//                     let prevPage = document.querySelector('.active')
//                     prevPage.classList.remove('active')
//                     btn.classList.add('active')
//                 })
//             })

//         })
//         .catch(err => console.log(err))

// })