import React from "react";
import "./Demo.scss"
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handlShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';

        return (
            <>
                {
                    showJobs === false ?

                        <div>
                            <button className="btnShow"
                                onClick={() => this.handlShowHide()}>show</button>

                        </div>
                        :
                        <> <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {

                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> x
                                        </div>
                                    )
                                })
                            }

                        </div>
                            <div><button onClick={() => this.handlShowHide()}>hide</button></div>
                        </>
                }
            </>

        )
    }
}

export default ChildComponent;