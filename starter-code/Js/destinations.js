import destinations from '../data.json' assert {type:'json'}

let btns = document.querySelectorAll('.items')
let destName = document.querySelector('.title')
let mainImages = document.querySelector('.main-img')
let description = document.querySelector('.l-text')
let distance = document.querySelector('.di-km')
let travel = document.querySelector('.di-val')
let desArray = destinations.destinations

destName.innerHTML = desArray[0].name.toUpperCase()
mainImages.src = desArray[0].images.webp
description.innerHTML = desArray[0].description
distance.innerHTML = desArray[0].distance.toUpperCase()
travel.innerHTML =  desArray[0].travel.toUpperCase()

btns.forEach(btn => {
    if (btn.id.toLowerCase() == destName.innerHTML.toLowerCase()) {
        btn.classList.add('active')
    }
    btn.addEventListener('click', e =>{
        let filtered = desArray.filter(item => {
            return btn.id.toLowerCase() == item.name.toLowerCase()
        })

        destName.innerHTML = filtered[0].name.toUpperCase()
        mainImages.src = filtered[0].images.webp
        description.innerHTML = filtered[0].description
        distance.innerHTML = filtered[0].distance.toUpperCase()
        travel.innerHTML =  filtered[0].travel.toUpperCase()
        e.preventDefault()
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
//             console.log(pageData[0][1].destinations)
//             let destData = pageData[0][1].destinations

//             distance.innerHTML = destData[0].distance.toUpperCase()
//             travel.innerHTML = destData[0].travel.toUpperCase()
//             destName.innerHTML = destData[0].name.toUpperCase()
//             description.innerHTML = destData[0].description
//             mainImages.src = destData[0].images.webp
            
//             btns.forEach(btn => {
            
//                 if (btn.id.toLowerCase() == destName.innerHTML.toLowerCase()) {
//                     btn.classList.add('active')
//                 }
//                 btn.addEventListener('click', e => {
//                     let filtered = destData.filter(item => {
//                         return btn.id == item.name
//                     })
//                     let destObj = filtered[0]
//                     distance.innerHTML = destObj.distance.toUpperCase()
//                     travel.innerHTML = destObj.travel.toUpperCase()
//                     destName.innerHTML = destObj.name.toUpperCase()
//                     description.innerHTML = destObj.description
//                     mainImages.src = destObj.images.webp

//                     let prevPage = document.querySelector('.active')
//                     prevPage.classList.remove('active')
//                     btn.classList.add('active')
//                 })
//             })

//         })
//         .catch(err => console.log(err))

// })