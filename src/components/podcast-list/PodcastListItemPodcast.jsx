import { Link } from 'react-router-dom'

import {
  Button
} from '@mui/base'
import {
  Box,
  Stack,
  Typography
} from '@mui/material'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'

const PodcastListItem = ({
  Title,
  Author,
  Description,
  Date,
  Duration
}) => {
  return (
    <Box
      component={'tr'}
      className='border-dark border-t'>
      <Box
        component={'td'}
        className='py-4'>
        <Button className='hover:bg-accent rounded-full p-2 mr-2 ease-in-out duration-300' >
          <PlayArrowIcon />
        </Button>
      </Box>
      <Box
        component={'td'}
        className='py-4'>
        <Stack direction='row'>
          <img
            className='shadow-sm bg-accent w-11 h-11 rounded'
            src={'https://picsum.photos/44'}
            alt={'Random pic'}
          />
          <Stack className='ml-5'>
            <Typography className='leading-1 truncate'>
              {Title}
            </Typography>
            <Typography className='text-alt leading-none truncate'>
              <Link
                className='hover:underline'
                to={'/podcast'}>
                {Author}
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        component={'td'}
        className='py-4'>
        <Typography
          variant='body1'
          className='text-alt'>
          {Description}
        </Typography>
      </Box>
      <Box
        component={'td'}
        className='py-4 text-center'>
        <Typography
          className='text-alt'
          variant='body1'>
          {Date}
        </Typography>
      </Box>
      <Box
        component={'td'}
        className='py-4 text-center'>
        <Typography
          className='text-alt'
          variant='body1'>
          0:00:00
        </Typography>
      </Box>
    </Box>
  )
}

export default PodcastListItem