import * as React from "react"

import AssessmentStore from "../stores/assessmentStore";

class Ranking extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            count: AssessmentStore.getCount(),
            all: AssessmentStore.getAll(),
            score: AssessmentStore.getScore(),
        };
    }

    componentDidMount() {
        AssessmentStore.addListener("change", () => {
            this.setState({
                count: AssessmentStore.getCount(),
                all: AssessmentStore.getAll(),
                score: AssessmentStore.getScore(),
            })
        });
    }

    componentWillUnmount() {
    }

    render() {
        return(
            <div>
                This is a ranking: The question count is {this.state.count}, the assessment score is {this.state.score}%
            </div>
        )
    }
}

export default Ranking
