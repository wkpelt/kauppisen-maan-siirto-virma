import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Button color="primary">tule meille töihin :D</Button>
        <Footer />
      </div>
    );
  }
}

export default App;
