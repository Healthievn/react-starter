import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {

    state = {

        arrJobs: [
            { id: '1', titel: 'developer', salary: 500 },
            { id: '2', titel: 'developer2', salary: 600 },
            { id: '3', titel: 'tester', salary: 550 }
        ]
    }
    addNewJob = (job) => {
        console.log('day:', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }



    render() {

        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob} />
                <ChildComponent


                    arrJobs={this.state.arrJobs}
                />
            </>

        )
    }
}
export default MyComponent;