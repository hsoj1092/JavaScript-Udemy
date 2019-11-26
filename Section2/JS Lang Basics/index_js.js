var johnMass=prompt('John weight in kg?');
var johnHeight=prompt('John height in meters?');
var markMass=prompt('John weight in kg?');
var markHeight=prompt('John height in meters?');

var johnBMI, markBMI;
johnBMI = johnMass/(johnHeight*johnHeight);

markBMI= markMass/(markHeight*markHeight);

var isMarkBigger= markBMI > johnBMI;

console.log(isMarkBigger);