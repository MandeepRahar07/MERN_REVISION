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
    const lastPlayingTrackIndex = parseInt(localStorage.getItem('lastPlayingTrackIndex'), 10) || 0;
    const lastPlaybackPosition = parseFloat(localStorage.getItem('lastPlaybackPosition')) || 0;

    if (storedPlaylist.length > 0) {
      setPlaylist(storedPlaylist);
      setCurrentTrackIndex(lastPlayingTrackIndex);

      // Set the audio source and load metadata
      audio.src = storedPlaylist[lastPlayingTrackIndex].url;
      audio.load();

      // Set the playback position
      audio.currentTime = lastPlaybackPosition;

      // Start playing if it was playing before
      if (localStorage.getItem('isPlaying') === 'true') {
        audio.play();
        setIsPlaying(true);
      }
    }
  }, [audio]);

  useEffect(() => {
    // Save playlist and playback position to localStorage whenever they change
    localStorage.setItem('playlist', JSON.stringify(playlist));
    localStorage.setItem('lastPlayingTrackIndex', currentTrackIndex.toString());
    localStorage.setItem('lastPlaybackPosition', audio.currentTime.toString());
    localStorage.setItem('isPlaying', isPlaying.toString());
  }, [playlist, currentTrackIndex, audio, isPlaying]);

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length === 0) {
      return;
    }

    const newPlaylist = [...playlist];

    for (const file of files) {
      newPlaylist.push({
        name: file.name,
        url: URL.createObjectURL(file),
      });
    }

    setPlaylist(newPlaylist);

    // Update the current track index only if it's out of bounds
    if (currentTrackIndex >= newPlaylist.length) {
      setCurrentTrackIndex(0);
    }

    // If the playlist was empty, start playing the first track
    if (!isPlaying && newPlaylist.length > 1) {
      playTrack(0);
    }
  };

  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    audio.src = playlist[index].url;

    // Set the playback position to 0 before starting to play a new track
    audio.currentTime = 0;

    audio.play();
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    // Check if the playlist is not empty
    if (playlist.length > 0) {
      // Check if audio.src is not set
      if (!audio.src) {
        // Set audio.src to the URL of the current track
        audio.src = playlist[currentTrackIndex].url;
        audio.load(); // Explicitly load the audio
      }

      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }

      setIsPlaying(!isPlaying);
    }
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
      {playlist.length > 0 ? (
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
      ) : (
        <p>No audio files in the playlist.</p>
      )}
      {playlist.length > 0 && (
        <div>
          <h2>Now Playing</h2>
          <p>{playlist[currentTrackIndex] && playlist[currentTrackIndex].name}</p>
          <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
      )}
      <audio onEnded={handleEnded} />
    </div>
  );
};

export default AudioPlayer;
