try{
    let fname = "Rohit Sharma"
    console.log(fname.toUpperCase())
}catch(err){
    console.log("Fname must be a string")
    console.log(err.name);
}finally{
    console.log("done with try catch");
}
