import {
  Typography,
  Slider,
  Stack,
} from '@mui/material'

import TimeFormatter from '../../utils/TimeFormat'

const TrackControls = ({
  Duration,
  Progress,
  Handle,
}) => {
  return (
    <Stack
      className='flex w-full items-center px-6 gap-5'
      direction='row'>
      <Typography
        variant='time'
        className='w-20'>
        <TimeFormatter time={ Progress } />
      </Typography>
      <Slider
        value={ Progress }
        max={ Duration }
        onChange={ Handle }
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
        }} />
      <Typography
        variant='time'
        className='w-20 text-alt'>
        <Typography
          variant='span'
          className='mr-1'>
          -
        </Typography>
        <TimeFormatter time={ Duration - Progress } />
      </Typography>
    </Stack>
  )
}

export default TrackControls
