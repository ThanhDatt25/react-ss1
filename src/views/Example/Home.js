import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Color from "../HOC/Color";
import logo from "../../assets/images/Avatar.jpg";

//Redux
import { connect } from "react-redux";
class Home extends React.Component {
  // Chuyen nguoi dung qua trang todo
  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.props.history.push("/todo");
  //     }, 3000);
  //   }

  //HOC - HIGHER OREDER COMPONENTS - GIÚP COMPONENTS HIỆN TẠI THÊM THỨ ĐỂ SỬ DỤNG
  handleDeleteUser = (user) => {
    console.log(user);
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    console.log(this.props);
    let listuser = this.props.dataRedux;
    return (
      <>
        <div>Home Page</div>
        <div>{/* <img src={logo}></img> */}</div>
        <div>
          {listuser && listuser.length > 0
            ? listuser.map((item, index) => {
                return (
                  <>
                    <div key={item.id}>
                      {index + 1} - {item.name} &nbsp;
                      <span onClick={() => this.handleDeleteUser(item)}>X</span>
                      &nbsp;
                    </div>
                  </>
                );
              })
            : []}
          <button onClick={() => this.handleCreateUser()}>Add new</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users, // State của redux - Định danh biến tuỳ thích vd: dataRedux
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
}; // Kết nối

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home)); // Bọc withRouter -> nhận thêm Prop từ thư viện
//export {} MyComponent;

//Connect() - Liên kết giữa component React với Redux
