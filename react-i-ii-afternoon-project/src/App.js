import React from "react";
import "./App.css";
import NavBar from "./Component/NavBar";
import Info from "./Component/Info";
import Card from "./Component/Card";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Info />
        <Card />
      </div>
    );
  }
}

export default App;
