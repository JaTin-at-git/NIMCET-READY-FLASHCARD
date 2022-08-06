//This script is intended to create a Question and answer class
class QuestionAnswer {
    constructor(topic, question, answer, qEnc = "p", aEnc = "p") {
        this._topic = topic;
        this._qEnc = qEnc;
        this._question = question;
        this._answer = answer;
        this._aEnc = aEnc;
    }

    set topic(value) {
        this._topic = value;
    }

    get question() {
        return "<" + this._qEnc + ">" + this._question + "<" + this._qEnc + ">";
    }

    get answer() {
        return "<" + this._aEnc + ">" + this._answer + "<" + this._aEnc + ">";
    }

    get qEnc() {
        return this._qEnc;
    }

    get aEnc() {
        return this._aEnc;
    }

    set question(value) {
        this._question = value;
    }

    set answer(value) {
        this._answer = value;
    }

    set qEnc(value) {
        this._qEnc = value;
    }

    set aEnc(value) {
        this._aEnc = value;
    }
}
