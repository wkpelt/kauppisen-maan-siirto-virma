import React, { Component } from 'react';
import './App.css';
//import Card from './Components/Card/Card';
import Ajoneuvo from './Components/Ajoneuvo/Ajoneuvo';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
//import Footer from './Components/Footer/Footer';
//import { Button } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ajoneuvot: [],
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
          console.log(ajoneuvot);
          this.setState({ ajoneuvot })
        });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <a href="/">tule meille röihin :D </a>
        <a href="/">kalusto </a>
        <a href="/">yhteystiedot </a>
        <Container>
          {this.state.ajoneuvot.map((element) => {
            return <Ajoneuvo key={element.field_ajoneuvo[0].target_id} 
            info={element.field_ajoneuvo[0]} />})}
        </Container>
      </div>
    );
  }
}

export default App;
