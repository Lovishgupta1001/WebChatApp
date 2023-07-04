import React, { useContext, useState } from "react";
import { Box, styled } from "@mui/material";
import { Chat as MessengerIcon } from '@mui/icons-material';

import { AccountContext } from "../../../context/AccountProvider";

// component
import HeaderMenu from "./HeaderMenu";
import InforDrawer from "../../drawer/infoDrawer"

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;

  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }

  & :first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const Image = styled('img')({
  height: 40,
  width: 40,
  borderRadius: '50%',
  cursor: 'pointer', // Added cursor pointer for better UX
});

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { account } = useContext(AccountContext);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer); // Toggle the drawer state
  };

  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={toggleDrawer} />
        <Wrapper>
          <MessengerIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InforDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
