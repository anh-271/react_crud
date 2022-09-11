import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        firstName : '',
        lastName: '',
        arrJobs: [
            {id: 'mh1' , title:'Develop', salary:'500'},
            {id: 'mh2' , title:'Tester', salary:'200'},
            {id: 'mh3' , title:'PM', salary:'1000'}
        ]
    }

   
    addNewJob = (job) => {
        console.log('haha:',job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    
    deleteJob =(job) => {
        let currenJobs = this.state.arrJobs
        currenJobs = currenJobs.filter(item => item.id !==job.id)
        this.setState({
            arrJobs: currenJobs
        })
    }
    



    render() {
        return(
            <>
            <AddComponent addNewJob={this.addNewJob} ></AddComponent>
            

        <ChildComponent name={'one'} arrJobs={this.state.arrJobs} deleteJob={this.deleteJob}></ChildComponent>


            </>
        )
    }
}

export default MyComponent;

