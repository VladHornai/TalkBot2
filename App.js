import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import useRecorder from "./hooks/useRecorder";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Container from "@mui/material/Container";
import "./app.css";
import { useEffect, useState } from "react";
import { Alert, Grid, Typography } from "@mui/material";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();

  const [loading, setLoading] = useState(false);

  const [recordingList, setRecordingList] = useState([]);

  const [recordingState, setRecordingState] = useState("WAITING_TO_RECORD");

  useEffect(() => {
    if (!recorderState.initRecording && recorderState.text) {
      setLoading(false);
      const { audio, text } = recorderState;

      setRecordingList((prev) => [...prev, { audio, text }].reverse());
      setRecordingState("WAITING_TO_RECORD");
    }

    if (recorderState.initRecording) {
      setRecordingState("RECORDING");
    }

    if (
      !recorderState.initRecording &&
      !recorderState.text &&
      recordingState === "RECORDING"
    ) {
      setRecordingState("SAVING_RECORD");
    }
  }, [recorderState]);

  return (
    <SafeAreaProvider>
      <View>
        <Container>
          <RecorderControls
            recorderState={recorderState}
            handlers={handlers}
            setLoading={setLoading}
            recordingState={recordingState}
          />

          {loading && <p>Loading...</p>}

          <Grid container sx={{ mt: 3 }}>
            {recordingList.length === 0 && (
              <Grid item sm={12}>
                <Alert severity="info">No recordings.</Alert>
              </Grid>
            )}
            {recordingList.length > 0 && (
              <>
                <Grid item sm={8}>
                  <Typography sx={{ fontWeight: "bold" }}>Text</Typography>
                </Grid>
                <Grid item sm={4}>
                  <Typography sx={{ fontWeight: "bold" }}>Audio</Typography>
                </Grid>
              </>
            )}
            {recordingList.map((rec, idx) => (
              <RecordingsList
                key={`record-item-${idx}`}
                audio={rec.audio}
                text={rec.text}
              />
            ))}
          </Grid>
        </Container>
      </View>
    </SafeAreaProvider>
  );
}
