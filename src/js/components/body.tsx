import * as React from "react"
let FontAwesome = require("react-fontawesome");
import {FormGroup, Radio} from "react-bootstrap"

import Question from "../models/Question"
import Suggestion from "./suggestion"
import Intervention from "../models/Intervention";
import {QuestionKinds} from "../constants/questionConstants";

interface BodyInterface {
    question: Question
}

class Body extends React.Component<BodyInterface, {selection: string}>{

    constructor(props) {
        super(props);
        this.state = {
            selection: null
        };

        this._showInterventions = this._showInterventions.bind(this);
    }

    _getIcon() {
        return (
            <FontAwesome
                name="pencil-square-o"
                size="2x"
                style={{paddingRight: 50, verticalAlign: "middle"}}
            />
        )
    }
    _getGroupOptions() {
        return "groupOptions_" + this.props.question.id
    }

    _showInterventions(e: React.FormEvent<any>) {
        /** emit event of data, variable **/
        console.log('boom %s %s',  e.currentTarget.getAttribute('data'), this.props.question.variable)
        this.setState({
            selection: e.currentTarget.getAttribute('data')
        })

    }

    _getSuggestions():  Array<Intervention> | null {
        if (this.props.question.hasOwnProperty(this.state.selection)) {
            let key = this.state.selection;
            return this.props.question[key];
        }
    }

    /** @todo Move icon out of form **/
    _getComponentForQuestionType() {
        switch (this.props.question.kind) {

            case QuestionKinds.MULTIPLE_CHOICE:
                let icon = this._getIcon();
                let group = this._getGroupOptions();
                return(
                    <FormGroup style={{marginBottom: 0}}>
                        {icon}
                        <Radio data="agree" onClick={this._showInterventions} name={group} inline style={{paddingRight: 70}}>Agree</Radio>
                        <Radio data="partial" onClick={this._showInterventions} name={group} inline style={{paddingRight: 70}}>Partially disagree</Radio>
                        <Radio data="disagree" onClick={this._showInterventions} name={group} inline style={{paddingRight: 70}}>Disagree</Radio>
                    </FormGroup>
                );

            default:
                return(
                    <div>
                        Unknown
                    </div>
                )
        }
    }

    render() {
        let comp = this._getComponentForQuestionType();
        let suggestions = this._getSuggestions();
        return(
            <div>
                <div className="panel-body">
                    {comp}
                </div>

                <div className="panel-body">
                    {suggestions && suggestions.map(intervention  => (
                        <Suggestion key={intervention.id} intervention={intervention}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Body
