// import { Grid, TextField, Button, Box, Alert } from "@mui/material";
// import { useState } from "react";
// import Axios from "axios";

// const SendPasswordResetEmail = () => {
//   const [error, setError] = useState({
//     status: false,
//     msg: "",
//     type: "",
//   });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const actualData = {
//       email: data.get("email"),
//     };
//     console.log(actualData);
//     if (actualData.email) {
//       Axios.post("http://192.168.29.3:5000/api/forgot_password", {
//         email: actualData.email,
//         // redirect_url: "https://alphago.letmegrab.in/",
//       })
//         .then((response) => {
//           if (response.data.status === "success") {
//             document.getElementById("password-reset-email-form").reset();
//             setError({
//               status: true,
//               msg: "Password Reset Email Sent. Check Your Email !!",
//               type: "success",
//             });
//           } else {
//             setError({
//               status: true,
//               msg: response.data.error,
//               type: "danger",
//             });
//           }
//         })
//         .catch((error) => {
//           setError({
//             status: true,
//             msg: error.message,
//             type: "danger",
//           });
//         });
//     } else {
//       setError({
//         status: true,
//         msg: "Please Provide Valid Email",
//         type: "error",
//       });
//     }
//   };

//   return (
//     <>
//       <Grid container justifyContent="center">
//         <Grid item sm={6} xs={12}>
//           <h1>Reset Password</h1>
//           <Box
//             component="form"
//             noValidate
//             sx={{ mt: 1 }}
//             id="password-reset-email-form"
//             // onSubmit={handleSubmit}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               name="email"
//               label="Email Address"
//             />
//             <Box textAlign="center">
//               <Button
//                 type="submit"
//                 variant="contained"
//                 onSubmit={handleSubmit}
//                 sx={{ mt: 3, mb: 2, px: 5 }}
//               >
//                 Send
//               </Button>
//             </Box>
//             {error.status ? (
//               <Alert severity={error.type}>{error.msg}</Alert>
//             ) : (
//               ""
//             )}
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// };
// export default SendPasswordResetEmail;
