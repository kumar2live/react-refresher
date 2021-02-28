import React from "react";
import Entity from "../components/entity";
import offline from "../assets/offline.png";
import offlineSnoozed from "../assets/offline-snoozed.png";
import {
  useAudioContext,
  useAudioUpdateContext,
} from "../app-contexts/AudioContext";
// import { useAudio } from "../app-hooks/useAudio";

function EntityContainer({ title }) {
  // const [playing, toggle] = useAudio();
  // const [isPlaying, togglePlay] = useContext(AudioContext);
  const isPlaying = useAudioContext();
  const togglePlay = useAudioUpdateContext();

  return (
    <div>
      {!isPlaying && (
        <p className="text-white" onClick={togglePlay}>
          Not playing
        </p>
      )}
      {isPlaying && (
        <p className="text-white" onClick={togglePlay}>
          Playing
        </p>
      )}
      <div className="d-flex flex-column border">
        <div className="d-flex justify-content-between">
          <div className="pl-3 pt-2 align-self-start">
            <h2 className="text-white font-weight-bold">{title}</h2>
          </div>

          <div
            className="pr-3 pt-2 align-self-start"
            onClick={togglePlay}
            style={{ cursor: "pointer" }}
          >
            <img
              alt="offline"
              src={isPlaying ? offline : offlineSnoozed}
              height={80}
            />
          </div>
        </div>

        <div className="p-2">
          <Entity name="TSM" status="online" />
        </div>
        <div className="p-2">
          <Entity name="TCS" status="online" />
        </div>
        <div className="p-2">
          <Entity name="SWIFT IN" status="online" />
        </div>
        <div className="p-2">
          <Entity name="SWIFT OUT" status="offline" />
        </div>
      </div>
    </div>
  );
}

export default EntityContainer;
