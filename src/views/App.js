import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import Form from "./Example/Form";
import ListToDo from "./Todos/ListToDo";
import "./Todos/Todos.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Navigation/Navigation";
import Home from "./Example/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ListUser from "./User/ListUser";
import DetailUser from "./User/detailUser";

/**
 * 2 components : class components + function components
 *
 * **/

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          {/* Navigation */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/listuser" exact>
              <ListUser />
            </Route>
            <Route path="/listuser/:id">
              <DetailUser />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
