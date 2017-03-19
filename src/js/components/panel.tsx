import * as React from "react"

import Heading from "./heading"
import Body from "./body"
import Question from "../models/Question"

interface PanelInterface {
    item: Question
}

class Panel extends React.PureComponent<PanelInterface, {}>{

    render() {
        return(
            <div className="panel panel-primary">
                <Heading question={this.props.item.question} />
                <Body id={this.props.item.id} input={this.props.item.input} />
            </div>
        )
    }
}

export default Panel
