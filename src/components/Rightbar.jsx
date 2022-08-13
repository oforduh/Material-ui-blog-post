import React from "react";
import { Box } from "@mui/material";
const Rightbar = () => {
  return (
    <Box
      sx={{
        flex: "1",
        border: "2px solid red",
        display: { xs: "none", sm: "block" },
      }}
      p={2}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
