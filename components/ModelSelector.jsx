// const ModelSelector = ({ currentModel, setCurrentModel }) => {
//   return (

//   );
// };

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Alert,
  Box,
  Fab,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

// export default function AlertDialog() {
const ModelSelector = ({ currentModel, setCurrentModel }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ m: 1, position: "relative" }}>
          <Fab onClick={handleClickOpen}>
            <SettingsIcon />
          </Fab>
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Select the model"}</DialogTitle>
        <DialogContent>
          <Box sx={{ marginTop: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Model</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentModel}
                label="Model"
                onChange={(event) => {
                  console.log(event.target.value);
                  setCurrentModel(event.target.value);
                  handleClose();
                }}
              >
                <MenuItem value={"whisper-small-ro"}>Whisper Small</MenuItem>
                <MenuItem value={"whisper-large-ro"}>Whisper Large</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModelSelector;
