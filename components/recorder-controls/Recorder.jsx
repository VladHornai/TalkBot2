import { Box, Fab, CircularProgress } from "@mui/material";

import { red, blue } from "@mui/material/colors";

import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import StopIcon from "@mui/icons-material/Stop";
import SaveIcon from "@mui/icons-material/Save";

export default function Recorder({
  recordingState,
  startRecording,
  saveRecording,
}) {
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
      <RecorderIcon
        icon={SaveIcon}
        color="primary"
        loader={true}
        loaderColor={blue[500]}
        onClick={handleButtonClick}
      />
    );
  }

  if (recordingState === "WAITING_TO_RECORD") {
    return (
      <RecorderIcon
        icon={KeyboardVoiceIcon}
        color="error"
        loader={false}
        onClick={handleButtonClick}
      />
    );
  }

  if (recordingState === "RECORDING") {
    return (
      <RecorderIcon icon={StopIcon} color="error" onClick={handleButtonClick} />
    );
  }
}

const RecorderIcon = ({
  icon,
  color,
  loader = true,
  loaderColor = red[500],
  onClick,
}) => {
  const Icon = icon;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ m: 1, position: "relative" }}>
        <Fab color={color} onClick={onClick}>
          <Icon />
        </Fab>
        {loader && (
          <CircularProgress
            size={68}
            sx={{
              color: loaderColor,
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
};
