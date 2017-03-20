import * as React from "react"
import * as ReactDOM from "react-dom"
let ReactGA = require("react-ga");

import Ranking from "./components/ranking"
import Questionnaire from "./components/questionnaire"
import QuestionStore from "./stores/questionStore"
import AssessmentStore from "./stores/assessmentStore"

class App extends React.PureComponent<any, any> {

    constructor() {
        super();

        AssessmentStore.init();

        ReactGA.initialize("UA-28326096-6");
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return(
            <div>
                <div className="ranking">
                    <Ranking />
                </div>
                <div className="questionnaire">
                    <Questionnaire questions={QuestionStore.getQuestions()} />
                </div>

            </div>

        )
    }
}

/** Pow! **/
ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
