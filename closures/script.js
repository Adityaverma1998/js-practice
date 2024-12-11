
// A closure is the combination of a function and the lexical environment within which that function was declared.

// In simple terms, A closure is an inner function that has access to the outer function’s variables — scope chain. 

// definition: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 


// basic function to the closure

// function outer() {
//     let x = 1;
//     function inner() {
//       let y = 2;
//       console.log(x + " " + y);
//     }
//     return inner;
//   }
  
//   let closureFunction = outer();
//   closureFunction();



//   let f = (a) => {
//     let i = 1;
//     let j = 2; //  j will not be included in closure as long as it is not used inside the inner function
//     return ()=> {
//         console.log(i +"a");
//     }
// }

// console.dir(f(1)());



//   // Points to remember:

// // The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters.



//   function sayHello(name) {
//     var text = 'Hello ' ; // Local variable
//     function say() { console.log(text + name); }
//     return say;
//   }
//   var say2 = sayHello('closure');
//   say2(); // "Hello closure"



// //   The local variables are not copied — they are kept by reference. In other words, the value of the variables inside a closure can be modified.
  
let x = 2;
function outer() {                   
  return function inner(y) {  
    return x * y               
  }                    
}
let myClosure = outer()
console.log(myClosure(5))
x = 4 

console.log(myClosure(5))

// // We can use closures to store private data.
// function initSalary() {
//     let salary = 1000; 
//     return { 
//         getSalary: function() {
//             return salary;
//         },
//         setSalary: function(s) {
//             salary = s;
//         }
//     };
// }
// output = initSalary();
// console.log(output.getSalary()); // 1
// output.setSalary(2000);
// console.log(output.getSalary()); // 2