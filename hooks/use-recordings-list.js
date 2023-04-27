import { useState, useEffect } from "react";
import { deleteAudio } from "../handlers/recordings-list";
import generateKey from "../utils/generate-key";

export default function useRecordingsList(audio, text) {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    if (audio)
      setRecordings((prevState) => {
        return [...prevState, { key: generateKey(), audio }];
      });
  }, [audio]);

  useEffect(() => {
    if (text)
      setRecordings((prevState) => {
        return [...prevState, { key: generateKey(), text }];
      });
  }, [text]);

  return {
    recordings,
    deleteAudio: (audioKey) => deleteAudio(audioKey, setRecordings),
  };
}
