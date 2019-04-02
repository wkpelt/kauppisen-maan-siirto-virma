import React, { Component } from 'react';
import './Ajoneuvo.css';
import Card from '../../Components/Card/Card';



class Ajoneuvo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imgsrc: this.props.url,
        };
      }
    
    render(){
        return(
        <Card>
        <p>Ajoneuvo</p>
        <img className="image" src={this.props.info.url} alt={this.props.info.alt}/>
        </Card>
        )
    }
}

export default Ajoneuvo;