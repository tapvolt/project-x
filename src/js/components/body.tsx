import * as React from "react"
let FontAwesome = require("react-fontawesome");
import {FormGroup, Radio} from "react-bootstrap"

import Input from "../models/Input"
import {InputKinds} from "../constants/questionConstants";
import SuggestionContainer from "./suggestions/suggestionContainer";

interface BodyInterface {
    id: number,
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

    _showInterventions(e: React.FormEvent<any>) {
        this.setState({
            selection: e.currentTarget.getAttribute('data')
        })
    }

    _getInterventions() : number[] | null {
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
                                data={option.display}
                                onClick={this._showInterventions}
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
                    {interventions && interventions.map(id  => (
                        <SuggestionContainer key={id} value={id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Body
