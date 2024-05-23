import { Description } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
const Image = styled(Box)`
  display: flex;

  justify-content: center;
`;

const ProfilePicture = styled("img")({
  width: 200,

  height: 200,

  borderRadius: "50%",

  padding: "25px 0",
});

const BoxWrapper = styled(Box)`
  background: #ffffff;

  padding: 12px 30px 2px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  & :first-child {
    font-size: 13px;

    color: #009688;

    font-weight: 200;
  }

  & :last-child {
    margin: 14px 0;

    color: #4a4a4a;
  }
`;
const DescriptionContainer = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p {
    font-size: 13px;
    color: #8696a0;
  }
`;

const Profile = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <Image>
        <ProfilePicture
          referrerPolicy="no-referrer"
          src={account.picture}
          alt="dp"
        />
      </Image>

      <BoxWrapper>
        <Typography> Your name</Typography>

        <Typography>{account.name}</Typography>
      </BoxWrapper>

      <DescriptionContainer>
        <Typography>
          THIS is not your username or pin. This name will be visible tp
          Whatsapp contacts.
        </Typography>
      </DescriptionContainer>

      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>A ! B ! C !</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;
