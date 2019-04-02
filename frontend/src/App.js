import React, { Component } from 'react';
import './App.css';
import Ajoneuvo from './Components/Ajoneuvo/Ajoneuvo';
import Duunari from './Components/Duunari/Duunari';
import Etusivu from './Components/Etusivu/Etusivu';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
//import Footer from './Components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      ajoneuvot: [],
      duunarit: [],
    };
  }
  
  
  componentDidMount(){
    fetch('/api?_format=json')
    .then(response => response.json())
    .then(data =>  
      {
        console.log(data);
        const ajoneuvot = data.filter(el => {
          return el.field_ajoneuvo
        })
        const duunarit = data.filter(el => {
          return el.field_kuva
        })
        console.log(ajoneuvot);
        this.setState({ ajoneuvot, duunarit })
      });
      
    }
    
    render() {

      return (
        <div className="App">
        <Header />
          <Router>
            <div className="nav"> 
              <NavLink className="n1" to="/kalusto">Kalusto</NavLink>
              <NavLink className="n2" to="/miehet">Röiukot</NavLink>
              <NavLink className="n3" to="/rekry">Tule meille röihin</NavLink>
            </div>

          

        <Container>
          <Switch>

            <Route exact path="/" component={Etusivu} />
  

            <Route path="/kalusto" render={() => 
                this.state.ajoneuvot.map((element) => {
                return (<Ajoneuvo key={element.nid[0].value} 
                info={element} />)})} />

            <Route path="/miehet" render={() => 
                this.state.duunarit.map((element) => {
                return (<Duunari key={element.nid[0].value} 
                info={element} />)})} />

            <Route path="/rekry" component={Etusivu} />

          </Switch>

        </Container>
          </Router>

      </div>
    );
  }
  
  
}

export default App;
