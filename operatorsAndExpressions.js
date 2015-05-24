function oddOrEven(){
    var input = document.getElementById("taskOneInput");
    if(input.value % 2 === 0) {
        document.getElementById("taskOneInput").value = "even";
    } else {
        document.getElementById("taskOneInput").value = "odd";
    }
}
function divisibleByFiveAndSeven(){
    var inputTwo = document.getElementById("taskTwoInput");
    if(inputTwo.value % 5 === 0 && inputTwo.value % 7 === 0 ){
        document.getElementById("taskTwoInput").value = "Is Divisible!";
    } else {
        document.getElementById("taskTwoInput").value = "Is NOT Divisible!"
    }
}
function calculateArea(){
    var width = document.getElementById("width");
        height = document.getElementById("height");
    document.getElementById("result").value = width.value * height.value;
}
function thirdDigitIsSeven(){
    var thirdDigit = document.getElementById("taskFourInput");
    thirdDigit = (Math.floor(thirdDigit.value/=100)) % 10;
    if (thirdDigit === 7) {
        document.getElementById("taskFourInput").value = true;
    } else {
        document.getElementById("taskFourInput").value = false;
    }
}
function findThirdBit(){
    var binary = document.getElementById("taskFiveInput").value;
    binary = (binary >> 3) & 1;
    document.getElementById("taskFiveInput").value = binary;
}
//0, 0 is the center, 2 is the radius. Using Pythagorean theorem ==> x^2 + y^2 = r^2
function pointIsInCircle() {
    var x = document.getElementById("x").value;
        y = document.getElementById("y").value;
    if((x*x) + (y*y)<=25){
        document.getElementById("inside").value = true;
    } else{
        document.getElementById("inside").value = false;
    }
}
function isPrime(){
    var primeInput = document.getElementById("taskSevenInput");
    var isPrime = true;
    if(primeInput.value < 0 || primeInput.value > 100){
        document.getElementById("taskSevenInput").value = "Please enter a positive number less than 100";
    } if(primeInput.value < 2) {
        document.getElementById("taskSevenInput").value = "Not Prime!";
    } else {
        for (var i = 2; i <= Math.sqrt(primeInput.value); i++) {
            if (primeInput.value % i === 0) {
                document.getElementById("taskSevenInput").value = "Not Prime!";
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            document.getElementById("taskSevenInput").value = "Prime!";
        }
    }
}
function trapezoidCalculateArea(){              //the rest of the tasks worked without parsing but this one didn't ...
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var h = parseFloat(document.getElementById("h").value);

    document.getElementById("trapezoidArea").value = ((a + b) / 2) * h;
}
function pointIsInCircleAndOutRectangle(){
    var xCoord = parseFloat(document.getElementById("x-coordinate").value);
        yCoord = parseFloat(document.getElementById("y-coordinate").value);
    if((xCoord * xCoord) + (yCoord * yCoord) <=9 ){
      if((xCoord >= -1 && xCoord <= 5) && (yCoord >= -1 && yCoord <= 1)){

          document.getElementById("inCircleAndOutRectangle").value = "no";
      } else{
          document.getElementById("inCircleAndOutRectangle").value = "yes";
      }
    }
}