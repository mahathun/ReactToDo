function add(a,b) {
  return a+b;
}

console.log(add(4,5));

var todo = [4,5];

console.log(add(...todo));
console.log(...todo);

var abc = [{"name":"dan", "age":27}];

console.log(...abc);

var groupA = ['Jen', 'Cory'];
var groupB = ['vikram'];

var final = [...groupB, 3,...groupA];

console.log(final);

function greet(name, age){
  console.log(`Hi ${name}, you are ${age}`);
}

var personOne = ['Andrew', 25];
var personTwo = ['Dan', 27];

greet(...personOne);
greet(...personTwo);

var names = ['Mike',"Ben"];
var final = ["Andrew", ...names];

console.log(final);

// foreach (name in final){
//   console.log(`Hi ${name}`);
// }

final.map(function (name) {
  console.log(`Hi ${name}`);
});

console.log(final);

for (name of final){
  console.log(`Hi ${name}`);

}

final.forEach((name)=>{
  console.log(`Hi ${name}`);
  
});
