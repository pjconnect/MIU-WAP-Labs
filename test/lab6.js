"use strict";

x = 1;

var a = 5;

var b = 10;

var c = function (a, b, c) {
  document.write(x);

  document.write(a);

  var f = function (a, b, c) {
    b = a;

    document.write(b);

    b = c;

    var x = 5;
  };

  f(a, b, c);

  document.write(b);

  var x = 10;
};

c(8, 9, 10);

document.write(b);

document.write(x);

//solution:

/**

* Global EC: creation

* LE: {outer: null,a:undefined,b:undefined,c:undefined}

* Execution with normal mode

* LE: {outer: null,a:5,b:10,c:fn(),x = 1}

*

* c function EC: creation

* LE: {outer: Global,

* arguments: {0:8,1:9,2:10,length: 3}

* a = 8,b = 9, c = 10

* f: undefined

* x: undefined,

* }

* c function Execution

* LE: {

* arguments: {0:8,1:9,2:10,length: 3}

* a = 8,b = 9, c = 10

* f: fn()

* x: 10,

*

* }

* f function EC : creation

* LE: { outer: c EC, arguments: {0:8,1: 9,2: 10, length: 3}

* x: undefined,

* }

* Execution:

* {

* a = 8,b = 9, c = 10

* x: 5;

* }

*

* OUTPUT => with strict mode it will throw an error because of the first line, attempt to assign non defined variable.

* => with out strict mode = Undefined889101

*/

var x = 9;

function myFunction() {
  return x * x;
}

document.write(myFunction());

x = 5;

document.write(myFunction());

/**

* Global EC: creation

* LE: {outer: null,x:undefined}

* execution:

* {

* x = 9;

*

* }

* {

* x = 5}

*

* OUTPUT => 8125

*/

var foo = 1;

function bar() {
  console.log(foo);

  console.log(!foo);

  if (!foo) {
    var foo = 10;
  }

  alert(foo);
}

bar();

/**

* Global EC : creation {

* outer: null,

* foo: undefined

* bar: fn()

* }

* execution {

* foo : 1,

* bar: fn()

*

* }

* bar EC : creation

* LE: {

* foo: undefined

* argument: {0,length:0}

* }

* execution {

* foo: 10

* }

* OUTPUT => alert dialog box with content of 10;

*

*/
