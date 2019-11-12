class Calculator{
    //Maybe change number to results later on for semantic clarity?
    constructor(result){
        this.result = result;
    }

     add(num){
         this.result += num;
         return this.result;
    }

    subtract(num1, num2){
        return this.result = num1-num2;
    }
    multiply(num1, num2){
        return this.result = num1*num2;
    }
    divide(num1, num2){
        if(num2 === 0){
            return undefined;
        }
        return this.result = num1/num2;
    }
    equal(){
        return this.result;
    }
}

//Manual testing.
//Testing for later
// const mycalculator = new Calculator();
// console.log("My result: " + mycalculator.add(5,5)); //results should be 10
// console.log("My result: " + mycalculator.subtract(5,7)); //result should be -2
// console.log("My result: " + mycalculator.multiply(2,5)); //results should be 10
// console.log("My result: " + mycalculator.divide(10,2)); //result should be 5

// const mycalculator2 = new Calculator(0);
// console.log("My result: " + mycalculator2.add(5).add(5)); //results should be 10

const mycalculator2 = new Calculator(0);
console.log("My result: " + mycalculator2.equal()); //results should be 0