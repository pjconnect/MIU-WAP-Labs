class Question{
    qid;
    answer;

    constructor(qid, answer){
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(answer){
        return answer == this.answer;
    }
}