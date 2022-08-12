import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Components } from "./components";

function App() {
  return (
    <Box>
      <Components.Navbar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Components.Sidebar />
        <Components.Feed />
        <Components.Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
