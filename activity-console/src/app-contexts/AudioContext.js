import React, { useContext } from "react";
import { useAudio } from "../app-hooks/useAudio";

export const AudioContext = React.createContext();
export const AudioUpdateContext = React.createContext();

export const useAudioContext = () => useContext(AudioContext);
export const useAudioUpdateContext = () => useContext(AudioUpdateContext);

export const AudioProvider = ({ children }) => {
  const [isPlaying, togglePlay] = useAudio();

  return (
    <AudioContext.Provider value={isPlaying}>
      <AudioUpdateContext.Provider value={togglePlay}>
        {children}
      </AudioUpdateContext.Provider>
    </AudioContext.Provider>
  );
};
