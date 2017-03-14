import * as React from "react"
let FontAwesome = require("react-fontawesome")

interface HeadingInterface {
    heading: string
}

class Heading extends React.Component<HeadingInterface, {}>{

    _getIcon() {
        return (
            <FontAwesome
                name="question-circle"
                size="2x"
                style={{paddingRight: 10, verticalAlign: "middle"}}
            />
        )
    }

    render() {
        let icon = this._getIcon();
        return(
            <div className="panel-heading">
                {icon}
                <span>
                    {this.props.heading}
                </span>
            </div>
        )
    }
}

export default Heading
