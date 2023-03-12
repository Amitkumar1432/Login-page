import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";

const Contact = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <ChangePassword />
      </Grid>
    </>
  );
};

export default Contact;
