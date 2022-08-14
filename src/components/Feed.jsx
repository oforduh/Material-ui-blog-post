import React from "react";
import { Box } from "@mui/material";

import Post from "./Post";

const Feed = () => {
  return (
    <Box sx={{ flex: "5" }} p={2}>
      <Post />
    
    </Box>
  );
};

export default Feed;
