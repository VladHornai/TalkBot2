import { Grid } from "@mui/material";
import "./styles.css";

export default function RecordingItem({ audio, text, bgColor }) {
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
        <Grid item xs={12} md={8} style={{ paddingLeft: 10 }}>
          <p>{text}</p>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <audio controls src={audio} />
        </Grid>
      </Grid>
    </>
  );
}
