import React, { useState } from "react";
import { searchParcel } from "../../api/staff";
import { Table, Button, Container, Row, Col } from "react-bootstrap";

function Searchcourier() {
  const [courier, setCourier] = useState([]);
  const [refId, setRefId] = useState("");
  const [found, setFound] = useState(0);
  const searchBYParcel = () => {
    //validation

    searchParcel({ ref: refId })
      .then((res) => {
        setCourier(res);
        console.log(res);
        setFound(1);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
        }
      });
  };

  return (
    <div>
      <h1> SEARCH BY REFERENCE ID</h1>
      <div className="form">
        <Container>
          <Row>
            <Col>
              <input
                type="text"
                placeholder="Enter Ref ID"
                onChange={(e) => setRefId(e.target.value)}
              />
            </Col>
            <Col>
              <Button style={{height:"50px",textAlign:"centre"}}variant="primary" size="sm" onClick={searchBYParcel}>
                <h3>Search</h3>{" "}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {found ? (
        <div>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>REF ID</th>
                <th>Branch Name</th>
                <th>Sender Name</th>
                <th>Reciever Name</th>
                <th>Reciever Address</th>
                <th>Status</th>
              </tr>
              {courier.map((info, index) => {
                const id = info.ref;
                return (
                  <tr key={index}>
                    <td>{info.ref}</td>
                    <td>{info.sender_branch}</td>
                    <td>{info.sname}</td>
                    <td>{info.rname}</td>
                    <td>{info.raddress}</td>
                    <td value={info.ref}>
                      {!info.status ? <span style={{color:"black",backgroundColor:"yellow",fontSize:"22px",padding:"3px"}}>Pending</span> : <span style={{color:"black",backgroundColor:"lightgreen",fontSize:"22px",padding:"3px"}}>Delivered</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : null}
    </div>
  );
}

export default Searchcourier;
