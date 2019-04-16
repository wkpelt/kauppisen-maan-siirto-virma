import React, { Component } from "react";
import "./App.css";
import Ajoneuvo from "./Components/Ajoneuvo/Ajoneuvo";
import Duunari from "./Components/Duunari/Duunari";
import Rekry from "./Components/Rekry/Rekry";
import Etusivu from "./Components/Etusivu/Etusivu";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ajoneuvot: [],
      duunarit: []
    };
  }

  componentDidMount() {
    fetch("/api?_format=json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const ajoneuvot = data.filter(el => {
          return el.field_ajoneuvo;
        });
        console.log(ajoneuvot);
        const duunarit = data.filter(el => {
          return el.field_kuva;
        });
        console.log(ajoneuvot);
        this.setState({ ajoneuvot, duunarit });
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavLink className="Head" to="/">
            kauppisen maan siirto virma
          </NavLink>
          <div className="nav">
            <NavLink className="n1" to="/kalusto">
              Kalusto
            </NavLink>
            <NavLink className="n2" to="/miehet">
              Röiukot
            </NavLink>
            <NavLink className="n3" to="/rekry">
              Tule meille röihin
            </NavLink>
          </div>

          <Container>
            <Switch>
              <Route exact path="/" component={Etusivu} />

              <Route
                path="/kalusto"
                render={() =>
                  this.state.ajoneuvot.map(element => {
                    return (
                      <Ajoneuvo key={element.nid[0].value} info={element} />
                    );
                  })
                }
              />

              <Route
                path="/miehet"
                render={() =>
                  this.state.duunarit.map(element => {
                    return (
                      <Duunari key={element.nid[0].value} info={element} />
                    );
                  })
                }
              />

              <Route path="/rekry" component={Rekry} />
            </Switch>
          </Container>
        </Router>
        <iframe
          className="frame"
          src="http://free.timeanddate.com/countdown/i6pz57tn/n101/cf100/cm0/cu4/ct0/cs0/ca0/co1/cr0/ss0/cac000/cpc000/pct/tc66c/fs100/szw320/szh135/tatperjantai%20countdown/tac000/tptTime%20since%20Event%20started%20in/tpc000/iso2019-04-19T00:00:00"
          allowTransparency="true"
          frameborder="0"
          width="320"
          height="135"
        />
      </div>
    );
  }
}

export default App;
