import React from "react";
import "./Todos.scss";
import AddToDo from "./AddToDo.js";
import { toast } from "react-toastify";

class ListToDo extends React.Component {
  state = {
    listToDo: [
      {
        id: "1",
        title: "Doing Homework",
      },
      {
        id: "2",
        title: "Playing game",
      },
      {
        id: "3",
        title: "Coding",
      },
    ],
    editToDo: {},
  };

  handleEditToDo = (todo) => {
    let { editToDo, listToDo } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    //save event
    if (isEmptyObj === false && editToDo.id === todo.id) {
      let listToDoCopy = [...this.state.listToDo];

      //Find index of specific object using findIndex method.
      let objIndex = listToDoCopy.findIndex((item) => item.id === todo.id);

      //Log object to Console.
      console.log("Before update: ", listToDoCopy[objIndex]);

      //Update object's name property.
      listToDoCopy[objIndex].title = editToDo.title;

      this.setState({
        listToDo: listToDoCopy,
        editToDo: {},
      });

      toast.success("Edit todo success");
      return;
    }
    //edit event
    this.setState({
      editToDo: todo,
    });
  };

  addNewListToDo = (title) => {
    let currentListToDo = this.state.listToDo;
    currentListToDo.push(title);
    this.setState({
      listToDo: currentListToDo,
    });
    toast.success("Wow so easy");
  };

  removeToDoItem = (todo) => {
    let currentListToDo = this.state.listToDo;
    currentListToDo = currentListToDo.filter((item) => item.id !== todo.id);
    this.setState({
      listToDo: currentListToDo,
    });
    toast.success("Remove successed");
  };

  handleOnChangeEditToDo = (event) => {
    let editToDoCopy = { ...this.state.editToDo }; // copy lai editToDo
    editToDoCopy.title = event.target.value;
    this.setState({
      editToDo: editToDoCopy,
    });
  };
  render() {
    let { listToDo, editToDo } = this.state; // let listToDo = this.state.listToDo
    let isEmptyObj = Object.keys(editToDo).length === 0; // Check object empty or not
    return (
      <>
        <div>List To Do</div>
        <div className="list-to-do-container">
          <AddToDo addNewListToDo={this.addNewListToDo} />
          <div className="list-todo-content">
            <div>
              {listToDo &&
                listToDo.length > 0 &&
                listToDo.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {isEmptyObj === true ? (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      ) : (
                        <>
                          {editToDo.id === item.id ? (
                            <span>
                              {index + 1} -{" "}
                              <input
                                value={editToDo.title}
                                onChange={(event) => {
                                  this.handleOnChangeEditToDo(event);
                                }}
                              ></input>
                            </span>
                          ) : (
                            <span>
                              {index + 1} - {item.title}
                            </span>
                          )}
                        </>
                      )}
                      <button
                        className="edit-button"
                        onClick={() => this.handleEditToDo(item)}
                      >
                        {isEmptyObj === false && editToDo.id === item.id
                          ? "Save"
                          : "Edit"}
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => this.removeToDoItem(item)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ListToDo;
