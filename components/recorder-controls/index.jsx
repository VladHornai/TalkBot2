import { formatMinutes, formatSeconds } from "../../utils/format-time";
import ModelSelector from "../ModelSelector";
import RecorderControl from "./Recorder";

export default function RecorderControls({
  recorderState,
  handlers,
  setLoading,
  recordingState,
}) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const {
    currentModel,
    setCurrentModel,
    startRecording,
    saveRecording,
    cancelRecording,
  } = handlers;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ModelSelector
          currentModel={currentModel}
          setCurrentModel={setCurrentModel}
        />
        <RecorderControl
          recordingState={recordingState}
          startRecording={startRecording}
          saveRecording={saveRecording}
        />
      </div>
    </div>
  );
}
