import Option from "./Option"

export default class Input {
    constructor (
        public kind: number,
        public options: Array<Option>,
    ) { }
}
