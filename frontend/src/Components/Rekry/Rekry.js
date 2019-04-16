import React, { Component } from "react";
import "./Rekry.css";
import Card from "../../Components/Card/Card";

class Rekry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc: ""
    };
  }

  render() {
    return (
      <Card>
        <h2>ai haluat tänne töihin?</h2>
        <h2>ai sulla ei ole työkokemusta?</h2>
        <h2>no menisit vittu töihin!</h2>
        <br />
        <br />
        <p className="parapara">
          mene töihin
          <a className="pere" href="https://www.te-palvelut.fi/te/fi/">
            {" "}
            tästä
          </a>
        </p>
      </Card>
    );
  }
}

export default Rekry;
