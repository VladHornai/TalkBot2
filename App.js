import RecorderControls from "./components/recorder-controls";
import useRecorder from "./hooks/useRecorder";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { Alert, Grid } from "@mui/material";
import RecordingItem from "./components/recordings-list/RecordingItem";

const getModelBoxBgColor = (model) => {
  switch (model) {
    case "whisper-small-ro":
      return "#78d2bf";
    case "whisper-small":
      return "#def4f0";
    case "whisper-large-swara":
      return "#FFB6C1";
    case "whisper-large-mara-2":
      return "#FFFFE0";
    default:
      return "#def4f0";
  }
};

export default function App() {
  const { recorderState, ...handlers } = useRecorder();

  const [loading, setLoading] = useState(false);

  const [recordingList, setRecordingList] = useState([]);

  const [recordingState, setRecordingState] = useState("WAITING_TO_RECORD");

  const { currentModel } = handlers;

  useEffect(() => {
    if (!recorderState.initRecording && recorderState.text) {
      setLoading(false);
      const { audio, text } = recorderState;

      setRecordingList((prev) => [
        { audio, text, model: currentModel },
        ...prev,
      ]);
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

  const deleteRecoding = (audio) => {
    setRecordingList((prevState) =>
      prevState.filter((record) => record.audio !== audio)
    );
  };
  return (
    <SafeAreaProvider style={{ backgroundColor: "#e2e2e2" }}>
      <View>
        <RecorderControls
          recorderState={recorderState}
          handlers={handlers}
          recordingState={recordingState}
        />

        <Container>
          {loading && <p>Loading...</p>}

          <Grid container sx={{ mt: 3 }}>
            {recordingList.length === 0 && (
              <Grid item xs={12}>
                <Alert severity="info">No recordings.</Alert>
              </Grid>
            )}
            {recordingList.map((rec, idx) => (
              <RecordingItem
                onDelete={() => deleteRecoding(rec.audio)}
                key={`record-item-${idx}`}
                audio={rec.audio}
                text={rec.text}
                bgColor={getModelBoxBgColor(rec.model)}
              />
            ))}
          </Grid>
        </Container>
      </View>
    </SafeAreaProvider>
  );
}
