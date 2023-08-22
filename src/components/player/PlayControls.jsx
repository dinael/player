import { Stack } from '@mui/material'
import { Button } from '@mui/base'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import FastRewindIcon from '@mui/icons-material/FastRewind'
import FastForwardIcon from '@mui/icons-material/FastForward'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import ShuffleIcon from '@mui/icons-material/Shuffle'

const PlayControls = ({
  isPlaying,
  togglePlay,
  toggleBackward,
  toggleForward,
  toggleSkipBackward,
  toggleSkipForward,
  toggleShuffle
}) => {

  return (
    <Stack
      className='Player-controls items-center gap-2'
      direction='row'>
      <Button
        className='w-12 h-12 hover:bg-accent active:bg-accent-dark ease-in-out duration-300 rounded-full'
        aria-label='Skip previous track'
        onClick={toggleSkipBackward}>
        <SkipPreviousIcon disabled={true} fontSize='large' />
      </Button>
      <Button
        className='hidden none w-12 h-12 hover:bg-accent active:bg-accent-dark ease-in-out duration-300 rounded-full'
        aria-label='Rewind by 10 seconds'
        onClick={toggleBackward}>
        <FastRewindIcon fontSize='large' />
      </Button>
      <Button
        className='w-12 h-12 hover:bg-accent active:bg-accent-dark ease-in-out duration-300 rounded-full'
        aria-label={isPlaying ? 'Pause' : 'Play'}
        onClick={togglePlay}>
        {isPlaying ? <PauseIcon fontSize='large'/> : <PlayArrowIcon fontSize='large'/>}
      </Button>
      <Button
        className='hidden w-12 h-12 hover:bg-accent active:bg-accent-dark ease-in-out duration-300 rounded-full'
        aria-label='Advance by 10 seconds'
        onClick={toggleForward}>
        <FastForwardIcon fontSize='large' />
      </Button>
      <Button
        className='w-12 h-12 hover:bg-accent active:bg-accent-dark ease-in-out duration-300 rounded-full'
        aria-label='Skip next track'
        onClick={toggleSkipForward}>
        <SkipNextIcon fontSize='large' />
      </Button>
      <Button
        className='w-12 h-12 hover:bg-accent active:bg-accent-dark ease-in-out duration-300 rounded-full'
        aria-label='Toggle Shuffle'
        onClick={toggleShuffle}>
        <ShuffleIcon fontSize='large' />
      </Button>
    </Stack>
  );
};

export default PlayControls;
