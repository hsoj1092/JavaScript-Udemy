var bills = [124,48,268];
var tips = [];  //empty list
var billwTips = []; //empty list
function tipActual(num){
    
}
function tipCalc(bill){
    for(var i=0;i<bill.length;i++){
        if(bill[i]<50){
            var  n = bill[i]*.20       //calculates tip set to n
            n = Number(n.toFixed(2));  //this keeps the number to 2 decimal places. tofixed creates a string but Number makes it a number again :/
            tips.push(n);              // adds it to the empty list     
            var bwt=n+bill[i];         //adds tip set as n and the current bill at bill[i]
            billwTips.push(bwt);       // adds bill with tip to new array
        }else if(bill[i]>=50 && bill[i]<200){
            var  n = bill[i]*.15
            n = Number(n.toFixed(2));
            tips.push(n);
            var bwt=n+bill[i];
            billwTips.push(bwt);
        }else if(bill[i]>=200){
            var  n = bill[i]*.10
            n = Number(n.toFixed(2));
            tips.push(n);
            var bwt=n+bill[i];
            billwTips.push(bwt); 
        }
    }   
}
tipCalc(bills);
console.log('Tips ' + tips);
console.log('Bill with tip included ' + billwTips);