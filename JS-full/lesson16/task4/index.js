let foo = 1;

console.log(foo);
function bar() {
  console.log(foo);
  if (!foo) {
    foo = 10;
    console.log(foo);
  }

  return foo;
}

console.log(foo);
console.log(bar());
foo = bar();
console.log(foo);
