import React from "react";
import { toast } from "react-toastify";

import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";

class DeleteRoom extends Form {
  state = {};

  handleCancel = () => {
    this.props.history.push("/my-rooms");
  };

  schema = {};

  doSubmit = async () => {
    const roomId = this.props.match.params.id;
    await cardService.deleteCard(roomId);
    toast("room is deleted");
    this.props.history.replace("/my-rooms");
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText="Are You sure you want to delete this card?" />
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} method="POST" autoComplete="off">
              {this.renderButton("Delete Room", "danger")}
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
    );
  }
}

export default DeleteRoom;
