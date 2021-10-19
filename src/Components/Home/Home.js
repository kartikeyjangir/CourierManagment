import React, { useState } from "react";
import { getauth } from "../../api/auth";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import imagepath from "../../Img/img1.png";

function Home() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const verify = () => {
    if (email == "" || pass == "") alert("Please Enter all details");
    else {
      const data = { email: email, password: pass };
      // console.log(data);
      getauth(data)
        .then((res) => {
          console.log(res.length);
          if (res.length == 0) alert("Password and Email doesnt match");
          else {
            if (res[0].role == "admin") {
              window.location =
                "https://gallant-shockley-16b477.netlify.app//admin";
              // window.location = "http://localhost:3000/admin";
            } else if (res[0].role == "staff") {
              // window.location = "http://localhost:3000/staff";
              window.location =
                "https://gallant-shockley-16b477.netlify.app//staff";
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            console.log(err);
          }
        });
    }
  };

  return (
    <div>
      <div className="mainlogindiv">
        <div className="form loginform">
          <h1>LOGIN</h1>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />

          <div className="pass">Forgot Password?</div>

          <Button variant="primary" onClick={verify}>
            Log IN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
