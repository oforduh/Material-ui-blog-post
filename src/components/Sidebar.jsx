import { Box } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      sx={{
        flex: "1",
        border: "2px solid red",
        display: { xs: "none", sm: "block" },
      }}
      p={2}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
