import { PhotoCamera } from "@mui/icons-material";
import { Button } from "@mui/material";

function App() {
  return (
    <div>
      <Button variant="outlined">Text</Button>
      <Button variant="contained" component="label">
        <PhotoCamera />
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </div>
  );
}

export default App;
