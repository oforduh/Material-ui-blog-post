import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import { Pets, Notifications } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";

// Material UI styling
// the navigation bar
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  //   border: "2px solid red",
});

// search filed input
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

//The navbar icons for large screens
const Icons = styled(Box)(({ theme }) => ({
  color: "#fff",
  display: "none",
  gap: "20px",
  alignItems: "center",

  //   media query for screens greater tha sm devices(600px)
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

// //The navbar icons for small screens
const IconUserBox = styled(Box)(({ theme }) => ({
  color: "#fff",
  display: "none",
  gap: "10px",
  alignItems: "center",
  //   media query for screens lesser tha sm devices(600px)
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

const Navbar = ({ mode }) => {
  const [open, setOpen] = useState(false);
  const HandleOpenMenu = () => setOpen(true);

  return (
    <AppBar position="sticky" p={2}>
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
          <InputBase placeholder="Search..." sx={{ color: mode && "#000" }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={HandleOpenMenu}
            sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          ></Avatar>
        </Icons>
        <IconUserBox>
          <Avatar
            onClick={HandleOpenMenu}
            sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          ></Avatar>
          <Typography>Harrison</Typography>
        </IconUserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
