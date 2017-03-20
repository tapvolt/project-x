
export default class InterventionStore {

    static _interventions = {
        1:  {text: "Assert Yourself"},
        2:  {text: "Assisted job search session with adviser"},
        3:  {text: "Begin CV Template"},
        4:  {text: "Benefits of Work Workshop"},
        5:  {text: "Communication Colours Workshop"},
        6:  {text: "Confidence building"},
        7:  {text: "CV Workshop"},
        8:  {text: "Dream Board Workshop"},
        9:  {text: "Effective job search practice workshop"},
        10: {text: "Embracing change workshop"},
        11: {text: "Exploring Job Goals Workshop"},
        12: {text: "Exploring your job goals"},
        13: {text: "Green Light Thinking Workshop"},
        14: {text: "Group job search session"},
        15: {text: "Identifying job goals workshop"},
        16: {text: "Job Compass Workshop"},
        17: {text: "Positive Affirmation Workshop"},
        18: {text: "Recognising Your Strengths Workshop"},
        19: {text: "SMART Goals"},
        20: {text: "Thinking Positive Workshop"},
        21: {text: "Transferable Skills Group Work"},
        22: {text: "Voluntary work as a stepping stone workshop"},
        23: {text: "Who's Hiring"},
        24: {text: "Working with a Health Condition Group Work"},
        25: {text: "Identify your transferable skills"},
    };

    static setInterventions(rawInterventions: any) : void {
        InterventionStore._interventions = rawInterventions;
    }

    static getInterventionText(id: number) : string {
        if (InterventionStore._interventions[id]) {
            return InterventionStore._interventions[id].text;
        }
        return `Sorry unknown intervention for id: ${id}`;
    }
}

