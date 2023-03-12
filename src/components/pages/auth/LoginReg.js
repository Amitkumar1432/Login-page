import { Grid, Card, Tabs, Typography, Tab, Box } from "@mui/material";
import { useState } from "react";
// import Pic1 from "../../../images/pic1.png";
import Registration from "./Registration";
import UserLogin from "./UserLogin";
// import { ShoppingBag } from "@mui/icons-material";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={
            {
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              // display: { xs: "none", sm: "block" },
              // position: "absolute",
              // left: "35%",
              // position: "sticky",
              // left: "350%",
              // position: "fixed",
              // flex: 1,
            }
          }
        ></Grid>
        <Grid item lg={5} sm={7} xs={12}>
          <Card
            sx={{
              width: "85%",
              height: "100%",
              left: "45%",
              // Right: "40%",
              // position: "absolute",
              // position: "sticky",
              // top: "20px",
              // position: "stickey",
              // left: "350%",
            }}
          >
            <Box sx={{ mx: 3, height: 530 }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <Tabs
                  value={value}
                  textColor="secondary"
                  indicatorColor="secondary"
                  onChange={handleChange}
                >
                  <Tab
                    label="Login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>
            <Box textAlign="center" sx={{ mt: 2 }}>
              {/* <ShoppingBag sx={{ color: "purple", fontSize: 100 }} /> */}
              <Typography variant="h5" sx={{ fontWeight: "bold" }}></Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;

//42+2=44-8 = 36
//43
//9 jan
//2 days
//39+2 = 41 days
//2+10=12
//43-12= 31 days+ 1 =32 =33

//usestate=>it will store the data and information
//useeffect=> it will used for api calling
//usememo=> the used memo hooks return a memoized value and

//.css-xqunru-MuiGrid-root

//
