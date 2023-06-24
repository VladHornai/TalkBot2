import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

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
                  setCurrentModel(event.target.value);
                  handleClose();
                }}
              >
                <MenuItem value={"whisper-small-ro"}>Whisper Small</MenuItem>
                <MenuItem value={"whisper-large-ro"}>Whisper Large</MenuItem>
                <MenuItem value={"whisper-large-swara"}>Whisper Swara</MenuItem>
                <MenuItem value={"whisper-large-mara-2"}>Whisper Mara</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModelSelector;
