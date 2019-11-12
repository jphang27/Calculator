class Calculator{
    constructor(result){
        this.result = result;
    }

     add(num){
         this.result += num;
         return this;
    }

    subtract(num){
        this.result  -= num;
        return this;
    }

    multiply(num){
        this.result *= num;
        return this;
    }
    divide(num){
        if(num === 0){
            return undefined;
        }
        return this;
    }
    equal(){
        return this.result;
    }
    cleared(){
        this.result = 0;
        return this;
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

//const mycalculator2 = new Calculator(0);
//console.log("My result: " + mycalculator2.add(15).subtract(10).multiply(5).cleared().add(5).equal()); //results should be 10

module.exports = Calculator;