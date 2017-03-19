import * as React from "react"
import * as ReactDOM from "react-dom"
let ReactGA = require("react-ga");

import Questionnaire from "./components/questionnaire"
import QuestionStore from "./stores/questionStore"

class App extends React.PureComponent<any, any> {

    constructor() {
        super();

        ReactGA.initialize("UA-28326096-6");
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return(
            <div className="questionnaire">
                <Questionnaire questions={QuestionStore.getQuestions()} />
            </div>
        )
    }
}

/** Pow! **/
ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
