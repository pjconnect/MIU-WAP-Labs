class Quiz {
    questions;
    students;

    constructor(q, s){
        this.questions = q;
        this.students = s;
    }

    scoreStudent(sid) {
        var st = this.students?.find(st => st.studentId == sid);
        var totalScore = 0;
        st?.getAnswers().forEach(stq => {
            var correctQid = this.questions.find(t=>t.qid == stq.qid);
            if(correctQid.answer == stq.answer){
                totalScore++;
            }
        });

        return totalScore
    }

    getAverageScore() {
        var total = 0;
        this.students.forEach(st =>{
            total+= this.scoreStudent(st.studentId);
        })
        return total/this.students.length;
    }
}