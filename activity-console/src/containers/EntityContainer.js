import React from "react";
import Entity from "../components/entity";
import offline from "../assets/offline.png";
import offlineSnoozed from "../assets/offline-snoozed.png";
import {
  useAudioContext,
  useAudioUpdateContext,
} from "../app-contexts/AudioContext";
// import { useAudio } from "../app-hooks/useAudio";

function EntityContainer({ title, entities }) {
  // const [playing, toggle] = useAudio();
  // const [isPlaying, togglePlay] = useContext(AudioContext);
  const isPlaying = useAudioContext();
  const togglePlay = useAudioUpdateContext();

  return (
    <div>
      <div className="d-flex flex-column border m-3">
        <div className="d-flex justify-content-between">
          <div className="pl-3 pt-2 align-self-start">
            <h3 className="text-white font-weight-bold">{title}</h3>
          </div>

          <div
            className="pr-3 pt-2 align-self-start"
            onClick={togglePlay}
            style={{ cursor: "pointer" }}
          >
            <img
              alt="offline"
              src={isPlaying ? offline : offlineSnoozed}
              height={40}
            />
          </div>
        </div>

        {entities && entities.length > 0
          ? entities.map((ent) => (
              <div className="p-2" key={ent.entityName}>
                <Entity name={ent.entityName} status={ent.status} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default EntityContainer;
