import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

import { apiUrl } from "../config.json";

import http from "../services/httpService";
import Form from "./common/form";
import userService from "../services/userService";
import Navbar from "./Navbar";
import PageHeader from "./common/pageHeader";

class Signup extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };

  doSubmit = async () => {
    const data = { ...this.state.data };
    data.biz = false;
    try {
      await http.post(`${apiUrl}/users`, data);
      toast("Your account has been opended");
      this.props.history.replace("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const { errors } = this.state;
        errors.email = "Email is taken";
        this.setState({ errors });
      }
    }
  };

  render() {
    const { user } = this.props;
    if (userService.getCurrentUser()) return <Redirect to="/" />;
    return (
      <>
       <header>
          <Navbar user={user} />
        </header>
        <div className="container">
          <PageHeader titleText="Singup Form" />
          <div className="row">
            <div className="col-12">
              <p>You can open new account for free</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form
                onSubmit={this.handleSubmit}
                method="POST"
                autoComplete="off"
              >
                {this.renderInput("email", "Email", "email")}
                {this.renderInput("password", "Password", "password")}
                {this.renderInput("name", "Name")}
                {this.renderButton("Signup")}
              </form>
            </div>
          </div>
        </div>
      </>
      );
  }
}

export default Signup;
