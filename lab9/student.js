class Student{
    studentId;
    #answers = [];
    addAnswer(answer){
        this.#answers.push(answer);
    }

    getAnswers(){
        return this.#answers;
    }

    constructor(id){
        this.studentId = id;
    }
}