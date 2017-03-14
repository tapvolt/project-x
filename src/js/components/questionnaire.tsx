import * as React from "react"

import Panel from "./panel"
import Question from "../models/Question";

interface QuestionnaireInterface {
    questions: Array<Question>
}

class Questionnaire extends React.PureComponent<QuestionnaireInterface, {}> {

    render() {
        return(
            <div>
                {this.props.questions.map(question => (
                    <Panel key={question.id} question={question}/>
                ))}
            </div>
        )
    }
}

export default Questionnaire
