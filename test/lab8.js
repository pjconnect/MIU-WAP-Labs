'use strict'

// 1
let student1 = {
    firstName : "",
    lastName: "",
    grades: [],
    inputNewGrades: function(g){
        this.grades.push(g);
        return this.grades;
    },
    computeAverageGrade: function(){
        return this.grades.reduce((t, a) => t+a) / this.grades.length;
    }
}

let james = Object.create(student1);
let camilly = Object.create(student1);
james.inputNewGrades(33)
james.inputNewGrades(24)
camilly.inputNewGrades(55);
camilly.inputNewGrades(54);
console.log(james.computeAverageGrade());


//2
function student(fname, lname){
    this.fname = fname;
    this.lname = lname;
    this.grades = [];
}
student.prototype.inputNewGrade = function (g){
    this.grades.push(g);
}

student.prototype.computeAverageGrade = function(){
    return this.grades.reduce((t, a) => t+a) / this.grades.length;
}

//3
Array.prototype.mysort = function(){
    return this.sort((a,b) => a-b);
}

const st1 = new student("jjthombson", "ab");
st1.inputNewGrade(33);
st1.inputNewGrade(32);
st1.inputNewGrade(56);
console.log(st1.grades.mysort());
