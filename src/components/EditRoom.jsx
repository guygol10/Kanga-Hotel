import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import Navbar from "./Navbar";

class EditRoom extends Form {
  state = {
    data: {
      roonName: "",
      slug: "",
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
    _id: Joi.string(),
    roomName: Joi.string().min(2).max(255).required(),
    type: Joi.string().min(2).max(255).required(),
    price: Joi.string().min(3).max(6).required(),
    size: Joi.string().min(2).max(5).required(),
    capacity: Joi.string().min(1).max(3).required(),
    description: Joi.string().min(2).max(1024),
    roomImage: Joi.string().min(11).max(1024).uri().allow(""),
  };

  async componentDidMount() {
    const roomId = this.props.match.params.id;
    const { data } = await cardService.getCard(roomId);
    this.setState({ data: this.mapToViewModel(data) });
  }

  mapToViewModel(room) {
    return {
      _id: room._id,
      roomName: room.roomName,
      type: room.type,
      price: room.price,
      size: room.size,
      capacity: room.capacity,
      description: room.description,
      roomImage: room.roomImage,
    };
  }

  handleCancel = () => {
    this.props.history.push("/my-rooms");
  };

  doSubmit = async () => {
    const { data } = this.state;
    await cardService.editCard(data);
    toast("Card is updated");
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
          <PageHeader titleText="Edit Card Form" />
          <div className="row">
            <div className="col-12">
              <p>here you can edit card details</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
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
                {this.renderButton("Update Card")}
                <button
                  onClick={this.handleCancel}
                  className="btn btn-secondary ml-2"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditRoom;
