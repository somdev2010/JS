function caseInSwitch(val){
    var answer=""
    switch(val){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta"
            break;
        case 3:
            answer="gamma"
            break;
        case 4:
            answer="delta"
    }
    return answer
}
console.log(caseInSwitch(3))
console.log(caseInSwitch(4))
console.log(caseInSwitch(1))
console.log(caseInSwitch(2))
function switchDefault(val2){
    var result="";
    switch(val2){
        case "a":
            result="Brute"
                break;
        case "b":
            result="Radical"
                break;
        case "c":
            result="Balanced"
                break;
        case "d":
            result="Defensive"
                break;
        default:
            result="Perfect"
                break;
    }
    return result
}
console.log(switchDefault("b"));
console.log(switchDefault(3))
function MultipleOptionsinSwitch(val3){
    var solution="";
    switch(val3){
    case 1:
    case 2:
    case 3:
        solution="Top Order"
        break
    case 4:
    case 5:
    case 6:
        solution="Middle Order"
        break
    case 7:
    case 8:
    case 9:
        solution="Lower Order"
        break
    }
    return solution;
}
console.log(MultipleOptionsinSwitch(8))
console.log(MultipleOptionsinSwitch(3))
console.log(MultipleOptionsinSwitch(6))
function ReplacingIfElsebySwitch(val4){
    var finalanswer=""
    switch(val4){
        case "Bob":
            finalanswer="Marley"
            break;
        case 42:
            finalanswer="The Answer"  
            break;
        case 1:
            finalanswer="There is no #1"
            break;
        case 99:
            finalanswer="Missed me by this much!"
            break;
        case 7:
            finalanswer="Ate Nine"
            break;
}
return finalanswer
}
console.log(ReplacingIfElsebySwitch("Bob"))