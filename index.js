console.log("Hello World. This is my first JS program");
var myName = "Somdev";
myName = 8;
let ourName = "Coding Musketeers";
const pi=3.14;
console.log(myName)
console.log(ourName)
console.log(pi)
var a;
console.log(a)
var b=5; 
a=7; 
cbx=a-b
console.log(cbx)
//Initialize these three variables
var x = 5;
var y = 10;
var z = 26
var az = "I am a "; 
x+=12
y+=5
z-=7
az=az+"String" 
console.log(x)
console.log(y)
console.log(z)
console.log(az)
var StudyProperLy
var PlayPropErlY
var EatpRopeRLy
StudyProperLy=5
PlayPropErlY=2
EatpRopeRLy=1
//The case is sensitive in JavaScript. If variable in one case is assigned, and another case of variable is runned, then there is an error. 
var sum=10+10;
console.log(sum)
var subtraction=45-27
console.log(subtraction)
var product=8*10
console.log(product)
var quotient=66/33
console.log(quotient)
var myVar=87
//Instead of incrementing the number manually, there is a syntax to do so. 
myVar++;
console.log(myVar)
var myVar2=11
myVar2--;
console.log(myVar2)
var ourDecimal=5.7
var myDecimal=0.009
var decimalproduct=ourDecimal*myDecimal
console.log(decimalproduct);
var decimaldivision=ourDecimal/myDecimal;
console.log(decimaldivision);
var remainder;
remainder=11%3
console.log(remainder)
var w,v,t
v=8
w=21
t=6
v=v*=5;
w=w*=7
t=t*=8
console.log(v)
console.log(w)
console.log(t)
var ax, by, cz
ax=56
by=72
cz=126
ax=ax/=8
by=by/=9
cz=cz/=126
var myFirstname="Somdev"
var mylastName="Mitra"
var Escape="Sir said \"Do the sums!\""
console.log(Escape)
var Escape2='I said"I am older than you"'
var myStrng="This is the start." + "This is the end."
console.log(myStrng)
var xc="I come first. "
xc +="I come second"
console.log(xc)
var n="Coding Musketeers"
var ourstng="Hello, our name is "+n+", how are you?"
console.log(ourstng)
var tr= "easy!"
var tr1 = "Javascript is "
tr1 +=tr
console.log(tr1)
var lastnamelength=0
var lastname="RiddhimanCBS" 
lastnamelength=lastname.length
console.log(lastnamelength)
lastname="SoumalyaSir"
var firstLetterofLastname;
firstLetterofLastname=lastname[0]
console.log(firstLetterofLastname)
var xcs="Jello World"
xcs="Hello World"
console.log(xcs)
var fstnm="Somdev"
var secondletterofFirstName=fstnm[1]
var thirdletterofFirstName=fstnm[2]
console.log(fstnm)
console.log(secondletterofFirstName)
console.log(thirdletterofFirstName)
var fstname="Soham"
var lastletterofFstnAme=fstname[fstname.length-1]
console.log(lastletterofFstnAme)
var LetterOfFstName=fstname[fstname.length-3]
console.log(LetterOfFstName)
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
var result="";
result+="The "+myAdjective+" "+myNoun+" "+ myVerb+" "+"to the store "+myAdverb+"."
return result;}
console.log(wordBlanks("dog","big","ran", "quickly"));
console.log(wordBlanks("bike","slow","flew", "slowly"));
var ourArray = ["John", 23]
console.log(ourArray)
var ourarray1=[["the universe, 42"],["everything", 101010]];
console.log(ourarray1)
var array=[50,60,70]
var data=array[0]
console.log(data)
var actualarray=[18,64,95]
actualarray[1]=49
console.log(actualarray)
var xarray = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],13,14]
var xdata = xarray[2][1]    
console.log(xdata)
var yarray = ["Stimpson","J","cat"]
yarray.push(["happy","joy"])
console.log(yarray)
var zarray = [1,2,3]
console.log(zarray)
var removepopArray=zarray.pop();
console.log(zarray)
var barray=["Soham","Ujan","Riddhiman","Somdev"]
console.log(barray)
var removeshiftarray=barray.shift()
console.log(barray)
var carray = ["HTML","CSS","JS"]
console.log(carray)
carray.shift()
console.log(carray)
var removeunsiftarray=carray.unshift("C++")
console.log(carray)
var darray=[["John",23],["dog",3]];
console.log(darray)
darray.shift()
console.log(darray)
darray.unshift(["Paul",35])
console.log(darray) 
var myList = [["cereal",3],["milk",2],["bananas",3],["juice",2],["eggs",6]]
console.log(myList)
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
ArgumentFunction(20,25)
var myGlobal = 10;
function fun1(){
    oopsGlobal=5;
}
function fun2(){
   var output="";
   if(typeof myGlobal!="undefined") {
    output+="myGlobal:"+myGlobal;
   }
   if (typeof oopsGlobal!="undefined"){
    output+="oopsGlobal:"+oopsGlobal
   }
   console.log(output)
}
fun2();
//1st gour of course completed
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
