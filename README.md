Build a Calculator in Node, Part 1

Create a Calculator Class. The constructor should receive a starting number. Then, calculation methods may be chained on the new instance. Finally, a value is returned when the 'equals' method is exeucted. 'equals' outputs, it does not clear the register.

Supported operations: addition, subtraction, mulitplication, division

EX 1: '(new Calculator(5)).equals() // => 5'
EX 1: '(new Calculator(5)).add(3).equals() // => 8'

Calling 'clear' on the instance should reset the calculated value to 0.

EX 2: '(new Calculator(5)).clear().add(3).equals() // => 3'
