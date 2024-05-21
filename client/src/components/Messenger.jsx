import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import styled from "@emotion/styled";
const Header =styled(AppBar)`
 height: 250px;
 background-color: #00bfa5;
 box-shadow: none;
`;

const Messenger = () => {
  return (
    <React.Fragment>
        <Header>
      
        <Toolbar>
          {/* Place your toolbar content here */}
        </Toolbar>
        </Header>
      <LoginDialog />
    </React.Fragment>
  );
};

export default Messenger;
