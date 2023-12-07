import destinations from '../data.json' assert {type: 'json'}

let pageBtns = document.querySelectorAll('.btn')
let name = document.querySelector('.name')
let description = document.querySelector('.l-text')
let image = document.querySelector('.main-img')

let tecArray = destinations.technology

name.innerHTML = tecArray[0].name
description.innerHTML = tecArray[0].description
if (window.innerWidth < 600 || window.innerWidth > 1200) {
    image.src = tecArray[0].images.portrait
} else {
    image.src = tecArray[0].images.landscape
}

pageBtns.forEach(btn => {
    let filtered = tecArray.filter(item => {
        return btn.id == item.name
    })
    let tecObj = filtered[0]
    if (btn.id.toLowerCase() == name.innerHTML.toLowerCase()) {
        btn.classList.add('active')
    }

    btn.addEventListener('click', e => {
        name.innerHTML = tecObj.name
        description.innerHTML = tecObj.description
        if (window.innerWidth < 600 || window.innerWidth > 1200) {
            image.src = tecObj.images.portrait
        } else {
            image.src = tecObj.images.landscape
        }
        let prevPage = document.querySelector('.active')
        prevPage.classList.remove('active')
        btn.classList.add('active')
    })
})


// window.addEventListener('load', e => {
//     e.preventDefault()

//     fetch('https://train-projecr-default-rtdb.firebaseio.com/data.json')
//         .then(res => res.json())
//         .then(data => {
//             let pageData = Object.entries(data)
//             let techData = pageData[0][1].technology

//             name.innerHTML = techData[0].name
//             description.innerHTML = techData[0].description
//             if (window.innerWidth < 600 || window.innerWidth > 1200) {
//                 image.src = techData[0].images.portrait
//             } else {
//                 image.src = techData[0].images.landscape
//             }

//             // subject.innerHTML = crewData[0].role
//             // name.innerHTML = crewData[0].name
//             // description.innerHTML = crewData[0].bio
//             // image.src = crewData[0].images.webp

//             pageBtns.forEach(btn => {

//                 if (btn.id.toLowerCase() == name.innerHTML.toLowerCase()) {
//                     btn.classList.add('active')
//                 }
//                 btn.addEventListener('click', e => {
//                     let filtered = techData.filter(item => {
//                         return btn.id == item.name
//                     })
//                     let techObj = filtered[0]

//                     name.innerHTML = techObj.name
//                     description.innerHTML = techObj.description
//                     if (window.innerWidth < 600 || window.innerWidth > 1200) {
//                         image.src = techObj.images.portrait
//                     } else {
//                         image.src = techObj.images.landscape
//                     }
//                     // subject.innerHTML = crewObj.role
//                     // name.innerHTML = crewObj.name
//                     // description.innerHTML = crewObj.bio
//                     // image.src = crewObj.images.webp
//                     let prevPage = document.querySelector('.active')
//                     prevPage.classList.remove('active')
//                     btn.classList.add('active')
//                 })
//             })

//         })
//         .catch(err => console.log(err))

// })