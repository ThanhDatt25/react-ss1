import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

class ListUser extends React.Component {
  state = {
    ListUser: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //   console.log(res.data.data); // Chi lay data user
    // });
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      ListUser: res && res.data && res.data.data ? res.data.data : [], // res.data.data -> du lieu user
    });
  }

  handleViewDetail = (user) => {
    this.props.history.push(`/listuser/${user.id}`);
  };

  render() {
    let { ListUser } = this.state;
    return (
      <>
        <div>User</div>
        <div className="list-user-container">
          <div className="title">
            All list user
            <div className="list-user-content">
              {/* {ListUser &&
                ListUser.length > 0 &&
                ListUser.map((item, index) => {
                  return (
                    <>
                      <div className="Child" key={item.id}>
                        {index + 1} - {item.first_name} {item.last_name}
                      </div>
                    </>
                  );
                })} */}

              {ListUser && ListUser.length > 0
                ? ListUser.map((item, index) => {
                    return (
                      <>
                        <div
                          className="Child"
                          key={item.id}
                          onClick={() => this.handleViewDetail(item)}
                        >
                          {index + 1} - {item.first_name} {item.last_name}
                        </div>
                      </>
                    );
                  })
                : []}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ListUser);
