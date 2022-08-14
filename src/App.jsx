import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Components } from "./components";
import AddPost from "./components/AddPost";

function App() {
  return (
    <Box>
      <Components.Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Components.Sidebar />
        <Components.Feed />
        <Components.Rightbar />
      </Stack>
      <AddPost />
    </Box>
  );
}

export default App;
