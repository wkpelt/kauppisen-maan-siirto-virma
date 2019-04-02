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
        //const urli = this.props.url

        //const joo = urli.substr(20)
        return(

        <Card>
        <p>Ajoneuvo</p>
        <img className="image"src={this.props.url}/>
        </Card>
        )
    }
}

export default Ajoneuvo;