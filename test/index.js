
let a = "";
console.log(a);
function a(){
    return "ff";
}

console.log(a);

let animal = {
    sleep: function () {
        this.sleeping = true;
    },
    walk: function () {
        if (!this.sleeping) {
            console.log('animal walking');
        } else {
            console.log('animal is sleeping');
        }
    }
}
let rabbit = {
    jump: true,
    sleep: function () {
        console.log('Sleeping!');
        function x() {

        }
    },
    abc() {

    }
};
rabbit = Object.create(animal);
animal.eat = true;
console.log('r', rabbit)
console.log(animal)



// //first way
// let james = {
//     firstName: 'abc'
// }
// let abc = {
//     firstName: 'abc'
// }

// //second way

// function parent(){
//     let x = 10;
//     function child(a){
//         let w = 0;
//         alert(x);
//     }
// }

// function createObj(name) {
//     return {
//         firstName: name
//     }
// }

// james = createObj("abc");
// james = createObj("abc");

// //using class keyword (using constructor)
// function myClass(){

// }

// james = new myClass();


