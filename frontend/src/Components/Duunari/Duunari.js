import React, { Component } from 'react';
import './Duunari.css';
import Card from '../../Components/Card/Card';



class Duunari extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imgsrc: "",
        };
      }
    
    render(){
        const urli = (this.props.info.field_kuva[0].url).substring(14)
        return(
        <Card>
        <h2>{this.props.info.title[0].value}</h2>
        <img className="image" src={urli} 
        alt={this.props.info.field_kuva[0].alt}/>
        </Card>
        )
    }
}

export default Duunari;