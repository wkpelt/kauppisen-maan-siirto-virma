import React, { Component } from "react";
import "./Duunari.css";
import Card from "../../Components/Card/Card";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Duunari extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc: "",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const urli = this.props.info.field_kuva[0].url.substring(14);
    return (
      <Card kuva={urli}>
        <h2>{this.props.info.title[0].value}</h2>
        <div className="buttonDiv">
          <Button color="primary" onClick={this.toggle}>
            {this.props.buttonLabel}Yhteystiedot
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Yhteystiedot</ModalHeader>
            <ModalBody>
              <h4>meikä: {this.props.info.field_nimi[0].value}</h4>
              <h4>Puh_nro: {this.props.info.field_numero[0].value}</h4>
              <h4>
                sähkönen posti: {this.props.info.field_sahkonen_posti[0].value}
              </h4>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                selvä
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </div>
      </Card>
    );
  }
}

export default Duunari;
