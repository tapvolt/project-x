export default class Option {
    constructor (
        public id: number,
        public display: string,
        public weight: number,
        public interventions: number[]
    ) { }
}
