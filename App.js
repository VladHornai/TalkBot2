import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import useRecorder from "./hooks/useRecorder";
import { StyleSheet, Text, View } from "react-native";
import "./app.css";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio, text } = recorderState;

  return (
    <View style={styles.container}>
      <div className="recorder-container">
        <RecorderControls recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio != null ? audio[0] : null} />
        <Text>{text}</Text>
      </div>
    </View>
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
