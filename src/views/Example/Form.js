import React from "react";
import ChildComponents from "./ChildComponents";
import AddComponents from "./AddComponents";

class Form extends React.Component {
  state = {
    arrJobs: [
      {
        id: "Job1",
        title: "Dev",
        salary: "5000",
      },
      {
        id: "Job2",
        title: "Tester",
        salary: "1000",
      },
      {
        id: "Job3",
        title: "Designer",
        salary: "10000",
      },
    ],
  };

  addJob = (Job) => {
    console.log("Check Job >>", Job);
    let currentJobs = this.state.arrJobs;
    currentJobs.push(Job);
    this.setState({
      arrJobs: currentJobs,
    });
    // this.setState({
    //   arrJobs: [...this.state.arrJobs, Job],
    // });
  };

  deleteJob = (Job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== Job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  render() {
    return (
      <>
        <AddComponents addJob={this.addJob} />
        <ChildComponents
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}
export default Form;
