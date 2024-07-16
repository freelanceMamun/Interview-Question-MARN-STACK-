function test() {
  let msg = 'I am learning for ';

  return function () {
    console.log(msg, month);
  };
}
var sayMsg = test();
console.dir(sayMsg);
