import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import "../pages/Style.css";
import "../pages/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user_data");
    console.log("Logout Clicked");
    navigate("/login");
  };

  let data = localStorage.getItem("user_data");
  let userData = null;
  if (data !== null) {
    userData = JSON.parse(data);
  }

  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          sm={4}
          sx={{
            // backgroundColor: "gray",
            p: 5,
            // color: "black",
            // padding: "3px",
            left: " 300px",
            position: "sticky",
            boxShadow: "400px 3px red, -1em 0 4em ",
          }}
        >
          {userData !== null ? (
            <>
              <h1 className="Style">Dashboard</h1>
              <br />

              <Typography>
                <MDBTable hover>
                  <MDBTableHead>
                    <tr>
                      <th scope="Col">#</th>
                      <br />

                      <th scope="Col">first_name //</th>
                      <br />

                      <th scope="Col">last_name //</th>
                      <br />
                      <th scope="Col">address //</th>
                      <br />

                      <th scope="Col">mobile_no //</th>
                      <br />

                      <th scope="Col">company_name //</th>
                      <br />

                      <th scope="Col">company_address //</th>
                      <br />

                      <th scope="Col">company_contact //</th>
                      <br />
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <th scope="Col">1</th>
                      <br />

                      <td>{userData.advertiser.first_name}</td>
                      <br />

                      <td>{userData.advertiser.last_name}</td>
                      <br />

                      <td> {userData.advertiser.address}</td>
                      <br />

                      <td>{userData.advertiser.mobile_no}</td>
                      <br />

                      <td> {userData.advertiser.company_name}</td>
                      <br />

                      <td>{userData.advertiser.company_address}</td>
                      <br />

                      <td>{userData.advertiser.company_contact}</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
                {/* <table>
                  <tr>
                    <th>First Name: {userData.advertiser.first_name}</th>
                  </tr>
                  <tr>
                    <th>last_name : {userData.advertiser.last_name}</th>
                  </tr>
                  <tr>
                    <th>address : {userData.advertiser.address}</th>
                  </tr>
                  <tr>
                    <th> mobile_no : {userData.advertiser.mobile_no}</th>
                  </tr>
                  <tr>
                    <th> company_name : {userData.advertiser.company_name}</th>
                  </tr>
                  <tr>
                    <th>
                      company_address : {userData.advertiser.company_address}
                    </th>
                  </tr>
                  <tr>
                    <th>
                      company_contact : {userData.advertiser.company_contact}
                    </th>
                  </tr>
                  <tr>
                    <th> email : {userData.advertiser.email}</th>
                  </tr>
                  {userData.map((userData, key) => {
                    return (
                      <tr key={userData}>
                        <td>{userData.FirstName}</td>
                        <td>{userData.last_name}</td>
                        <td>{userData.address}</td>
                        <td>{userData.mobile_no}</td>
                        <td>{userData.company_name}</td>
                        <td>{userData.company_address}</td>
                        <td>{userData.company_contact}</td>
                        <td>{userData.email}</td>
                      </tr>
                    );
                  })}
                </table> */}
              </Typography>
              {/* <Typography>Password: abcd@yopmail.com</Typography> */}
              <Button
                className="Dashboard"
                variant="contained"
                color="warning"
                onClick={handleLogout}
                sx={{ mt: 8 }}
              >
                {" "}
                Logout
              </Button>
            </>
          ) : (
            <>
              <Typography>You are not logged in. Kindly login.</Typography>
              <Button
                variant="contained"
                color="warning"
                onClick={() => {
                  navigate("/login");
                }}
                sx={{ mt: 8 }}
              >
                {" "}
                Logout
              </Button>
            </>
          )}
        </Grid>
        <Grid item sm={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

//usememo => The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.
//useeffect =>it will used in Api calling
//useref => It can be used to store a mutable value that does not cause a re-render when updated.
//usecontext => is also same as redux and In order to use the Context in a child component, we need to access it using the useContext Hook.
//redux => state-ui-action-reducer-store
// view - action - reducer - store---view

//redux tool kit = Too much code to configure the store.
// Writing too much boilerplate code to dispatch actions and store the data in the reducer.
//Extra packages like Redux-Thunk and Redux-Saga for doing asynchronous actions.
//usecallback
// state = to store the data and contaned the information .
//props =>to transfer the data from parent to child
// virtual dom => if you update the value then the whole the value will not chage.

//component is two type 1)functional based component.
//2) classed based component

//Hooks only used in functional based component.
// React => is a js libary bulding in userinterface.

// Today I'm Working on API Calling in Dashboard login page In React

//usestate
//usememo
//useeffect
//useref
//usecallback
//usecontext

//props
//redux
//redux tool kit

//todo app
//add
//form validation

//, I'm Completed On Creating A Responsive Login Page In React And Displaying Access Token On The Dashboard.

// Today i am working in  password\forgot reset password in reactjs
