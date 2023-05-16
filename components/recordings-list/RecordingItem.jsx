import { Box, Grid, IconButton, Typography, styled } from "@mui/material";
import { useRef, useState } from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
}));

export default function RecordingItem({ audio, text, bgColor, onDelete }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <Grid
        container
        style={{
          marginBottom: 4,
          borderRadius: "1rem",
          backgroundColor: bgColor,
          padding: 5,
        }}
      >
        <Grid item xs={12} sx={{ pl: "1rem" }}>
          <Grid container alignContent="center" justifyContent="space-between">
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                width: "calc(100% - 8rem)",
              }}
            >
              <Typography variant="body1" sx={{ py: "0.25rem" }}>
                {text}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                width: "8rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <audio ref={audioRef} src={audio} onEnded={handleEnded} />

              {!isPlaying ? (
                <StyledIconButton
                  onClick={() => {
                    playAudio();
                  }}
                >
                  <PlayCircleFilledWhiteIcon
                    sx={{ fontSize: 40, color: "#023020" }}
                  />
                </StyledIconButton>
              ) : (
                <StyledIconButton
                  onClick={() => {
                    pauseAudio();
                  }}
                >
                  <PauseCircleIcon sx={{ fontSize: 40, color: "#023020" }} />
                </StyledIconButton>
              )}

              <StyledIconButton onClick={onDelete}>
                <DeleteIcon sx={{ fontSize: 25, color: "#000000" }} />
              </StyledIconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
