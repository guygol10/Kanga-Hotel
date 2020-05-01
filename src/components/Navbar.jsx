import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/crm-system">
            <i className="fas fa-crown"></i> Kanga Hotel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/my-rooms">
                  My Rooms
                </Link>
              </li>
              {!user && (
                <li className="nav-item active">
                  <Link className="nav-link" to="/create-room">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i> Create Room
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ml-auto">
              {!user && (
                <li className="nav-item active">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              )}              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
