import React, { Component } from 'react';
import './Ajoneuvo.css';
import Card from '../../Components/Card/Card';
import { Button } from 'reactstrap';



class Ajoneuvo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imgsrc: "",
        };
      }
    
    render(){
        const urli = (this.props.info.field_ajoneuvo[0].url).substring(14)
        return(
        <Card>
        <h2>{this.props.info.title[0].value}</h2>
        <img className="image" src={urli} 
        alt={this.props.info.field_ajoneuvo[0].alt}/>
        <div>
            <Button color="primary">Varaa nyt!</Button>
        </div>
        </Card>
        )
    }
}

export default Ajoneuvo;