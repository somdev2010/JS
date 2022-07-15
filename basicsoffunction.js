function ourReusableFunction(){
    console.log("Heyya, World-function1")
}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();
function ourReusableFunction2(){
    console.log("Hi, World-function2")
}
ourReusableFunction2();
ourReusableFunction2();
ourReusableFunction2();
function ourFunctionWithArgs(a,b){
    console.log(a-b)
}
ourFunctionWithArgs(10,5);  
function ArgumentFunction(c,d){
    console.log(c+d)
}
function fun3();
//1st hour of course completed
var outerwear1="T-Shirt"
function myoutfit(){
    var outerwear="sweater"
    return outerwear;
}
console.log(myoutfit())
console.log(outerwear1) 
function minusSeven(num){
    return num-7;
}
    console.log(minusSeven(10))
var sum=0; 
function addThree(){
    sum=sum+3
    console.log(sum)
}
function change(num1){
    return (num1+6)/4
}
var changed=change(10)
console.log(changed)
function nextLine(arr,item){
    arr.push(item)
    arr.shift(item)
return arr.shift;}