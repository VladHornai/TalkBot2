import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { red, blue } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import { useEffect, useState, useRef } from "react";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import StopIcon from "@mui/icons-material/Stop";
import SaveIcon from "@mui/icons-material/Save";

export default function RecorderControl({
  recordingState,
  startRecording,
  saveRecording,
}) {
  const timer = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (recordingState === "WAITING_TO_RECORD") {
      startRecording();
    }

    if (recordingState === "RECORDING") {
      saveRecording();
    }
  };

  if (recordingState === "SAVING_RECORD") {
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ m: 1, position: "relative" }}>
          <Fab color="primary">
            <SaveIcon />
          </Fab>
          <CircularProgress
            size={68}
            sx={{
              color: blue[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ m: 1, position: "relative" }}>
        <Fab color="error" onClick={handleButtonClick}>
          {recordingState === "WAITING_TO_RECORD" ? (
            <KeyboardVoiceIcon />
          ) : (
            <StopIcon />
          )}
        </Fab>
        {recordingState === "RECORDING" && (
          <CircularProgress
            size={68}
            sx={{
              color: red[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
    </Box>
  );
}
