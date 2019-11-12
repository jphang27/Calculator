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
}

module.exports = Calculator;