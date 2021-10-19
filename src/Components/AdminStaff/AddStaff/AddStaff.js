import React, { useState } from "react";
import "./AddStaff.css";
import { addstaff } from "../../../api/admin";
import {Button} from "react-bootstrap"

function AddStaff() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [address, setAddress] = useState("");

  const addnewstaff = () => {
    if(name=='' || phone=='' || email=='' || address=='' || password=='' || branch=='' )
    alert("Please enter all details");
    else
    {const data = {
      name: name,
      phone: phone,
      branch: branch,
      email: email,
      password: password,
      address: address,
    };
    console.log(data);
    console.log(address.length);
    addstaff(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
        }
      });}
  };

  return (
    <div>
      <h1>Add Staff</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Branch"
          onChange={(e) => setBranch(e.target.value)}
        />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="primary" onClick={addnewstaff}>Add Staff</Button>
      </div>
    </div>
  );
}

export default AddStaff;
