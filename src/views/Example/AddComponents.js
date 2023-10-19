import React from "react";
import "./Demo.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AddComponents extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleTitleJobs = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      toast.error("Missing input !");
      return;
    }
    console.log(">>>>>>> Check data input", this.state);
    this.props.addJob({
      id: Math.floor(Math.random() * 1001) + 1,
      title: this.state.title,
      salary: this.state.salary,
    });
    toast.success("Submit successed !");

    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Job title: </label>
          <br />
          <input
            onChange={(event) => this.handleTitleJobs(event)}
            value={this.state.title}
            type="text"
          />
          <br />
          <label htmlFor="lname">Salary: </label>
          <br />
          <input
            onChange={(event) => this.handleSalary(event)}
            value={this.state.salary}
            type="text"
          />
          <br />
          <br />
          <input
            className="btn-submit"
            type="submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}
export default AddComponents;
