// try {
//     let num = 10;
//     let result = shekhar + 1;
// }catch(e){
//     console.log("please check reference: " +e.name + " and "+ e.message);
// }finally{
//     console.log("please correct the code");    
// }

// console.log(result);
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error(error.message);
}
