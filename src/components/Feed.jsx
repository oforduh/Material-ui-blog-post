import React from "react";
import { Box } from "@mui/material";

import Post from "./Post";

const Feed = () => {
  return (
    <Box sx={{ flex: "5", marginLeft: "0 !important " }} p={2} fullWidth>
      <Post />
    </Box>
  );
};

export default Feed;
