import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <div>
          <button className="Button_1">Edit</button>
          <button className="Button_2">Delete</button>
          <button className="Button_3">New</button>
        </div>
      </div>
    );
  }
}

export default Card;
