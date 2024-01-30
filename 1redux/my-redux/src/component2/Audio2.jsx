// AudioPlayer.js

import React, { useState, useEffect } from 'react';

const AudioPlayer = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [audio] = useState(new window.Audio()); // Use window.Audio to avoid conflicts
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load playlist from localStorage on component mount
    const storedPlaylist = JSON.parse(localStorage.getItem('playlist')) || [];
    setPlaylist(storedPlaylist);

    // Load the last playing track from localStorage
    const lastPlayingTrackIndex = parseInt(localStorage.getItem('lastPlayingTrackIndex'), 10) || 0;
    setCurrentTrackIndex(lastPlayingTrackIndex);
  }, []);

  useEffect(() => {
    // Save playlist to localStorage whenever it changes
    localStorage.setItem('playlist', JSON.stringify(playlist));

    // Save the current playing track index to localStorage
    localStorage.setItem('lastPlayingTrackIndex', currentTrackIndex.toString());
  }, [playlist, currentTrackIndex]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newPlaylist = [...playlist];

    for (const file of files) {
      newPlaylist.push({
        name: file.name,
        url: URL.createObjectURL(file),
      });
    }

    setPlaylist(newPlaylist);
  };

  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    audio.src = playlist[index].url;
    audio.play();
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => {
    // Play the next track when the current one ends
    if (currentTrackIndex < playlist.length - 1) {
      playTrack(currentTrackIndex + 1);
    } else {
      // Reset to the first track if the last one ends
      playTrack(0);
    }
  };

  return (
    <div>
      <input type="file" accept=".mp3" multiple onChange={handleFileChange} />
      <div>
        <h2>Playlist</h2>
        <ul>
          {playlist.map((track, index) => (
            <li key={index} onClick={() => playTrack(index)}>
              {track.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Now Playing</h2>
        <p>{playlist[currentTrackIndex] && playlist[currentTrackIndex].name}</p>
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
      <audio onEnded={handleEnded} />
    </div>
  );
};

export default AudioPlayer;
