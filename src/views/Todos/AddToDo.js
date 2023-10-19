import React from "react";
import "./Todos.scss";
import { toast } from "react-toastify";

class AddToDo extends React.Component {
  state = {
    id: "",
    title: "",
  };

  handleGetInput = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSubmit = () => {
    if (!this.state.title) {
      toast.error("Please input title to do!");
      return;
    }
    this.props.addNewListToDo({
      id: Math.floor(Math.random() * 1001) + 1,
      title: this.state.title,
    });

    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <>
        <div className="add-todo">
          <input
            className="input"
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleGetInput(event)}
          ></input>
          <button type="button" onClick={() => this.handleSubmit()}>
            Add
          </button>
        </div>
      </>
    );
  }
}

export default AddToDo;
