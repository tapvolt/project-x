import Question from "../models/Question"

export default class QuestionStore {

    static _questions = [
        {
            id: 1,
            variable: 15,
            heading: "The JS does not have a health condition or disability which may affect their employment chances and requires no support",
            agree: null,
            partial: [
                {description: "Green Light Thinking Workshop"},
                {description: "Transferable Skills Group Work"},
                {description: "Working with a Health Condition Group Work"},
                {description: "Think Positive Workshop"},
                {description: "Begin CV Template"},
                {description: "Identify your transferable skills"},
                {description: "Identifying job goals workshop"},
                {description: "Embracing Change Workshop"},
            ],
            disagree: [
                {description: "Green Light Thinking Workshop"},
                {description: "Transferable Skills Group Work"},
                {description: "Working with a Health Condition Group Work"},
                {description: "Think Positive Workshop"},
                {description: "Identify your transferable skills"},
                {description: "Benefits of work workshop"},
            ]
        },
        {
            id: 2,
            variable: 10,
            heading: "The JS does not have any social barriers which will prevent her/him in finding a job easily",
            agree: null,
            partial: [
                {description: "Confidence building"},
                {description: "Thinking Positive Workshop"},
                {description: "Recognising Your Strengths Workshop"},
            ],
            disagree: [
                {description: "Confidence building"},
                {description: "Embracing change"},
                {description: "Communication Colours Workshop"},
                {description: "Assert Yourself"},
                {description: "Positive Affirmation Workshop"},
                {description: "Thinking Positive Workshop"},
                {description: "Recognising Your Strengths"},
            ]
        },
        {
            id: 3,
            variable: 15,
            heading: "The JS has a good range of relevant previous work experience and a current cv that supports achievement of job goals",
            agree: null,
            partial: [
                {description: "Voluntary work as a stepping stone workshop"},
                {description: "CV Workshop"},
                {description: "Exploring your job goals"},
                {description: "Recognising Your Strengths Workshop"},
            ],
            disagree: [
                {description: "Voluntary work as a stepping stone workshop"},
                {description: "CV workshop"},
                {description: "Embracing change"},
                {description: "Recognising Your Strengths Workshop"},
                {description: "Exploring your job goals"},
            ]
            },
        {
            id: 4,
            variable: 5,
            heading: "The JS educational background is relevant to and well-aligned with job goals",
            agree: null,
            partial: [
                {description: "Who's Hiring"},
                {description: "Exploring Job Goals Workshop"},
            ],
            disagree: [
                {description: "Exploring Job Goals Workshop"},
                {description: "Who's Hiring"},
                {description: "SMART Goals"},

            ]
        },
        {
            id: 5,
            variable: 15,
            heading: "The JS has excellent soft skills and would fit well in an organisation",
            agree: [{}],
            partial: [
                {description: "Communication Colours Workshop"},
                {description: "Benefits of work"},
                {description: "Embracing change workshop"},
            ],
            disagree: [
                {description: "Confidence building"},
                {description: "Embracing change"},
                {description: "Communication Colours Workshop"},
                {description: "Assert Yourself"},
                {description: "Positive Affirmation Workshop"},
                {description: "Thinking Positive Workshop"},
                {description: "Recognising Your Strengths"},
                {description: "Benefits of work"},
            ]
        },
        {
            id: 6,
            variable: 5,
            heading: "The JS has excellent vocational skills, relevant vocational qualifications and has attended some relevant vocational training courses",
            agree: [{}],
            partial: [
                {description: "Voluntary work as a stepping stone workshop"},
                {description: "Exploring your job goals"},
                {description: "Exploring your job goals"},
            ],
            disagree: [
                {description: "Voluntary work as a stepping stone workshop"},
                {description: "Transferable Skills Group Work"},
                {description: "Recognising Your Strengths Workshop"},
                {description: "Exploring your job goals"},
            ]
        },
        {
            id: 7,
            variable: 20,
            heading: "The JS is highly motivated, wants to find a job and is confident in being able to search and apply for jobs",
            agree: [{}],
            partial: [
                {description: "Effective job search methods workshop"},
                {description: "Effective job search practice workshop"},
                {description: "Assisted job search session with advisor"},
                {description: "Group job search session"},
                {description: "Exploring your job goals"},
            ],
            disagree: [
                {description: "Dream Board Workshop"},
                {description: "Effective job search methods workshop"},
                {description: "Effective job search practice workshop"},
                {description: "Assisted job search session with advisor"},
                {description: "Group job search session"},
                {description: "Exploring your job goals"},
            ]
        },
        {
            id: 8,
            variable: 15,
            heading: "The JS has clear job goals and the JS expectations align with their experience, salary requirements and work history",
            agree: [{}],
            partial: [
                {description: "Job Compass Workshop"},
                {description: "Transferable Skills Group Work"},
                {description: "Recognising Your Strengths Workshop"},
                {description: "Benefits of Work Workshop"},
                {description: "Voluntary work as a stepping stone workshop"},
                {description: "Green Light Thinking Workshop"},
            ],
            disagree: [
                {description: "Green Light Thinking Workshop"},
                {description: "DreamBoard Workshop"},
                {description: "Recognising Your Strengths Workshop"},
                {description: "Benefits of Work Workshop"},
                {description: "Voluntary work as a stepping stone workshop"},
                {description: "Job Compass Workshop"},
                {description: "Transferable Skills Group Work  "},
            ]
        }
    ];

    static getQuestions() {
        return this._questions.map(this._createQuestion);
    }

    static _createQuestion(rawQuestion: any) {
        return new Question(
            rawQuestion.id,
            rawQuestion.variable,
            rawQuestion.heading,
            rawQuestion.agree,
            rawQuestion.partial,
            rawQuestion.disagree
        )
    }
}


