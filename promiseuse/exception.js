try{
    let faname = "Rohit";
    let result = faname + 1
    console.log(result);
}catch(err){
    console.log(err.message + " " + err.name)
    console.log("Please define shekhar")    
}finally{
    console.log("Error is shown")
}
// console.log(result);