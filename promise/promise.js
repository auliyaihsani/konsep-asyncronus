// let janji = new Promise((resolve, reject) =>{
//     resolve('berhasil');
// })
// .then((result) => {
// console.log(result)    
// })
// .catch((err) => {
//     console.log(err)
// }); 

// request ajax dengan fetch
// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(function(response) {
//     return response.json(); //object response dgn json
// })
// .then(function(user) {
//     console.log(user); 
// })


// request promise chaining / promise berantai

const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
const getAuthor = (id) => fetch('https://jsonplaceholder.typicode.com/users/'+ id)
const getComment = (id) => fetch('https://jsonplaceholder.typicode.com/users/' +id)

//   contoh get post
// - then(getAuthor)
// - then(getComment)
// - then(showResult)

// getPost()
// .then(postResponse => postResponse.json())
// .then(postResponse => getAuthor(postResponse.id)
// .then(authorResponse => authorResponse.json()
// .then(authorResponse => getComment(postResponse.id)
// .then(commentResponse => commentResponse.json()) 
// .then(commentResponse => {
//     return ({ postResponse, authorResponse, commentResponse }) 
//          })
//     )
// )

// .then(result => {
//     console.log(result.postResponse)
//     console.log(result.authorResponse)
//     console.log(result.commentResponse)
//  })
// )
// .catch(error => console.log(error))

// promise all

// var a = getPost().then(res => res.json()) // all get post
// var b = a.then(res => getAuthor(res.id)).then(res => res.json()) //#2 get author
// var c = a.then(res => getComment(res.id)).then(res => res.json()) //#3 get comment
// Promise.all([a,b,c]).then(result => {
//     console.log(result[0])
//     console.log(result[1])
//     console.log(result[2])
// })


// promise and looping
// mengeksukusi promise dalam waktu sesuai urutan dengan looping

// const doFetch = (url) => fetch(url).then(result => result.json())
// let urls = [
//     'https://jsonplaceholder.typicode.com/posts/1',
//     'https://jsonplaceholder.typicode.com/posts/2',
//     'https://jsonplaceholder.typicode.com/posts/3',
//     'https://jsonplaceholder.typicode.com/posts/4',
// ]

// let promise = []

// urls.map((url) => {
//     promise.push(doFetch(url))
// })
// Promise.all(promise)
// .then(results => console.log(results))


// promise race adalah hanya menghasilkan promise mana yang lebih dulu selesai



// let peserta1 = new Promise(resolve => setTimeout(resolve, 30, 'peserta 1')) 
// let peserta2 = new Promise((resolve) => setTimeout(resolve, 20, 'peserta 2')) 
// let peserta3 = new Promise(resolve => setTimeout(resolve, 50, 'peserta 3')) 
// let peserta4 = new Promise(resolve => setTimeout(resolve, 100, 'peserta 4')) 
// let peserta5 = new Promise(resolve => setTimeout(resolve, 99, 'peserta 5')) 

// Promise.race([peserta1, peserta2, peserta3, peserta4, peserta5 ])
//     .then( val => console.log('balapan selesai pemenangnya adalah', val))
//     .catch(err => console.log('balapan dihentikan karena : ', err));

Promise.seriousRace = function(promises) {
    let indexPromises = promises.map((p, index) => p.catch(() => {throw index}))
    return Promise.race(indexPromises).catch(index => {
        let p = promises.splice(index, 1)[0]
        p.catch(e => console.log( e + 'jatuh, lanjut'))
        return Promise.seriousRace(promises)
    })
}




let peserta1 = new Promise(resolve => setTimeout(resolve, 30, 'peserta 1')) 
let peserta2 = new Promise((resolve, reject) => setTimeout(reject, 20, 'peserta 2')) 
let peserta3 = new Promise(resolve => setTimeout(resolve, 50, 'peserta 3')) 
let peserta4 = new Promise(resolve => setTimeout(resolve, 100, 'peserta 4')) 
let peserta5 = new Promise(resolve => setTimeout(resolve, 99, 'peserta 5')) 

Promise.seriousRace([peserta1, peserta2, peserta3, peserta4, peserta5 ])
    .then( val => console.log('balapan selesai, pemenangnya adalah', val))
    .catch(err => console.log('balapan dihentikan karena : ', err)) 






