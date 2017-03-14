import * as React from "react"

import Heading from "./heading"
import Body from "./body"
import Question from "../models/Question"

interface PanelInterface {
    question: Question
}

class Panel extends React.PureComponent<PanelInterface, {}>{

    render() {
        return(
            <div className="panel panel-primary">
                <Heading heading={this.props.question.heading}/>
                <Body question={this.props.question}/>
            </div>
        )
    }
}

export default Panel
