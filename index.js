console.log(a); // undefined

var a = 'Hosting';

function myfun() {
  console.log(b); // undefined
  b = 'Bangladesh';
  var b;
}

myfun();

//console.log(c); // ReferenceError
let c;
console.log(c); // undefined
c = 'Javascript';
console.log(c); // Javascript
