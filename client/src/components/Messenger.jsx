import LoginDialog from "./account/LoginDialog";

import { AppBar, Toolbar, styled, Box } from "@mui/material";

import React, { useContext } from "react";

// import styled from "@emotion/styled";

import ChatDialog from "./account/chat/ChatDialog";

import { AccountContext } from "./context/AccountProvider";

const LoginHeader = styled(AppBar)`
  height: 220px;

  background-color: #00bfa5;

  box-shadow: none;
`;

const Header = styled(AppBar)`
  height: 125px;

  background-color: #00a884;

  box-shadow: none;
`;

const Component = styled(Box)`
  height: 100vh;

  background: #dcdcdc;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <ChatDialog />

          <Header>
            <Toolbar></Toolbar>
          </Header>

          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />;
        </>
      )}
    </Component>
  );
};

export default Messenger;
