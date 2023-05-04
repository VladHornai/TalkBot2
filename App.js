import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import useRecorder from "./hooks/useRecorder";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Container from "@mui/material/Container";
import "./app.css";
import { Button } from "@mui/material";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio, text } = recorderState;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Container className="recorder-container" maxWidth="sm">
          <RecorderControls recorderState={recorderState} handlers={handlers} />
          <RecordingsList audio={audio} text={text} />
          <Text>{text}</Text>
        </Container>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
