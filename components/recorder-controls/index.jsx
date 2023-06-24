import About from "../About";
import ModelSelector from "../ModelSelector";
import RecorderControl from "./Recorder";

export default function RecorderControls({ handlers, recordingState }) {
  const { currentModel, setCurrentModel, startRecording, saveRecording } =
    handlers;

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
        <About currentModel={currentModel} setCurrentModel={setCurrentModel} />
      </div>
    </div>
  );
}
