import {InputKinds} from "../constants/questionConstants"
import Question from "../models/Question"
import Input from "../models/Input"
import Option from "../models/Option"

export default class QuestionStore {

    static _questions = [
        {
            id: 1,
            variable: 15,
            question: "The JS does not have a health condition or disability which may affect their employment " +
                "chances and requires no support",
            input: {
                kind: InputKinds.MULTIPLE_CHOICE,
                options: [
                    {
                        id: 1,
                        display: "Agree",
                        weight: 1,
                        interventions: []
                    },
                    {
                        id: 2,
                        display: "Partially agree",
                        weight: 0.5,
                        interventions: [13, 21, 24, 20, 3, 15, 25, 10]
                    },
                    {
                        id: 3,
                        display: "Disagree",
                        weight: 0,
                        interventions: [1, 21, 24, 20, 25, 4]
                    }
                ]
            }
        },
        {
            id: 2,
            variable: 10,
            question: "The JS does not have any social barriers which will prevent her/him in finding a job easily",
            input: {
                kind: InputKinds.MULTIPLE_CHOICE,
                options: [
                    {
                        id: 1,
                        display: "Agree",
                        weight: 1,
                        interventions: []
                    },
                    {
                        id: 2,
                        display: "Partially agree",
                        weight: 0.5,
                        interventions: [6, 20, 18]
                    },
                    {
                        id: 3,
                        display: "Disagree",
                        weight: 0,
                        interventions: [6, 10, 5, 1, 17, 20, 18]
                    }
                ]
            }
        },
        {
            id: 3,
            variable: 15,
            question: "The JS has a good range of relevant previous work experience and a current cv that supports " +
                "achievement of job goals",
            input: {
                kind: InputKinds.MULTIPLE_CHOICE,
                options: [
                    {
                        id: 1,
                        display: "Agree",
                        weight: 1,
                        interventions: []
                    },
                    {
                        id: 2,
                        display: "Partially agree",
                        weight: 0.5,
                        interventions: [22, 7, 12, 18]
                    },
                    {
                        id: 3,
                        display: "Disagree",
                        weight: 0,
                        interventions: [22, 7, 10, 18, 11]
                    }
                ]
            }
        },
        {
            id: 4,
            variable: 5,
            question: "The JS educational background is relevant to and well-aligned with job goals",
            input: {
                kind: InputKinds.MULTIPLE_CHOICE,
                options: [
                    {
                        id: 1,
                        display: "Agree",
                        weight: 1,
                        interventions: []
                    },
                    {
                        id: 2,
                        display: "Partially agree",
                        weight: 0.5,
                        interventions: [23, 11]
                    },
                    {
                        id: 3,
                        display: "Disagree",
                        weight: 0,
                        interventions: [11, 23, 19]
                    }
                ]
            }
        },
        {
            id: 5,
            variable: 15,
            question: "The JS has excellent soft skills and would fit well in an organisation",
            input: {
                kind: InputKinds.MULTIPLE_CHOICE,
                options: [
                    {
                        id: 1,
                        display: "Agree",
                        weight: 1,
                        interventions: []
                    },
                    {
                        id: 2,
                        display: "Partially agree",
                        weight: 0.5,
                        interventions: [5, 4, 10]
                    },
                    {
                        id: 3,
                        display: "Disagree",
                        weight: 0,
                        interventions: [6, 10, 5, 1, 17, 20, 18, 4]
                    }
                ]
            }
        },
        {
            id: 6,
            variable: 5,
            question: "The JS has excellent vocational skills, relevant vocational qualifications and has attended " +
                "some relevant vocational training courses",
            input: {
                kind: InputKinds.MULTIPLE_CHOICE,
                options: [
                    {
                        id: 1,
                        display: "Agree",
                        weight: 1,
                        interventions: []
                    },
                    {
                        id: 2,
                        display: "Partially agree",
                        weight: 0.5,
                        interventions: [22, 11, ]
                    },
                    {
                        id: 3,
                        display: "Disagree",
                        weight: 0,
                        interventions: [22, 21, 18, 11]
                    }
                ]
            }
        },
        {
            id: 7,
            variable: 20,
            question: "The JS is highly motivated, wants to find a job and is confident in being able to search and " +
            "apply for jobs",
            input: {
                kind: InputKinds.MULTIPLE_CHOICE,
                options: [
                    {
                        id: 1,
                        display: "Agree",
                        weight: 1,
                        interventions: []
                    },
                    {
                        id: 2,
                        display: "Partially agree",
                        weight: 0.5,
                        interventions: [9, 2, 14, 11]
                    },
                    {
                        id: 3,
                        display: "Disagree",
                        weight: 0,
                        interventions: [8, 9, 2, 14, 11, 21]
                    }
                ]
            }
        },
        {
            id: 8,
            variable: 15,
            question: "The JS has clear job goals and the JS expectations align with their experience, salary " +
                "requirements and work history",
            input: {
                kind: InputKinds.MULTIPLE_CHOICE,
                options: [
                    {
                        id: 1,
                        display: "Agree",
                        weight: 1,
                        interventions: []
                    },
                    {
                        id: 2,
                        display: "Partially agree",
                        weight: 0.5,
                        interventions: [16, 21, 18, 4, 22, 13]
                    },
                    {
                        id: 3,
                        display: "Disagree",
                        weight: 0,
                        interventions: [13, 8, 18, 4, 22, 16, 21]
                    }
                ]
            }
        }
    ];

    static setQuestion(rawQuestions : any) {
    }

    static getQuestions() : Array<Question> {
        return this._questions.map(this._createQuestion);
    }

    static _createQuestion(rawQuestion : any) : Question {
        return new Question(
            rawQuestion.id,
            rawQuestion.variable,
            rawQuestion.question,
            QuestionStore._createInput(rawQuestion.input)
        )
    }

    static _createInput(rawInput : any) : Input {
        return new Input(
            rawInput.kind,
            QuestionStore._createOptions(rawInput.options)
        );
    }

    static _createOptions(rawOptions : any) : Array<Option> {
        return rawOptions.map( (rawOption : any) => {
            return new Option(
                rawOption.id,
                rawOption.display,
                rawOption.weight,
                rawOption.interventions
            );
        })
    }
}
