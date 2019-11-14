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
        if(string === ""){
            console.log("this is: " + this.result);
            this.result = "0";
            return this.result;
        }

        //Convert string to an array.
        //Switch statement helps identify which arthimetic to execute
        let arr = string.split(); //Split string into array
        for(let i = 0; i < arr.length; i++){
            let arr2 = arr[i];
        switch(arr2){
            case '+': container = parseInt(arr2[i].toString()) + parseInt(arr2[i + 1].toString());
            return container;
        }
    }


        // let arr = [];
        // switch(arr){
        //     case: '+'
        // }
    }
}

const calculators = new Calculator();
// console.log(calculators.equal());
console.log(calculators.rpn("1 2 +"));

module.exports = Calculator;