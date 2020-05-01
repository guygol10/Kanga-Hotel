import React, { Component } from "react";

import Navbar from "./Navbar";
import Title from "./common/Title";

class About extends Component {
  state = {
    about: [
      {
        title: "Management:",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
      },
      {
        title: "Market share:",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta minima laudantium commodi officia recusandae maiores debitis voluptates dicta, et aut perferendis quidem rem consequuntur nobis tempore rerum optio cum ipsam facilis veritatis perspiciatis reprehenderit. Quod ipsam distinctio cum amet nam molestiae omnis corporis quae, animi repellat repellendus delectus tempora! Cum quibusdam quasi atque mollitia molestias, officia saepe repudiandae obcaecati.",
      },
      {
        title: "Personnel:",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
      },
      {
        title: "Occupancy:",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta minima laudantium commodi officia recusandae maiores debitis voluptates dicta, et aut perferendis quidem rem consequuntur nobis tempore rerum optio cum ipsam facilis veritatis perspiciatis reprehenderit. Quod ipsam distinctio cum amet nam molestiae omnis corporis quae, animi repellat repellendus delectus tempora! Cum quibusdam quasi atque mollitia molestias, officia saepe repudiandae obcaecati, totam ab et voluptas unde suscipit consectetur quos cupiditate. Explicabo!",
      },
      {
        title: "Marketing and Sales:",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta minima laudantium commodi officia recusandae maiores debitis voluptates dicta, et aut perferendis quidem rem consequuntur nobis tempore rerum optio cum ipsam facilis veritatis perspiciatis reprehenderit. Quod ipsam distinctio cum amet nam molestiae omnis corporis quae, animi repellat repellendus delectus tempora! Cum quibusdam quasi atque.",
      },
      {
        title: "Business Services:",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
      },
      {
        title: "Company Structure:",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta minima laudantium commodi officia recusandae maiores debitis voluptates dicta, et aut perferendis quidem rem consequuntur nobis tempore rerum optio cum ipsam facilis veritatis perspiciatis reprehenderit. Quod ipsam distinctio.",
      },
      {
        title: "Operation:",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta minima laudantium commodi officia recusandae maiores debitis voluptates dicta, et aut perferendis quidem rem consequuntur nobis tempore rerum optio cum ipsam facilis veritatis perspiciatis reprehenderit. Quod ipsam distinctio cum amet nam molestiae omnis corporis quae, animi repellat repellendus delectus tempora! Cum quibusdam quasi atque mollitia molestias, officia saepe repudiandae obcaecati, totam ab et voluptas unde suscipit consectetur quos cupiditate. Explicabo!",
      },
    ],
  };
  render() {
    const { user } = this.props;

    return (
      <>
        <header>
          <Navbar user={user} />
        </header>
        <div className="about">
          <div className="row">
            <div className="col-12">
              <Title title="Overview" />
              <div className="about-center">
                {this.state.about.map((item, index) => {
                  return (
                    <article key={index} className="about">
                      <h3>{item.title}</h3>
                      <p>{item.info}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
