import React from "react";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";

import { apiUrl } from "../config.json";

import userService from "../services/userService";
import Form from "./common/form";
import http from "../services/httpService";

class SignupCRM extends Form {
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
    data.biz = true;
    try {
      await http.post(`${apiUrl}/users`, data);
      await userService.login(data.email, data.password);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const { errors } = this.state;
        errors.email = "Email is taken";
        this.setState({ errors });
      }
    }
  };

  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;
    return (
      <>
        <div style={{ margin: "10% 33%" }}>
          <h1 className="text-center">
            <i className="fas fa-crown"></i> Kanga HoteL
          </h1>
          <h4 className="text-center">Registration</h4>

          <div className="row">
            <div className="col-12">
              <form
                onSubmit={this.handleSubmit}
                method="POST"
                autoComplete="off"
              >
                {this.renderInput("name", "Name")}
                {this.renderInput("email", "Email", "email")}
                {this.renderInput("password", "Password", "password")}
                {this.renderButton("Signup")}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignupCRM;
