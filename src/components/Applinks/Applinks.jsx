import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Applinks.scss";
const Applinks = () => {
  return (
    <div className="applinkContainer">
      <Container>
        <Row className="g-0">
          <div className="col-4 d-flex align-items-center justify-content-center">
            <Row className="g-2">
              <div className="col-2  d-flex align-items-center">
                <img
                  src="https://img.icons8.com/external-sbts2018-solid-sbts2018/344/external-playstore-basic-ui-elements-2.2-sbts2018-solid-sbts2018.png"
                  alt=""
                />
              </div>
              <div className="col-10  d-flex flex-column justify-content-center ">
                <h5>ANDROID APP </h5>
                <p>Indian Rummy APK</p>
              </div>
            </Row>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center">
            <Row className="g-2">
              <div className="col-2  d-flex align-items-center">
                <img
                  src="https://img.icons8.com/ios-filled/344/mac-os.png"
                  alt=""
                />
              </div>
              <div className="col-10  d-flex flex-column justify-content-center ">
                <h5>IOS APP </h5>
                <p>Rummy Mobile App</p>
              </div>
            </Row>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center">
            <Row className="g-2">
              <div className="col-2  d-flex align-items-center">
                <img
                  src="https://img.icons8.com/ios-filled/344/windows8.png"
                  alt=""
                />
              </div>
              <div className="col-10  d-flex flex-column justify-content-center ">
                <h5>DESKTOP PC </h5>
                <p>Rummy for PC</p>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Applinks;
