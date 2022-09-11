import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowhide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('>>> handleOnClickDelete: ', job);
        this.props.deleteJob(job)
    }


    render() {
        let {arrJobs} = this.props
        let {showJobs} =this.state;
        return(
            <>
            {showJobs === false ?  <div><button onClick={() => this.handleShowhide()}>Show</button></div>
            :
                <>
                    <div className="jobs-list">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary} <button onClick={() => this.handleOnClickDelete(item)}>X</button>
                            </div>
                        )
                    })
                }
                    </div>
                    <div><button onClick={() => this.handleShowhide()}>Hide</button></div>
                </>
            }

            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log('>>> check:', props);
//     let {arrJobs} = props
//         return(
//             <>
//             <div className="jobs-list">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )

//                         }
//                     })
//                 }
//             </div>
//             </>
//         )
// }

export default ChildComponent;

