import Intervention from "./Intervention"

export default class Question {
    constructor (
        public id: number,
        public variable: number,
        public heading: string,
        public agree: Array<Intervention> | null,
        public partial: Array<Intervention> | null,
        public disagree: Array<Intervention> | null
    ) { }
 }



