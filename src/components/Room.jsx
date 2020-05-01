import React from "react";
import { Link } from "react-router-dom";

const Room = ({ card }) => {
  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card">
        <img
          width="100"
          className="p-2"
          src={card.roomImage}
          alt={card.roomName}
        />
        <div className="card-body">
          <h5 className="card-title">{card.roomName}</h5>
          <p className="card-text">
            {card.type}
            <br />
            {card.description}
          </p>
          <p className="card-text border-top p-2">
            <div className="row">
              <div className="col-6">
                <b className="text-center">
                  Price:
                  {card.price}
                </b>
              </div>
              <div className="col-6">
                <b className="text-center">
                  Size:
                  {card.size}
                </b>
              </div>
            </div>
            <b className="text-center">
              Capacity:
              {card.capacity}
            </b>
          </p>
          <Link to={`/my-rooms/edit/${card._id}`}>Edit</Link> |
          <Link className="ml-2" to={`/my-rooms/delete/${card._id}`}>
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;
