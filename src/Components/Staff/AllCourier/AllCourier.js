import React, { useState, useEffect } from "react";
import { getallcourier, updatestatus } from "../../../api/staff";
import {Table,Button} from 'react-bootstrap';

function AllCourier() {
  const [courier, setCourier] = useState([]);
  const [dummystate, setDummystate] = useState("");

  const getCourier = () => {
    getallcourier()
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

  const markdelivered = (refi) => {
    const data = { ref: refi };
    console.log(data);
    updatestatus(data)
      .then((res) => {
        console.log(res);
        setDummystate("123");
        setDummystate("");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
        }
      });
  };

  useEffect(() => {
    getCourier();
  }, [dummystate]);
  return (
    <div>
      <h1> All Courier</h1>

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
                {/* <td>{info.sphone}</td> */}
                <td value={info.ref}>
                  {!info.status ? (
                    <Button
                    variant="success"
                      onClick={() => {
                        markdelivered(id);
                      }}
                    >
                      Mark Delivered
                    </Button>
                  ) : (
                    "Delivered"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default AllCourier;
