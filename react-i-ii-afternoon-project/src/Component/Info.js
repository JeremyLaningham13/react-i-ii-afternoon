import React from "react";
import data from "././data";

class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: data,
      position: 0
    };
  }
  render() {
    var inter = this.state.employees;
    var index = this.state.position;
    var currentCard = inter[index];
    var movies = inter[index].favoriteMovies.map(element => <li>{element}</li>);

    let mappedData = this.state.employees.map(val => val.id);
    return (
      <section>
        <main>
          <div className="Info">
            {/* <h3>{mappedData}</h3> */}
            <h2>
              {currentCard.name.first} {currentCard.name.last}
            </h2>
            <h3>
              From: {currentCard.city} {currentCard.country}
            </h3>
            <h3>Employer: {currentCard.employer}</h3>
            <h3>Title: {currentCard.title}</h3>
            <br></br>
            <h3>Favorite Movies: </h3>
            <ol>{movies}</ol>
          </div>
        </main>
      </section>
    );
  }
}

export default Info;
