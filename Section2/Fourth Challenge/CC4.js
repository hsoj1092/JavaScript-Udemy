var John = {
    name: 'John Smith',
    height : 1.4,
    mass : 51,
    calcBmi: function(){
        this.bmi = (this.mass/(this.height*this.height)).toFixed(2);
    }
};
John.calcBmi();
var Mark = {
    name: 'Mark Miller',
    height : 1.4,
    mass : 52,
    calcBmi: function(){
        this.bmi = (this.mass/(this.height*this.height)).toFixed(2);
    }
}; 
Mark.calcBmi();

if(John.bmi > Mark.bmi){
    console.log(John.name + " has a higher BMI index of "+ John.bmi)
}else if (Mark.bmi > John.bmi){
    console.log(Mark.name +" has a higher BMI index of "+ Mark.bmi)
}else{
    console.log("John and Mark have the same BMI index of "+ John.bmi)
};

