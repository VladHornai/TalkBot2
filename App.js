import RecorderControls from "./components/recorder-controls";
import useRecorder from "./hooks/useRecorder";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Container from "@mui/material/Container";
import "./app.css";
import { useEffect, useState } from "react";
import { Alert, Grid, Typography } from "@mui/material";
import RecordingItem from "./components/recordings-list/RecordingItem";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();

  const [loading, setLoading] = useState(false);

  const [recordingList, setRecordingList] = useState([]);

  const [recordingState, setRecordingState] = useState("WAITING_TO_RECORD");

  useEffect(() => {
    if (!recorderState.initRecording && recorderState.text) {
      setLoading(false);
      const { audio, text } = recorderState;

      setRecordingList((prev) => [{ audio, text }, ...prev]);
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
              <Grid item xs={12}>
                <Alert severity="info">No recordings.</Alert>
              </Grid>
            )}
            {recordingList.map((rec, idx) => (
              <RecordingItem
                key={`record-item-${idx}`}
                audio={rec.audio}
                text={rec.text}
                bgColor={idx % 2 === 0 ? "#78d2bf" : "#def4f0"}
              />
            ))}
          </Grid>
        </Container>
      </View>
    </SafeAreaProvider>
  );
}
