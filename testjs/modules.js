//console.log(arguments)


//exports
const C = require('./test-module-1')
const c = new C();
console.log(c.add(5,10));
const calc2 = require('./test-module-2')
console.log(calc2.add(2,6))
const { add, multiply, divide } = require('./test-module-2')
console.log(multiply(4,5))

//caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
