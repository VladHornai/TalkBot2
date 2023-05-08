import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faTimes,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { formatMinutes, formatSeconds } from "../../utils/format-time";
import "./styles.css";
import RecorderControl from "./RecorderControl";

export default function RecorderControls({
  recorderState,
  handlers,
  setLoading,
  recordingState,
}) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <RecorderControl
      recordingState={recordingState}
      startRecording={startRecording}
      saveRecording={saveRecording}
    />
  );
}
