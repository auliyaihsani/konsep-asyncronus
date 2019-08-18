// const endpoint = 'https://jsonplaceholder.typicode.com/users/'
// function fetchWithPromise(id) {
//     fetch(endpoint + id)
//     .then(response => {
//         return response.json();
//     })
//     .then(user => {
//         console.log(user);
//     })
// }

// async function fetchWithAsyncAwait(id) {
//     try {
//         let response = await fetch(endpoint + id)
//         response = await response.json()
//         console.log(response)
//     } catch (error) {
//         console.log('opps'+ error)
//     }    
// }

// fetchWithPromise(1)
// fetchWithAsyncAwait(1)

// anonymous async function
// let main = (async function(){
//     let value = await doAsync();
// })();  

// // function declaration
// let main = async function() {
//     let value = await doAsync();
// };

// // function assignment
// document.body.addEventListener('click', async function(){
//     let value = await doAsync();
// });

// // object & class
// let obj = {
//     async method(){
//         let value = await doAsync();
//     }
// };

// class MyClass {
//     async myMethod() {
//         let value = await doAsync();
//     }
// }

const firstPromise = () => (new Promise((resolve, reject) =>{
    setTimeout(()=>{resolve('first Promise')}, 1000)
}))

const secondPromise = () => (new Promise((resolve, reject) =>{
    setTimeout(()=>{resolve('second promise')}, 500)
}))

const thirdPromise = () => (new Promise((resolve, reject) =>{
    setTimeout(()=>{resolve('third promise')}, 20)
}))

// async function asyncParalel(){
//     let a = await firstPromise()
//     let b = await secondPromise()
//     let c = await thirdPromise()
//     console.log('done')
// }

async function promiseAll() {
    let result = await Promise.all(
        [firstPromise(), secondPromise(), thirdPromise()]
    )
        console.log(result);    
}

async function promiseRace() {
    let result = await Promise.race(
        [firstPromise(), secondPromise(), thirdPromise()]
    )
    console.log(result);    
}


promiseAll();
promiseRace();



 

























