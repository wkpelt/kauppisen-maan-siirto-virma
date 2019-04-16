import React, { Component } from 'react';
import './Rekry.css';
import Card from '../../Components/Card/Card';



class Rekry extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imgsrc: "",
        };
      }
    
    render(){
        return(
        <Card>
            <h2>ai haluat tänne töihin?</h2>
            <h2>ai sulla ei ole työkokemusta?</h2>
            <h2>no menisit vittu töihin!</h2>
        </Card>
        )
    }
}

export default Rekry;