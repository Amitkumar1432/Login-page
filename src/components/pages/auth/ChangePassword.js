import { Box, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import Axios from "axios";
const ChangePassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        Axios.post("http://192.168.29.3:5000/api/isOldPassword", {
          password: actualData.password,
          new_passsword: actualData.password_confirmation,
        })
          .then((response) => {
            if (response.data.status === "success") {
              document.getElementById("password-change-form").reset();
              setError({
                status: true,
                msg: "Password Changed Successful",
                type: "success",
              });
            } else {
              setError({
                status: true,
                msg: response.data.error,
                type: "danger",
              });
            }
          })
          .catch((error) => {
            setError({
              status: true,
              msg: error.message,
              type: "danger",
            });
          });
        console.log(actualData);
        document.getElementById("password-change-form").reset();
        setError({
          status: true,
          msg: "Password Changed Successful",
          type: "success",
        });
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
    // function actualData() {
    //   if (actualData.password == actualData.password) console.log(actualData);
    // }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          width: 800,
          maxWidth: 600,
          mx: 4,
          // textAlign: "center",
        }}
      >
        <h1>Change Password</h1>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          id="password-change-form"
        >
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password_confirmation"
            label="Confirm New Password"
            type="password"
            id="password_confirmation"
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            {" "}
            Save
          </Button>

          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
        </Box>
      </Box>
    </>
  );
};

export default ChangePassword;

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
