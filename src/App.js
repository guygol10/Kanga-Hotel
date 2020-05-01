import React, { Component } from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import CreateRoom from "./components/CreateRoom";
import MyRooms from "./components/MyRooms";
import EditRoom from "./components/EditRoom";
import DeleteRoom from "./components/DeleteRoom";
import Logout from "./components/Logout";
import signupCRM from "./components/SignupCRM";
import userService from "./services/userService";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <>
        <ToastContainer />

        <main style={{ minHeight: 900 }}>
          <Route path="/" exact component={Signin} />
          <Route path="/logout" component={Logout} />
          <Route path="/my-cards/delete/:id" component={DeleteRoom} />
          <Route path="/my-cards/edit/:id" component={EditRoom} />
          <Route path="/my-rooms" component={MyRooms} />
          <Route path="/create-room" component={CreateRoom} />
          <Route path="/signup" component={Signup} />
          <Route path="/signupCRM" component={signupCRM} />
          <Route path="/about" component={About} />
          <Route path="/crm-system" exact component={Home} />
        </main>
      </>
    );
  }
}

export default App;
