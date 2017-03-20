import {EventEmitter} from "fbemitter"

const emitter = new EventEmitter();


const agree = 1;
const partial = 0.5;
const disagree = 0;

export default class AssessmentStore {

    static _ranking = 0;
    static _answers = {};
    static _score = 0;

    static init() : void {
        console.log("init");
        emitter.emit("change");
    }

    static addListener(eventType: string, fn: Function) {
        console.log("AssessmentStore addListener");
        emitter.addListener(eventType, fn)
    }

    static setAssessment(id: number, variable: number, weight: number, answer: string): void {
        this._answers[id]= {
            variable: variable,
            weight: weight,
            answer: answer
        };
        this._calculateScore();
        emitter.emit("change");
    }

    static _calculateScore(): void {
        this._score = 0;
        let ids = Object.keys(this._answers);
        ids.forEach((id) => {
            let item = this._answers[id];
            this._score += agree * item.weight * item.variable;
        })
    }

    static getCount() : number {
        return Object.keys(this._answers).length;
    }

    /** debug **/
    static getAll(): {} {
        return this._answers;
    }

    static getScore(): number {
        return this._score;
    }

}
