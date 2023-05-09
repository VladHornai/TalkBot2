import { formatMinutes, formatSeconds } from "../../utils/format-time";
import "./styles.css";
import RecorderControl from "./Recorder";

export default function RecorderControls({
  recorderState,
  handlers,
  setLoading,
  recordingState,
}) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        width: "100%",
      }}
    >
      <RecorderControl
        recordingState={recordingState}
        startRecording={startRecording}
        saveRecording={saveRecording}
      />
    </div>
  );
}
