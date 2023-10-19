import React from "react";
import "./Demo.scss";
class ChildComponents extends React.Component {
  state = {
    city: `Hanoi`,
    showjobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showjobs: !this.state.showjobs,
    });
  };

  handleOnClickDelete = (Job) => {
    console.log("handleOnClickDelete", Job);
    this.props.deleteJob(Job);
  };
  render() {
    console.log(`>>>> Check Props :`, this.props); //this.props : Check data from DAD -> CHILDREN

    // let name = this.props.name;
    // let age = this.props.age;

    let { name, age, arrJobs } = this.props;
    let { showjobs } = this.state;

    let check = showjobs === true ? "showjobs = true " : "showjobs = false"; // Neu showjobs = true -> "showjobs = true " con khong in "showjobs = false"
    console.log(">>>>> check showJobs status", check);

    return (
      <>
        {showjobs === false && ( // If showjobs = false -> print things after '&&'
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        )}
        {showjobs === true && (
          <>
            <div>
              {/* ChildComponents : {name} - {age} */}
              {/* {this.props.name} - {this.props.age} */}
            </div>
            <div className="JobsList">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      <> </>X
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                className="btn-hide"
                onClick={() => this.handleShowHide()}
              >
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponents;
