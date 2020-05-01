import React, { Component } from "react";

import cardService from "../services/cardService";
import Room from "./Room";
import Navbar from "./Navbar";
import Title from "./common/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

class MyRooms extends Component {
  state = {
    rooms: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    if (data.length > 0) this.setState({ cards: data });
  }

  render() {
    const { rooms } = this.state;
    const { user } = this.props;

    // get unique types
    let types = getUnique(rooms, "type");
    // add all
    types = ["all", ...types];

    // map to jsx
    types = types.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });
    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });

    return (
      <>
        <header>
          <Navbar user={user} />
        </header>
        <div className="container">
          <div className="row">

            <section className="filter-container">
              <Title title="search rooms" />
              <form className="filter-form">
                {/*select type  */}
                <div className="form-group">
                  <label htmlFor="type">room type</label>
                  <select
                    name="type"
                    id="type"
                    value={this.type}
                    className="form-control"
                    onChange={this.handleChange}
                  >
                    {types}
                  </select>
                </div>
                {/* end select type */}
                {/*guests   */}
                <div className="form-group">
                  <label htmlFor="capacity">Guests</label>
                  <select
                    name="capacity"
                    id="capacity"
                    value={this.capacity}
                    className="form-control"
                    onChange={this.handleChange}
                  >
                    {people}
                  </select>
                </div>
                {/* end guests  */}
                {/* room price */}
                <div className="form-group">
                  <label htmlFor="price">room price ${this.price}</label>
                  <input
                    type="range"
                    name="price"
                    min={this.minPrice}
                    max={this.maxPrice}
                    id="price"
                    value={this.price}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                {/* end of room price */}
                {/* size */}
                <div className="form-group">
                  <label htmlFor="size">room size</label>
                  <div className="size-inputs">
                    <input
                      type="number"
                      name="minSize"
                      id="size"
                      value={this.minSize}
                      onChange={this.handleChange}
                      className="size-input"
                    />
                    <input
                      type="number"
                      name="maxSize"
                      id="size"
                      value={this.maxSize}
                      onChange={this.handleChange}
                      className="size-input"
                    />
                  </div>
                </div>
                {/* end of size */}
              </form>
            </section>
          </div>
          <div className="row">
            {rooms.length > 0 &&
              rooms.map((room) => <Room key={room._id} card={room} />)}
          </div>
        </div>
      </>
    );
  }
}

export default MyRooms;
