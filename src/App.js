import { useTheme } from "@emotion/react";
import { PhotoCamera } from "@mui/icons-material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  const handle = () => {
    setChecked(!checked);
  };
  const theme = useTheme();
  return (
    <Box>
      <Button variant="outlined">Text</Button>
      <Button variant="outlined" size="small" component="label">
        Upload
        <PhotoCamera />
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <Checkbox checked={checked} onClick={handle} />
      <Typography variant="h1">h1. Heading</Typography>
      <Typography variant="caption">h1. Heading</Typography>
      <Card
        sx={{ display: "flex", backgroundColor: "secondary", width: "50%" }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
        />
      </Card>
    </Box>
  );
}

export default App;
