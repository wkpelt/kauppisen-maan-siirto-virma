import React, { Component } from "react";
import "./Ajoneuvo.css";
import Card from "../../Components/Card/Card";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Ajoneuvo extends Component {
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
    const urli = this.props.info.field_ajoneuvo[0].url.substring(14);
    return (
      <Card kuva={urli}>
        <h2>{this.props.info.title[0].value}</h2>
        <div className="buttonDiv">
          <Button color="primary" onClick={this.toggle}>
            {this.props.buttonLabel}Varaa nyt!
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Varaus</ModalHeader>
            <ModalBody>
              <h3>hackerman lomalla, varaustoiminto pois käytöstä</h3>
              <br />
              <h4>soita penalle: 0407021181 tai jätä yhteydenottopyyntö</h4>
              <br />
              <form>
                <label>
                  Nimi:
                  <input type="text" name="name" />
                </label>
                <label>
                  Numero:
                  <input type="text" name="numero" />
                </label>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                varaa
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </div>
      </Card>
    );
  }
}

export default Ajoneuvo;
