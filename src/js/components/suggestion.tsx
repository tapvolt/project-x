import * as React from "react"

import Intervention from "../models/Intervention"

interface SuggestionInterface {
    intervention: Intervention
}

class Suggestion extends React.PureComponent<SuggestionInterface, {}>{

    render() {
        let boom = this.props.intervention.description
        return(
            <div className="intervention">
                {boom}
            </div>
        )
    }
}

export default Suggestion
