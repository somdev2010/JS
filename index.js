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
var testArr = [1,2,3,4,5];
console.log("Before:"+JSON.stringify(testArr));
console.log((testArr,6));
console.log("After:"+JSON.stringify(testArr));
function welcometoBooleans(){
    return false; 
}
function ourTrueOrFalse(isItTrue){
    if (isItTrue){
        return"Yes its true";
    }
    return"No its false";
}
console.log()
console.log(ourTrueOrFalse(false));
function testEqual(val){
    if (val==12){
        return "Equal"
    }
    return "Not Equal"
}
console.log(testEqual(10))
console.log(testEqual(12))
function testStrict(val2){
    if (val2===7){
        return "Equal"; 
    }
    return "Not Equal"}
console.log(testStrict(7))
console.log(testStrict("7"))
function compareEqualtiy(a,b){
    if (a==b){
        return "Equal"
    }
    return "Not Equal"
}
console.log(compareEqualtiy(10,"10"))
function notEqualTest(val3){
    if (val3!=99){
        return "Not Equal"
    }
    return "Equal"
}
console.log(notEqualTest(10));
function notEqualStrictTest(val4){
    if (val4!==17){
        return "Not Equal"
    }
    return "Equal"    
}
console.log(notEqualStrictTest(17))
function Greaterthan100(val5){
    if (val5>=100){
        return "Over 100"
    }
        if (val5>=10){
            return "Over 10"
        }
    return "10 or under"
}
console.log(Greaterthan100(25))
console.log(Greaterthan100(5))
console.log(Greaterthan100(105))
function Greaterthan100(val6){
    if (val6<=55){
        return "Less than 55"
    }
    return "25 or under"
}
console.log(Greaterthan100(25))
console.log(Greaterthan100(5))
console.log(Greaterthan100(65))
function testLogicalOperatorsAnd(nval){
    if (nval<=50 && nval>=25){
            return "Yes";
        }
        return "No";
    }
console.log(testLogicalOperatorsAnd(30))
console.log(testLogicalOperatorsAnd(5))
function testLogicalOperatorsOr(n1val){
    if (n1val<10 || n1val>20){
            return "Outside";
        }
        return "Inside";
    }
console.log(testLogicalOperatorsOr(30))
console.log(testLogicalOperatorsOr(18))
function testElse(xnum)
{
    var result="";
if (xnum>5)
{
    result="Bigger than 5"
}
else
{
    result="5 or smaller";
}
return result;
}
console.log(testy(4));
function testElseIf(ynum){
    if(ynum>10){
        return "Greater than 10";
    }else if (ynum<5){
        return "Smaller than 5"
    }else{
        return "Between 5 and 10";
    }

}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(`Who are you`, age => {
    console.log(`Hi ${age}!`);
    readline.close();
  });
  

