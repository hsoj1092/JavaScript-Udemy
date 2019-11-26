var bills = [124,48,268,180,42];
var tips = [];  //empty list
var billwTips = []; //empty list
var  n = 0;
var bwt = 0;
function tipCalc(bill){
    for(var i=0;i<bill.length;i++){
        if(bill[i]<50){
            n = Number((bill[i]*.20).toFixed(2));       //calculates tip set to n //this keeps the number to 2 decimal places. tofixed creates a string but Number makes it a number again :/
            tips.push(n);              // adds it to the empty list     
            bwt=n+bill[i];         //adds tip set as n and the current bill at bill[i]
            billwTips.push(bwt);       // adds bill with tip to new array
        }else if(bill[i]>=50 && bill[i]<200){
            n = Number((bill[i]*.15).toFixed(2));
            tips.push(n);
            bwt=n+bill[i];
            billwTips.push(bwt);
        }else if(bill[i]>=200){
            n = Number((bill[i]*.10).toFixed(2));
            tips.push(n);
            bwt=n+bill[i];
            billwTips.push(bwt); 
        }
    }   
}
tipCalc(bills);
console.log('Tips ' + tips);
console.log('Bill with tip included ' + billwTips);