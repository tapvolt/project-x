import Input from "./Input"

export default class Question {
    constructor (
        public id: number,
        public variable: number,
        public question: string,
        public input: Input,
    ) { }
 }



