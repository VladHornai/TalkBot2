import RecorderControls from "./components/recorder-controls";
import useRecorder from "./hooks/useRecorder";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import RecordingItem from "./components/recordings-list/RecordingItem";
import { red } from "@mui/material/colors";
import ModelSelector from "./components/ModelSelector";

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

    console.log(recordingList);
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
          setLoading={setLoading}
          recordingState={recordingState}
        />
        {/* <ModelSelector
          currentModel={currentModel}
          setCurrentModel={setCurrentModel}
        /> */}
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
                bgColor={
                  rec.model === "whisper-small-ro" ? "#78d2bf" : "#def4f0"
                }
              />
            ))}
          </Grid>
        </Container>
      </View>
    </SafeAreaProvider>
  );
}
