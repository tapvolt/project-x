import * as React from "react"
let FontAwesome = require("react-fontawesome");
import {FormGroup, Radio} from "react-bootstrap"

import Input from "../models/Input"
import {InputKinds} from "../constants/questionConstants";
import SuggestionContainer from "./suggestions/suggestionContainer";
import AssessmentActions from "../actions/assessmentActions";
import Option from "../models/Option";

interface BodyInterface {
    id: number,
    variable: number,
    input: Input
}

class Body extends React.Component<BodyInterface, {selection: string}>{

    constructor(props: BodyInterface) {
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
        return "groupOptions_" + this.props.id
    }

    _showInterventions(option: Option) {

        this.setState({
            selection: option.display
        });
        AssessmentActions.calculate(
            this.props.id,
            this.props.variable,
            option.weight, // @todo weight
            option.display
        );
    }

    _getInterventions(): number[] | null {
        if (this.state.selection) {
            for (let i = 0; i < this.props.input.options.length; i++) {
                if (this.props.input.options[i].display == this.state.selection) {
                    return this.props.input.options[i].interventions;
                }
            }
        }
    }

    /** @todo Move icon out of form **/
    _getInput() {
        switch (this.props.input.kind) {

            case InputKinds.MULTIPLE_CHOICE:
                let icon = this._getIcon();
                let group = this._getGroupOptions();
                return(
                    <FormGroup style={{marginBottom: 0}}>
                        {icon}
                        {this.props.input.options.map(option => (
                            <Radio
                                key={option.id}
                                onClick={ () => this._showInterventions(option) }
                                name={group}
                                inline
                                style={{paddingRight: 70}}>
                                {option.display}
                            </Radio>
                        ))}
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
        let input = this._getInput();
        let interventions = this._getInterventions();
        return(
            <div>
                <div className="panel-body">
                    {input}
                </div>

                <div className="panel-body">
                    {interventions && interventions.map(id => (
                        <SuggestionContainer key={id} value={id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Body
