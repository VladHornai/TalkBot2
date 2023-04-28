export function deleteAudio(audioKey, setRecordings) {
  setRecordings((prevState) =>
    prevState.filter((record) => record.key !== audioKey)
  );
}

export function attachTextToAudio(audioKey, text, setRecordings) {
  // setRecordings((prevState) => {
  //   for (let record = 0; record < prevState.length; record++) {
  //     if (record.key === audioKey) record.text = text;
  //   }
  //   return prevState;
  // });

  setRecordings((prevState) => {
    prevState.map((record) => {
      if (record.key == audioKey) record.text = text;
    });

    return prevState;
  });
}
