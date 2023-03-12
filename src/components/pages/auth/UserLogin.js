import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      console.log(actualData);

      // axios
      //   .post("http://192.168.29.3:5000/api/login", { ...actualData })
      //   .then((data) => {
      //     data.text().then((access_token) => {
      //       console.log(access_token);
      //     });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      axios
        .post("http://192.168.29.3:5000/api/login", { ...actualData })
        .then((response) => {
          if (response.data.status === "success") {
            localStorage.setItem(
              "user_data",
              JSON.stringify(response.data.data)
            );
          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      document.getElementById("login-form").reset();
      setError({ status: true, msg: "Login Success", type: "success" });
      navigate("/dashboard");
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="login-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Login
          </Button>
        </Box>
        <NavLink to="/sendpasswordresetemail">Forgot Password ?</NavLink>
        {error.status ? (
          <Alert severity={error.type} sx={{ mt: 3 }}>
            {error.msg}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default UserLogin;
//let const var
//hosting
//arrow function
//promises
//acyn await
//callback function
//hof
//map
//

// <href src="">
//
// find the vowel in amit
//  today i am working on login page dashbord

//todo app
// addition
// react axios

// Hoc= high order component is a function that take a component and return new component.


