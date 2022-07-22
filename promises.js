var promise= new Promise(function(resolve,reject){
    const x="Somdev Mitra"
    const y="Somdev Mitra"
    if(x===y){
    resolve()
}else{
    reject()
}
})
promise. 
then (function(){
    console.log("Succes, you are Somdev")
}).
catch(function(){
    console.log("Some error occured")
})