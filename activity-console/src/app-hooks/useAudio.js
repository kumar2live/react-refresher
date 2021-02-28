import { useEffect, useState } from "react";

import audioFile from "../assets/alarm-tone.mp3";

const audio = new Audio(audioFile);
audio.loop = true;

export const useAudio = () => {
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));

    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [playing]);

  return [playing, toggle];
};
