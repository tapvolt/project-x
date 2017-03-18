import Question from "../models/Question"
import Intervention from "../models/Intervention"
import {QuestionKinds} from "../constants/questionConstants"

export default class QuestionStore {

    static _questions = [
        {
            id: 1,
            variable: 15,
            heading: "The JS does not have a health condition or disability which may affect their employment chances and requires no support",
            kind: QuestionKinds.MULTIPLE_CHOICE,
            agree: null,
            partial: [
                {id: 1, description: "Green Light Thinking Workshop"},
                {id: 2, description: "Transferable Skills Group Work"},
                {id: 3, description: "Working with a Health Condition Group Work"},
                {id: 4, description: "Think Positive Workshop"},
                {id: 5, description: "Begin CV Template"},
                {id: 6, description: "Identify your transferable skills"},
                {id: 7, description: "Identifying job goals workshop"},
                {id: 8, description: "Embracing Change Workshop"},
            ],
            disagree: [
                {id: 1, description: "Green Light Thinking Workshop"},
                {id: 2, description: "Transferable Skills Group Work"},
                {id: 3, description: "Working with a Health Condition Group Work"},
                {id: 4, description: "Think Positive Workshop"},
                {id: 5, description: "Identify your transferable skills"},
                {id: 6, description: "Benefits of work workshop"},
            ]
        },
        {
            id: 2,
            variable: 10,
            heading: "The JS does not have any social barriers which will prevent her/him in finding a job easily",
            kind: QuestionKinds.MULTIPLE_CHOICE,
            agree: null,
            partial: [
                {id: 1, description: "Confidence building"},
                {id: 2, description: "Thinking Positive Workshop"},
                {id: 3, description: "Recognising Your Strengths Workshop"},
            ],
            disagree: [
                {id: 1, description: "Confidence building"},
                {id: 2, description: "Embracing change"},
                {id: 3, description: "Communication Colours Workshop"},
                {id: 4, description: "Assert Yourself"},
                {id: 5, description: "Positive Affirmation Workshop"},
                {id: 6, description: "Thinking Positive Workshop"},
                {id: 7, description: "Recognising Your Strengths"},
            ]
        },
        {
            id: 3,
            variable: 15,
            heading: "The JS has a good range of relevant previous work experience and a current cv that supports achievement of job goals",
            kind: QuestionKinds.MULTIPLE_CHOICE,
            agree: null,
            partial: [
                {id: 1, description: "Voluntary work as a stepping stone workshop"},
                {id: 2, description: "CV Workshop"},
                {id: 3, description: "Exploring your job goals"},
                {id: 4, description: "Recognising Your Strengths Workshop"},
            ],
            disagree: [
                {id: 1, description: "Voluntary work as a stepping stone workshop"},
                {id: 2, description: "CV workshop"},
                {id: 3, description: "Embracing change"},
                {id: 4, description: "Recognising Your Strengths Workshop"},
                {id: 5, description: "Exploring your job goals"},
            ]
            },
        {
            id: 4,
            variable: 5,
            heading: "The JS educational background is relevant to and well-aligned with job goals",
            kind: QuestionKinds.MULTIPLE_CHOICE,
            agree: null,
            partial: [
                {id: 1, description: "Who's Hiring"},
                {id: 2, description: "Exploring Job Goals Workshop"},
            ],
            disagree: [
                {id: 1, description: "Exploring Job Goals Workshop"},
                {id: 2, description: "Who's Hiring"},
                {id: 3, description: "SMART Goals"},

            ]
        },
        {
            id: 5,
            variable: 15,
            heading: "The JS has excellent soft skills and would fit well in an organisation",
            kind: QuestionKinds.MULTIPLE_CHOICE,
            agree: null,
            partial: [
                {id: 1, description: "Communication Colours Workshop"},
                {id: 2, description: "Benefits of work"},
                {id: 3, description: "Embracing change workshop"},
            ],
            disagree: [
                {id: 1, description: "Confidence building"},
                {id: 2, description: "Embracing change"},
                {id: 3, description: "Communication Colours Workshop"},
                {id: 4, description: "Assert Yourself"},
                {id: 5, description: "Positive Affirmation Workshop"},
                {id: 6, description: "Thinking Positive Workshop"},
                {id: 7, description: "Recognising Your Strengths"},
                {id: 8, description: "Benefits of work"},
            ]
        },
        {
            id: 6,
            variable: 5,
            heading: "The JS has excellent vocational skills, relevant vocational qualifications and has attended some relevant vocational training courses",
            kind: QuestionKinds.MULTIPLE_CHOICE,
            agree: null,
            partial: [
                {id: 1, description: "Voluntary work as a stepping stone workshop"},
                {id: 2, description: "Exploring your job goals"},
            ],
            disagree: [
                {id: 1, description: "Voluntary work as a stepping stone workshop"},
                {id: 2, description: "Transferable Skills Group Work"},
                {id: 3, description: "Recognising Your Strengths Workshop"},
                {id: 4, description: "Exploring your job goals"},
            ]
        },
        {
            id: 7,
            variable: 20,
            heading: "The JS is highly motivated, wants to find a job and is confident in being able to search and apply for jobs",
            kind: QuestionKinds.MULTIPLE_CHOICE,
            agree: null,
            partial: [
                {id: 1, description: "Effective job search methods workshop"},
                {id: 2, description: "Effective job search practice workshop"},
                {id: 3, description: "Assisted job search session with advisor"},
                {id: 4, description: "Group job search session"},
                {id: 5, description: "Exploring your job goals"},
            ],
            disagree: [
                {id: 1, description: "Dream Board Workshop"},
                {id: 2, description: "Effective job search methods workshop"},
                {id: 3, description: "Effective job search practice workshop"},
                {id: 4, description: "Assisted job search session with advisor"},
                {id: 5, description: "Group job search session"},
                {id: 6, description: "Exploring your job goals"},
            ]
        },
        {
            id: 8,
            variable: 15,
            heading: "The JS has clear job goals and the JS expectations align with their experience, salary requirements and work history",
            kind: QuestionKinds.MULTIPLE_CHOICE,
            agree: null,
            partial: [
                {id: 1, description: "Job Compass Workshop"},
                {id: 2, description: "Transferable Skills Group Work"},
                {id: 3, description: "Recognising Your Strengths Workshop"},
                {id: 4, description: "Benefits of Work Workshop"},
                {id: 5, description: "Voluntary work as a stepping stone workshop"},
                {id: 6, description: "Green Light Thinking Workshop"},
            ],
            disagree: [
                {id: 1, description: "Green Light Thinking Workshop"},
                {id: 2, description: "DreamBoard Workshop"},
                {id: 3, description: "Recognising Your Strengths Workshop"},
                {id: 4, description: "Benefits of Work Workshop"},
                {id: 5, description: "Voluntary work as a stepping stone workshop"},
                {id: 6, description: "Job Compass Workshop"},
                {id: 7, description: "Transferable Skills Group Work  "},
            ]
        }
    ];

    static setQuestion(rawQuestions: any) {

    }

    static getQuestions() {
        return this._questions.map(this._createQuestion);
    }

    static _createIntervention(interventions: any) {
        if(Array.isArray(interventions)) {
            return interventions.map(function(rawIntervention: any) {
                return new Intervention(
                    rawIntervention.id,
                    rawIntervention.description
                )
            })
        }
    }

    static _createQuestion(rawQuestion: any) {
        return new Question(
            rawQuestion.id,
            rawQuestion.variable,
            rawQuestion.heading,
            rawQuestion.kind,
            QuestionStore._createIntervention(rawQuestion.agree),
            QuestionStore._createIntervention(rawQuestion.partial),
            QuestionStore._createIntervention(rawQuestion.disagree),
        )
    }
}


