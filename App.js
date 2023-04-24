import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import useRecorder from "./hooks/useRecorder";
import { StyleSheet, Text, View } from "react-native";
import { axiosResponse } from "./hooks/useRecorder.js";
import "./app.css";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  return (
    <View style={styles.container}>
      <div className="recorder-container">
        <RecorderControls recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio != null ? audio[0] : null} />
        <Text>HELLO</Text>
        {console.log("!!!" + div.textContent)}
        {console.log("!!!" + (audio != null ? audio[0] : null))}
        {console.log("!!!" + (audio != null ? audio[1] : null))}
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
