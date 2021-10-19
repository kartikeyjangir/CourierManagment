import React from "react";
import NavStaff from "../NavStaff/NavStaff";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddCourier from "./AddCourier/AddCourier";
import AllCourier from "./AllCourier/AllCourier";
import Pending from "./Status/Pending";
import Delivered from "./Status/Delivered";
import Searchcourier from "./Searchcourier";
import { Container, Row, Col } from "react-bootstrap";


function Staff() {
  return (
    <div>
      <Container fluid="md" className="mainpage">
        <Row>
          <Col className="mainLeft">
            <NavStaff />
          </Col>

          <Col xs={9}>
            {/* <Row>
              <div className="mainheader">
                <h2>Image</h2>
              </div>
            </Row> */}
            <Row className="mainContent">
              <Switch>
                <Route path="/staff/addcourier" component={AddCourier} />
                <Route
                  path="/staff/updatestatus"
                  component={AllCourier}
                  exact
                />
                <Route path="/staff/pending" component={Pending} exact />
                <Route path="/staff/delivered" component={Delivered} exact />
                <Route path="/staff/search" component={Searchcourier} exact />
              </Switch>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Staff;
