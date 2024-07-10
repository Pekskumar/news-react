import React from "react";
import Imgsr from "./Assets/Images/News_placeholder-image.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import GoogleMapTraffic from "./Components/GoogleMapTraffic";
import TabbingComponent from "./Components/TabbingComponent";
import WeatherComponent from "./Components/WeatherComponent";
import { Commonservice } from "./Services/Commonservice";

function App() {
  return (
    <>
      <Router>
        <Container fluid>
          <Row>
            <Col md={4}>
              <h5 className="my-3 logo-one">
                <img src={Imgsr} /> {Commonservice.getUserLoginMessage()}
              </h5>
              {/* <p className="mb-2">{moment().format("MMMM Do YYYY, h:mm:ss a")}</p> */}
              <div className="left-tabs-one">
                <Row className="mb-3">
                  <Col>
                    <WeatherComponent />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div
                      className="SingleCard"
                      // style={{ background: "#f1e9d733" }}
                    >
                      <h5 className="mb-3">Traffic Insights</h5>
                      <div className="google-map-one">
                        <GoogleMapTraffic />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={8} className="right-tabs-one">
              <TabbingComponent />
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
