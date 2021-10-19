import React, { useState, useEffect } from "react";
import { getpending } from "../../../api/staff";
import {Table} from 'react-bootstrap';


function Pending() {
    const [courier, setCourier] = useState([]);


  const getallpending = () => {
    getpending()
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
    getallpending();
  }, []);
  return <div>
      <h1>Pending Courier</h1>

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
               <td><span style={{color:"black",backgroundColor:"yellow",fontSize:"22px",padding:"3px"}}>Pending</span></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
  </div>;
}

export default Pending;
