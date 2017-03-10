import * as React from "react"
import * as ReactDOM from "react-dom"

import Questionnaire = require("./components/questionnaire")

let App = React.createClass({

    render: function() {
        return(
            <div className="questionnaire">
                <Questionnaire />
            </div>
        )
    }

});

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);


{/*<div>*/}

    {/*<div className="panel panel-primary">*/}
        {/*<div className="panel-heading"> The JS does not have a health condition or disability which may affect their employment chances and requires no support?</div>*/}
        {/*<div className="panel-body">*/}
            {/*Panel content*/}
        {/*</div>*/}
    {/*</div>*/}

{/*</div>*/}
