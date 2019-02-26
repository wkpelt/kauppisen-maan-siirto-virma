import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Card>
            <h2>.konsta spurtsi</h2>
          </Card>
          <Card>
            <h2>Tämä on korttiin piirretty otsikko</h2>
          </Card>
          <Card>
            <h2>Tämä on korttiin piirretty otsikko</h2>
          </Card>
          <Card>
            <h2>Tämä on korttiin piirretty otsikko</h2>
          </Card>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
