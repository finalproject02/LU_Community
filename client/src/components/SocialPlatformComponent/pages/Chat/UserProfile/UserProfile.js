import React, { Component } from "react";
import "./UserProfile.css";
import {Col, Row} from "react-bootstrap";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="card p-5">
        <div className="card.body">
          <div className="card.img text-center mt-2 rounded-3 img-fluid">
            <img src="https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg" width="70" height="70"/>
          </div>
          <h6 className="text-center mt-2">Fernando Faucho</h6>
          <small className="text-center">Student at Leading university</small>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <Row>
              <Col md="4">
                <img src="https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg" width="70" height="70"/>
              </Col>
              <Col md="4">
                <img src="https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg" width="70" height="70"/>
              </Col>
              <Col md="4">
                <img src="https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg" width="70" height="70"/>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
