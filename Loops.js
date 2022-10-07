//For Loop:
var ourlist=[];
for (var i=0; i<5; i++)
{
    ourlist.push(i);
}
console.log(ourlist)
var myListown=[]
for (var a=0; a<50; a++){
    myListown.push(a)
}
console.log(myListown)
//Break-statement:
var breakArray=[];
for (var b=0; b<10; b++)
{
    if (b>2) break;
    breakArray.push(b) 
}
console.log(breakArray)
var arr=[10,8,8,7,6,];  
for(var a=0; a<arr.length; a++){
    console.log(arr[a])
}
var multiarrnested=[[1,2],[3,4],[5,6]]
for(var b=0; b<multiarrnested.length; b++){
    for(var v=0; v<multiarrnested[b].length; v++){
        console.log(multiarrnested[b][v])
    }
}