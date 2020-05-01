import React from "react";
import Joi from "joi-browser";
import { Link, Redirect } from "react-router-dom";

import Form from "./common/form";
import userService from "../services/userService";

class Signin extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      await userService.login(email, password);
      window.location = "/crm-system";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: ex.response.data } });
      }
    }
  };

  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <>
      <div style={{ margin: "10% 33%" }}>
      <h1 className="text-center"><i className="fas fa-crown"></i> Kanga HoteL</h1>
        <h4 className="text-center">Signin</h4>
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.handleSubmit} method="POST" autoComplete="off">
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              <p>
                Not registration yet? Click
                <Link to="/signupCRM"> here</Link>
              </p>
              {this.renderButton("Signin")}
            </form>
          </div>
        </div>
      </div>
</>
    );
  }
}

export default Signin;
