var height=prompt('height');
var weight=prompt('weight');

var bmi, h ;
   h= Math.pow(height,2);
   bmi= (weight/h);
   if (bmi<18.5) {
       alert ("Your BMI is "+bmi+", so you are underweight");}
   else if  ((bmi>18.5) && (bmi<24.9)){
       alert ("Your BMI is "+bmi+", so you are normalweight");}
   else {
       alert ("Your BMI is "+bmi+", so you are ove");}
