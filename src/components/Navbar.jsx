import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import { Pets, Notifications } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  //   border: "2px solid red",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  color: "#fff",
  display: "flex",
  gap: "20px",
  border:"3px solid red",
  alignItems:"center"
}));

const Navbar = () => {
  return (
    <AppBar position="stick" p={2}>
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          HARRISON DEV
        </Typography>
        <Pets
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}>
            N
          </Avatar>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
