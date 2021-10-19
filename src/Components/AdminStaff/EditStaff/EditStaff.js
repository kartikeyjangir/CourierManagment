import React, { useState, useEffect } from "react";
import { updatestaff, getsinglestaff } from "../../../api/admin";
import { Button } from "react-bootstrap";

function EditStaff() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [address, setAddress] = useState("");

  const editdetails = () => {
    let uid = window.location.pathname;
    uid = uid.substring(17);
    const data = {
      name: name,
      address: address,
      phone: phone,
      branch: branch,
      email: uid,
      password: password,
    };
    console.log(uid);
    console.log(data);
    updatestaff(data)
      .then((res) => {
        alert("updated");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
        }
      });
  };

  const getstaff = () => {
    let uid = window.location.pathname;
    uid = uid.substring(17);
    console.log(uid);
    getsinglestaff(uid)
      .then((res) => {
        console.log(res);
        setEmail(res[0].email);
        setPhone(res[0].phone);
        setBranch(res[0].Branch_Staff);
        setAddress(res[0].address);
        setPassword(res[0].password);
        setName(res[0].staff);
      })
      .catch((err) => {
        if (err.response) console.log(err);
      });
  };

  useEffect(() => {
    getstaff();
  }, []);
  return (
    <div>
      <h1>Edit Staff</h1>
      <div className="form updatestaff">
        <input
          type="text"
          value={email}
          placeholder="email"
          disabled="true"
          // onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <input
          type="text"
          // placeholder={branch}
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          type="text"
          value={phone}
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          value={address}
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="primary" onClick={editdetails}>UPDATE</Button>
      </div>
    </div>
  );
}

export default EditStaff;
