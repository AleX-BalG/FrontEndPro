"use strict"

const calc = new Calculator(10);

function Calculator(a) {
    this.result = a;
    this.sum = function (b) {
        this.result = this.result + b;
        console.log(this.result);
    };
    this.sub = function (b) {
        this.result = this.result - b;
        console.log(this.result);
    };
    this.mult = function (b) {
        this.result =  this.result * b;
        console.log(this.result);
    };
    this.div = function (b) {
        this.result = this.result / b;
        console.log(this.result);
    };
    this.set = function (b) {
        this.result = this.result = b;
        console.log(this.result);
    };

}

// calc.sum(5); /// 15
// calc.mult(10); // 150
// calc.sub(40); // 110
// calc.div(10); // 11
// calc.set(100); //