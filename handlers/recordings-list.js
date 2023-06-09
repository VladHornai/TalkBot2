export function deleteAudio(audioKey, setRecordings) {
  setRecordings((prevState) =>
    prevState.filter((record) => record.key !== audioKey)
  );
}

export function attachTextToAudio(audioKey, text, setRecordings) {
  setRecordings((prevState) => {
    for (let i = 0; i < prevState.length; i++) {
      if (prevState[i].key === audioKey) {
        console.log("inside attachTextToAudio: ", audioKey, text);
        prevState[i].text = text;
      }
    }
    console.log(prevState);
    return prevState;
  });
}
