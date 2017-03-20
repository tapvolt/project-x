import AssessmentStore from "../stores/assessmentStore"

const AssessmentActions = {

    calculate(id: number, variable: number, weight: number, answer: string) {
        AssessmentStore.setAssessment(id, variable, weight, answer)
    }

};

export default AssessmentActions
