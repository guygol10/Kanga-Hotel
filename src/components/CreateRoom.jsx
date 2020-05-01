import React from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";

import Form from "./common/form";
import Title from "./common/Title";
import cardService from "../services/cardService";
import Navbar from "./Navbar";

class CreateRoom extends Form {
  state = {
    data: {
      roomName: "",
      type: "",
      price: "",
      size: "",
      capacity: "",
      description: "",
      roomImage: "",
    },
    errors: {},
  };

  schema = {
    roomName: Joi.string().min(2).max(255).required(),
    type: Joi.string().min(2).max(255).required(),
    price: Joi.string().min(3).max(6).required(),
    size: Joi.string().min(2).max(5).required(),
    capacity: Joi.string().min(1).max(3).required(),
    description: Joi.string().min(2).max(1024).allow(""),
    roomImage: Joi.string().min(11).max(1024).uri().allow(""),
  };

  doSubmit = async () => {
    const data = { ...this.state.data };
    if (!data.roomImage) delete data.roomImage;
    await cardService.createCard(data);
    toast("A new card was created");
    this.props.history.replace("/my-rooms");
  };

  render() {
    const { user } = this.props;

    return (
      <>
        <header>
          <Navbar user={user} />
        </header>
        <div className="container">
          <Title title="create new room" />
          <div className="row">
            <div className="col-12">
              <form
                onSubmit={this.handleSubmit}
                method="POST"
                autoComplete="off"
              >
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    {this.renderInput("roomName", "Room Name")}
                    {this.renderInput("type", "Room Type")}
                    {this.renderInput("price", "Room Price", "number")}
                    {this.renderInput("size", "Room Size", "number")}
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    {this.renderInput("capacity", "Room Capacity", "number")}
                    {this.renderInput("description", "Room Description")}
                    {this.renderInput("roomImage", "Room Image")}
                  </div>
                </div>
                {this.renderButton("Create Card")}
              </form>
              <div style={{ height: "200px" }}></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateRoom;
