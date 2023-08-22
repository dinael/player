import { useState, useEffect, useRef } from 'react'

import { Box } from '@mui/material'

import TrackCaption from './TrackCaption'
import PlayControls from './PlayControls'
import TrackControls from './TrackControls'
import VolumeControls from './VolumeControls'

const Player = ({ episode }) => {
  const [playlist, setPlaylist] = useState(episode)

  const audioPlayer = useRef()

  const [index, setIndex] = useState(0)

  const [currentSong] = useState(playlist[index])

  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(30)
  const [mute, setMute] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false);

  const [elapsed, setElapsed] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100
    }

    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration)
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime)

        setDuration(_duration)
        setElapsed(_elapsed)
      }, 100)
    }
  }, [volume, isPlaying])

  useEffect(() => {
    setElapsed(0);
    audioPlayer.current.addEventListener('ended', handleSongEnd)

    return () => {
      audioPlayer.current.removeEventListener('ended', handleSongEnd);
    }
  }, [index])

  const handleSongEnd = () => {
    let newIndex = index + 1

    if (isShuffling) {
      newIndex = Math.floor(Math.random() * playlist.length)
    }

    if (newIndex >= playlist.length) {
      newIndex = 0
    }

    setIndex(newIndex)
    audioPlayer.current.src = playlist[newIndex]
    audioPlayer.current.play()
  }

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play()
    } else {
      audioPlayer.current.pause()
    }
    setIsPlaying(prev => !prev)
  }

  const toggleForward = () => {
    audioPlayer.current.currentTime += 10
  }

  const toggleBackward = () => {
    audioPlayer.current.currentTime -= 10
  }

  const toggleSkipForward = () => {
    let newIndex = index + 1
    if (isShuffling) {
      newIndex = newIndex >= playlist.length ? 0 : newIndex
    } else {
      newIndex = newIndex >= playlist.length ? playlist.length - 1 : newIndex
    }

    setIndex(newIndex)
    audioPlayer.current.src = playlist[newIndex]
    audioPlayer.current.play()
  }

  const toggleSkipBackward = () => {
    let newIndex = index - 1
    if (isShuffling) {
      newIndex = newIndex < 0 ? playlist.length - 1 : newIndex
    } else {
      newIndex = newIndex < 0 ? 0 : newIndex
    }

    setIndex(newIndex);
    audioPlayer.current.src = playlist[newIndex]
    audioPlayer.current.play()
  }

  const toggleShuffle = () => {
    setIsShuffling(prev => !prev);

    if (!isShuffling) {
      const shuffledPlaylist = [...playlist];
      for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffledPlaylist[i];
        shuffledPlaylist[i] = shuffledPlaylist[j];
        shuffledPlaylist[j] = temp;
      }

      setIndex(0);
      audioPlayer.current.src = shuffledPlaylist[0];
      setPlaylist(shuffledPlaylist);

      audioPlayer.current.play();
    } else {
      setIndex(0);
      audioPlayer.current.src = playlist[0];
      setPlaylist([playlist]);

      audioPlayer.current.play();
    }
  }

  const handleSliderChange = (event, newValue) => {
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = newValue;
      setElapsed(newValue);
    }
  }

  return (
    <>
      <audio
        className='sr-only'
        src={currentSong}
        ref={audioPlayer}
        muted={mute}
        type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <Box
        className='flex items-center gap-5 bg-dark'
        component='section'
        aria-label={`Podcast player | Now playing ${'Title'} from ${'Author'}`}
        aria-live='polite'>
        <TrackCaption
          Title={episode.trackName ? episode.trackName : 'Episode title'}
          Author={episode.collectionName? episode.collectionName : 'Author'}
          Img={episode.artworkUrl160 ? episode.artworkUrl160 : 'https://picsum.photos/200/200'}
          ImgAlt={'Episode cover'}
        />
        {/* play controls */}
        <Box className='flex w-full'>
          <PlayControls
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            toggleBackward={toggleBackward}
            toggleForward={toggleForward}
            toggleSkipBackward={toggleSkipBackward}
            toggleSkipForward={toggleSkipForward}
            toggleShuffle={toggleShuffle}
          />
          <TrackControls
            Duration={duration}
            Progress={elapsed}
            Handle={handleSliderChange}
          />
        </Box>
        <Box
          className='player-volume-controls flex items-center gap-2 pr-5'>
          <VolumeControls
            volume={volume}
            mute={mute}
            onVolumeChange={(e, v) => setVolume(v)}
            onMuteToggle={() => setMute(!mute)}
          />
        </Box>
      </Box>
    </>
  )
}

export default Player
