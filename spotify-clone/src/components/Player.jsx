import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return track ? (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img width="48" height="48" src={track.image} alt="song-img" />
        <div>
          <p>{track.name}</p>
          <p>{track.album}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            width="16"
            height="16"
            className="cursor-pointer"
            src={assets.shuffle_icon}
            alt="shuffle"
          />
          <img
            width="16"
            height="16"
            onClick={previous}
            className="cursor-pointer"
            src={assets.prev_icon}
            alt="prev"
          />
          {playStatus ? (
            <img
              width="16"
              height="16"
              onClick={pause}
              className="cursor-pointer"
              src={assets.pause_icon}
              alt="pause"
            />
          ) : (
            <img
              width="16"
              height="16"
              onClick={play}
              className="cursor-pointer"
              src={assets.play_icon}
              alt="play"
            />
          )}
          <img
            width="16"
            height="16"
            onClick={next}
            className="cursor-pointer"
            src={assets.next_icon}
            alt="next"
          />
          <img
            width="16"
            height="16"
            className="cursor-pointer"
            src={assets.loop_icon}
            alt="loop"
          />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>{track.duration}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75 cursor-not-allowed">
        <img width="16" height="16" src={assets.plays_icon} alt="1" />
        <img width="16" height="16" src={assets.mic_icon} alt="2" />
        <img width="16" height="16" src={assets.queue_icon} alt="3" />
        <img width="16" height="16" src={assets.speaker_icon} alt="4" />
        <img width="16" height="16" src={assets.volume_icon} alt="5" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img width="16" height="16" src={assets.mini_player_icon} alt="6" />
        <img width="16" height="16" src={assets.zoom_icon} alt="7" />
      </div>
    </div>
  ) : null;
};

export default Player;
