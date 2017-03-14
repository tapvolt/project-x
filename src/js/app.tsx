import * as React from "react"
import * as ReactDOM from "react-dom"

import Questionnaire from "./components/questionnaire"
import QuestionStore from "./stores/questionStore"

class App extends React.PureComponent<any, any> {

    render() {
        return(
            <div className="questionnaire">
                <Questionnaire questions={QuestionStore.getQuestions()}/>
            </div>
        )
    }
}

/** Pow! **/
ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
