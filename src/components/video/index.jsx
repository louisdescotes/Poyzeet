import { useRef, useState } from "react";
import "./style.css";

const Video = () => {
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePausePlay = () => {
    if (isPlaying) {
      video.current.pause();
    } else {
      video.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMetadata = () => {
    setDuration(video.current.duration); 
  };

  const handleTimeUpdate = () => {
    setCurrentTime(video.current.currentTime); 
  };

  const calculateProgress = () => {
    return (currentTime / duration) * 100; 
  };

  return (
    <section className="relative">
      {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
      <video
        className="cursor-pointer"
        onLoadedMetadata={handleMetadata}
        onTimeUpdate={handleTimeUpdate}
        ref={video}
        src="/video/video1.mp4"
        onClick={handlePausePlay}
        aria-label="Video player"
      />

      <div className="relative w-full h-1 bg-gray-600 overflow-hidden cursor-pointer">
        <div
          className="slider absolute left-0 h-full bg-200"
          style={{
            width: `${calculateProgress()}%`,
            transition: "width 0.1s linear", 
          }}
        />
      </div>
    </section>
  );
};

export default Video;
