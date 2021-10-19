import React, { useState, useEffect } from "react";
import { insertParcelDetails } from "../../../api/staff";
import "./AddCourier.css";
import { Container, Row, Col,Button } from "react-bootstrap";

function AddCourier() {
  const [branch, setBranch] = useState("");
  const [sname, setSname] = useState("");
  const [rname, setRname] = useState("");
  const [semail, setSemail] = useState("");
  const [remail, setRemail] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [recAddress, setRecAddress] = useState("");
  const [sphone, setSphone] = useState("");
  const [rphone, setRphone] = useState("");
  const [scity, setScity] = useState("");
  const [rcity, setRcity] = useState("");
  const [sstate, setSstate] = useState("");
  const [rstate, setRstate] = useState("");
  const [spin, setSpin] = useState("");
  const [rpin, setRpin] = useState("");
  const [scountry, setScountry] = useState("");
  const [rcountry, setRcountry] = useState("");
  const [status, setStatus] = useState("");
  const [wt, setWt] = useState("");
  const [price, setPrice] = useState("");

  const submitnewparcel = () => {
    const data = {
      senderbranch: branch,
      senderemail: semail,
      recemail: remail,
      senderaddress: senderAddress,
      recaddress: recAddress,
      senderphone: sphone,
      recphone: rphone,
      sendername: sname,
      recname: rname,
      sendercity: scity,
      senderstate: sstate,
      senderpin: spin,
      sendercountry: scountry,
      reccity: rcity,
      recstate: rstate,
      recpin: rpin,
      reccountry: rcountry,
      wt: wt,
      price: price,
    };

    console.log(data);
    insertParcelDetails(data)
      .then((res) => {
        alert("Data send");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
        }
      });
  };
  return (
    <div>
      <h1>ADD COURIER</h1>
      <Container>
        <Row>
          <Col>
            <div className="form">
              <h3>Sender Details</h3>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setSname(e.target.value)}
              />
              <input
                type="text"
                placeholder="email"
                onChange={(e) => setSemail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address"
                onChange={(e) => setSenderAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="phone number"
                onChange={(e) => setSphone(e.target.value)}
              />
              <input
                type="text"
                placeholder="city"
                onChange={(e) => setScity(e.target.value)}
              />{" "}
              <input
                type="text"
                placeholder="state"
                onChange={(e) => setSstate(e.target.value)}
              />{" "}
              <input
                type="text"
                placeholder="pin"
                onChange={(e) => setSpin(e.target.value)}
              />{" "}
              <input
                type="text"
                placeholder="country"
                onChange={(e) => setScountry(e.target.value)}
              />
            </div>
          </Col>
          <Col>
            <div className="form">
              <h3>Receiver Details</h3>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setRname(e.target.value)}
              />
              <input
                type="text"
                placeholder="email"
                onChange={(e) => setRemail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address"
                onChange={(e) => setRecAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="phone number"
                onChange={(e) => setRphone(e.target.value)}
              />
              <input
                type="text"
                placeholder="city"
                onChange={(e) => setRcity(e.target.value)}
              />{" "}
              <input
                type="text"
                placeholder="state"
                onChange={(e) => setRstate(e.target.value)}
              />{" "}
              <input
                type="text"
                placeholder="pin"
                onChange={(e) => setRpin(e.target.value)}
              />{" "}
              <input
                type="text"
                placeholder="country"
                onChange={(e) => setRcountry(e.target.value)}
              />
            </div>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="form">

            <h3>Courier Details</h3>
            <input
              type="text"
              placeholder="Sending Branch"
              onChange={(e) => setBranch(e.target.value)}
            />
            <input
              type="text"
              placeholder="Weight"
              onChange={(e) => setWt(e.target.value)}
            />{" "}
            <input
              type="text"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />{" "}
        <Button variant="primary" onClick={submitnewparcel}>Send Parcel</Button>
    </div>

          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default AddCourier;
