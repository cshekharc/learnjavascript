// function func1(){
//     console.log("this function 1")
// }

// let prom = new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             console.log("this function 2")
//             resolve()
//         }, 1000)  
// })
// prom.then(function(){
//         console.log("this is function 3");
// })


// function fun1(){
//     console.log("this function 1")
// }
// function fun2(){
//     setTimeout(function(){
//         console.log("this is function 2");
//     }, 1000)
// }
// function fun3(){
//     console.log("this function 3")
// }

// func1()
// fun1()
// fun2()
// fun3()

// new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log("this is a promise")
//         resolve()
//     }, 3000)  
// }).then(function() {
//     console.log("please execute after promise")
// })

new Promise(function(resolve, reject) {
    setTimeout(function(){
        let err = false
        if(!err){
            console.log("this is in reject")
            reject()
        }else{
            console.log("this is resolved");
            resolve()
        }
    })
}).then(function(){
    console.log("please wait...")
}).catch(function(){
    console.log("it is rejected")
})