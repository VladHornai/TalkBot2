import { useState, useEffect } from "react";
import { deleteAudio, attachTextToAudio } from "../handlers/recordings-list";
import generateKey from "../utils/generate-key";
import useRecorder from "../hooks/useRecorder";

export default function useRecordingsList(audio) {
  const [recordings, setRecordings] = useState([]);
  useEffect(() => {
    if (audio) {
      setRecordings((prevState) => {
        return [...prevState, { key: generateKey(), audio, text: null }];
      });
    }
  }, [audio]);

  return {
    recordings,
    deleteAudio: (audioKey) => deleteAudio(audioKey, setRecordings),
    attachTextToAudio: (audioKey, text) =>
      attachTextToAudio(audioKey, text, setRecordings),
  };
}
