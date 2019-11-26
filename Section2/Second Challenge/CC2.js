var johnGame1 =Number(prompt('John\'s game 1 score:'));
var johnGame2 =Number(prompt('John\'s game 2 score:'));
var johnGame3 =Number(prompt('John\'s game 3 score:'));
var mikeGame1 =Number(prompt('Mike\'s game 1 score:'));
var mikeGame2 =Number(prompt('Mike\'s game 2 score:'));
var mikeGame3 =Number(prompt('Mike\'s game 3 score:'));

var johnAvg = (johnGame1 + johnGame2 + johnGame3)/3;
var mikeAvg = (mikeGame1 + mikeGame2 + mikeGame3)/3;

if(johnAvg > mikeAvg ){
    console.log('John\'s team has a better score average at '+ johnAvg);
}else if (mikeAvg > johnAvg ){
    console.log('Mike\'s team has a better score average at '+ mikeAvg);
}else{
    console.log("Both teams have the same score average of " + johnAvg);
}