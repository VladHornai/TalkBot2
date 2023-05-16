import { Grid } from "@mui/material";
import "./styles.css";

export default function RecordingsList({ audio, text }) {
  return (
    <>
      <Grid item sm={8}>
        <p>{text}</p>
      </Grid>
      <Grid item sm={4}>
        <audio controls src={audio} />
      </Grid>
    </>
  );
}
