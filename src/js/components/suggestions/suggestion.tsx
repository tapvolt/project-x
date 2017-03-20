import * as React from "react"
let FontAwesome = require("react-fontawesome")

interface SuggestionInterface {
    value: string
}

class Suggestion extends React.PureComponent<SuggestionInterface, {}>{

    _getIcon() {
        return (
            <FontAwesome
                name="dot-circle-o"
                size="lg"
                style={{paddingRight: 10, verticalAlign: "middle"}}
            />
        )
    }

    render() {
        let icon = this._getIcon();
        return(
            <div className="intervention">
                {icon} {this.props.value}
            </div>
        )
    }
}

export default Suggestion
