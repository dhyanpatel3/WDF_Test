// script.js
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".video");
    const playPauseBtn = document.querySelector(".play-pause");
    const progressBar = document.querySelector(".progress-bar");
    const timeDisplay = document.querySelector(".time");
    const volumeControl = document.querySelector(".volume");
    const playbackSpeed = document.querySelector(".playback-speed");
    const fullscreenBtn = document.querySelector(".fullscreen");
  
    // Play/Pause toggle
    playPauseBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playPauseBtn.textContent = "⏸"; // Pause icon
      } else {
        video.pause();
        playPauseBtn.textContent = "▶"; // Play icon
      }
    });
  
    // Update progress bar and time
    video.addEventListener("timeupdate", () => {
      const currentTime = video.currentTime;
      const duration = video.duration;
  
      // Update progress bar
      progressBar.value = (currentTime / duration) * 100;
  
      // Format time as MM:SS
      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
      };
  
      timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
    });
  
    // Seek video
    progressBar.addEventListener("input", () => {
      const duration = video.duration;
      video.currentTime = (progressBar.value / 100) * duration;
    });
  
    // Volume control
    volumeControl.addEventListener("input", () => {
      video.volume = volumeControl.value;
    });
  
    // Playback speed control
    playbackSpeed.addEventListener("change", () => {
      video.playbackRate = playbackSpeed.value;
    });
  
    // Fullscreen toggle
    fullscreenBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        video.parentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });
  });
  