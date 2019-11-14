Build a Calculator in Node, Part 1

Create a Calculator Class. The constructor should receive a starting number. Then, calculation methods may be chained on the new instance. Finally, a value is returned when the 'equals' method is exeucted. 'equals' outputs, it does not clear the register.

Supported operations: addition, subtraction, mulitplication, division

EX 1: '(new Calculator(5)).equals() // => 5'
EX 1: '(new Calculator(5)).add(3).equals() // => 8'

Calling 'clear' on the instance should reset the calculated value to 0.

EX 2: '(new Calculator(5)).clear().add(3).equals() // => 3'

Build a Calculator in Node, Part 2

Your calculator should be able to handle more than one operator, so '1 2 + 7 -' would evaluate to '-4' and
'1 2 + 7 - 2 *' would give '-8'

Implement a method in your original calculator named 'rpn'. It receives a string of characters consisting of integers, floating points, and operators. You must support the operators '+', '-', '*', '/'. An empty expression evalues to zero.

Ex 1: '(new Calculator().equals()) // => 0'
EX 2: '(new Calculator().rpn()) // => 0'
EX 3: '(new Calculator().rpn('1 2 +') //=> 3'
EX 4: '(new Calculator()).rpn('1 2 + 7 - 2 *') //=> -8'

Chaining is not a requirement for the 'rpn' method. When you complete these requirements, attempt the following additional requirements. These requirements are optional, but will be reviewed separately from those above if submitted.

- Extract the functionality into a new class to separate the standard 'Calculator' from the RPN version.
- Refactor your testts as needed to support this change.
- Prove that everything still works.
