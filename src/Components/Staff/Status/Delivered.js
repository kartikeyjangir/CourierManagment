import React, { useState, useEffect } from "react";
import { getdelivered } from "../../../api/staff";
import {Table} from 'react-bootstrap';


function Delivered() {
  const [courier, setCourier] = useState([]);

  const getalldelivered = () => {
    getdelivered()
      .then((res) => {
        setCourier(res);
        console.log(res);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
        }
      });
  };

  useEffect(() => {
    getalldelivered();
  }, []);
  return (
    <div>
      <h1>Delivered Courier</h1>
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
               <td><span style={{color:"black",backgroundColor:"lightgreen",fontSize:"22px",padding:"3px"}}>Delivered</span></td>

              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Delivered;
