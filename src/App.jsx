import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { Components } from "./components";
import AddPost from "./components/AddPost";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Components.Navbar mode={mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Components.Sidebar setMode={setMode} mode={mode} />
          <Components.Feed />
          <Components.Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
