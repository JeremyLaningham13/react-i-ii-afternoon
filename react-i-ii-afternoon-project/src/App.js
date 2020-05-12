import React, { Component } from "react";
import Navbar from "./Component/NavBar";
import Card from "./Component/Card";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Card />
      </div>
    );
  }
}
