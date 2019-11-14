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
        this.result = this.result / num;
        return this;
    }
    equal(){
        return this.result;
    }
    cleared(){
        this.result = 0;
        return this;
    }
    rpn(string){
        //First to check if empty string then return 0;
        if(string === undefined){
            return 0;
        }

        //Convert string to an array.
        //Switch statement helps identify which arthimetic to execute
        let arr = string.split(" "); //Split string into array
        let arr2 = [];
        let num1;
        let num2;
        let total;
        for(let i = 0; i < arr.length; i++){
            arr2.push(arr[i]);
            switch(arr[i]){
                case '+': 
                    arr2.pop();
                    num2 = Number.parseInt(arr2.pop());
                    num1 = Number.parseInt(arr2.pop());
                    total = num1 + num2;
                    break;
                case '-':
                    arr2.pop();
                    num2 = Number.parseInt(arr2.pop());
                    num1 = Number.parseInt(arr2.pop());
                    total = num1 - num2;
                    break;
                case '*':
                    arr2.pop();
                    num2 = Number.parseInt(arr2.pop());
                    num1 = Number.parseInt(arr2.pop());
                    total = num1 * num2;
                    break;
                case '/':
                    arr2.pop();
                    num2 = Number.parseInt(arr2.pop());
                    num1 = Number.parseInt(arr2.pop());
                    total = num1 / num2;
                    break; 
            }
        }

        this.result = total;
        return this.result;
    }
}

const calculators = new Calculator();
// console.log(calculators.equal());
console.log(calculators.rpn());
console.log(calculators.rpn("1 2 + "));
console.log(calculators.rpn("2 1 - "));
console.log(calculators.rpn("2 1 * "));
console.log(calculators.rpn("2 2 / "));
console.log(calculators.rpn(""))

module.exports = Calculator;