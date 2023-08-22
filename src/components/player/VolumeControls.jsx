import { Slider } from '@mui/material'
import { Button } from '@mui/base'

import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import VolumeMuteIcon from '@mui/icons-material/VolumeMute'

const VolumeControls = ({
  volume,
  mute,
  onVolumeChange,
  onMuteToggle
}) => {
  const getVolumeIcon = () => {
    if (mute) return <VolumeOffIcon fontSize='large' />
    if (volume === 0) return <VolumeOffIcon fontSize='large' />
    if (volume <= 5) return <VolumeMuteIcon fontSize='large' />
    if (volume <= 20) return <VolumeDownIcon fontSize='large' />
    if (volume <= 75) return <VolumeUpIcon fontSize='large' />
    return <VolumeUpIcon fontSize='large' />
  }

  return (
    <div className='flex items-center gap-2 min-w-[200px] pr-5'>
      <Button
        className='flex items-center justify-center min-w-[3rem] w-12 h-12 hover:bg-accent active:bg-accent-dark ease-in-out duration-300 rounded-full'
        aria-label={ mute ? 'unmute' : 'mute' }
        onClick={ onMuteToggle }>
        { getVolumeIcon() }
      </Button>
      <Slider
        className='flex flex-auto w-full bg-gray-200 rounded-lg appearance-none cursor-pointer range-none dark:bg-gray-700'
        color="secondary"
        valueLabelDisplay="auto"
        min={ 0 }
        max={ 100 }
        value={ volume }
        disabled={ mute }
        onChange={ onVolumeChange }
        sx={{
          color: 'white',
          '& .MuiSlider-thumb': {
            width: 0,
            height: 0,
            '&:hover': {
              width: 12,
              height: 12,
            }
          },
        }}
      />
    </div>
  )
}

export default VolumeControls
