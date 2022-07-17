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
console.log(testElse(4));
function testElseIf2(ynum){
    if(ynum>10){
        return "Greater than 10";
    }else if (ynum<5){
        return "Smaller than 5"
    }else{
        return "Between 5 and 10";
    }
}
console.log(testElseIf2(7))
function Nologicalorder(znum){
    if(znum<10){
        return"Lesser than 10"
    }else if(znum<5){
        return"Lesser than 5"
    }else{
        return "Greater than or equal to 10";
    }
}
console.log(Nologicalorder(3))
function logicalorder(znum){
    if(znum<5){
        return"Lesser than 5"
    }else if(znum<10){
        return"Lesser than 10"
    }else{
        return "Greater than or equal to 10";
    }
}
console.log(logicalorder(3))
function testSizeChainIfElse(xval){
    if (xval<5){
        return "Tiny"
    }else if(xval<10){
        return "Small"
    }else if(xval<15){
        return "Medium"
    }else if(xval<20){
        return"Large"
    }else{
        return "Huge"
    }
}
console.log(testSizeChainIfElse(3))
console.log(testSizeChainIfElse(7))
console.log(testSizeChainIfElse(11))
console.log(testSizeChainIfElse(17))
console.log(testSizeChainIfElse(22))

