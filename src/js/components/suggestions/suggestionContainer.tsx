import * as React from "react"
import Suggestion from "./suggestion";
import InterventionStore from "../../stores/interventionStore";

interface SuggestionContainerInterface {
    value: number
}

class SuggestionContainer extends React.PureComponent<SuggestionContainerInterface, any>{

    constructor(props : SuggestionContainerInterface) {
        super(props);
        this._getIntervention = this._getIntervention.bind(this)
    }

    _getIntervention() {
        return InterventionStore.getInterventionText(this.props.value)
    }

    render() {
        return <Suggestion value={this._getIntervention()} />
    }
}

export default SuggestionContainer
