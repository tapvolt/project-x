import * as React from "react"
let FontAwesome = require("react-fontawesome")

import {FormGroup, Radio} from "react-bootstrap"
import Question from "../models/Question"

interface BodyInterface {
    question: Question
}

class Body extends React.Component<BodyInterface, {}>{

    _getIcon() {
        return (
            <FontAwesome
                name="pencil-square-o"
                size="2x"
                style={{paddingRight: 50, verticalAlign: "middle"}}
            />
        )
    }

    render() {
        let icon = this._getIcon();
        return(
            <div className="panel-body">
                <FormGroup style={{marginBottom: 0}}>
                    {icon}
                    <Radio name="groupOptions" inline style={{paddingRight: 70}}>Agree</Radio>
                    <Radio name="groupOptions" inline style={{paddingRight: 70}}>Partially disagree</Radio>
                    <Radio name="groupOptions" inline style={{paddingRight: 70}}>Disagree</Radio>
                </FormGroup>
            </div>
        )
    }
}

export default Body
