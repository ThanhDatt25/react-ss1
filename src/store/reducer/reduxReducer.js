const initState = {
  // Đây là dữ liệu sẽ được nạp vào Redux
  users: [
    {
      id: 1,
      name: "Dat",
    },
    {
      id: 2,
      name: "CaMup",
    },
  ],
  posts: [],
};
const reduxReducer = (state = initState, action) => {
  //State -> trang thai cua Redux

  //Khu vực xử lý action

  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state, // copy state
        users, // Gán ngược lại user -> udate thành state mới nhât
      };
    //Create user use redux
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 1001) + 1;
      let user = { id: id, name: `random - ${id}` };

      return {
        ...state, // copy state
        users: [...state.users, user],
      };
      break;
    default:
      return state;
  }
};

export default reduxReducer;
