import { Link } from 'react-router-dom'

import { Button } from '@mui/base'
import {
  Box,
  Stack,
  Typography
} from '@mui/material'

import Time from '../../utils/TimeConvertor'
import DateFormat from '../../utils/DateFormat'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'

const EpisodeListItem = ({
  Title,
  Author,
  Img,
  ImgAlt,
  Description,
  Date,
  Duration,
  Source
}) => {
  return (
    <Box
      component={'tr'}
      className='border-dark border-t'>
        <Box
          component={'td'}
          className='py-4'>
          <Button
            title={Source}
            className='hover:bg-accent rounded-full p-2 mr-2 ease-in-out duration-300' >
            <PlayArrowIcon />
          </Button>
        </Box>
      <Box component={'td'}>
        <Stack
          direction='row'
          className='gap-4 items-center'>
          <img
            className='min-w-[44px] h-11 rounded border border-transparent hover:border hover:border-accent ease-in-out duration-300'
            src={Img ? Img : 'https://picsum.photos/44'}
            alt={ImgAlt ? ImgAlt : 'Podcast cover'} />
          <Stack>
            <Typography
              className='leading-1 w-[16ch] truncate mr-5'
              title={Title ? Title : 'Episode name not found'}>
              {Title ? Title : 'Episode name not found'}
            </Typography>
            <Typography
              className='text-alt leading-1 w-[16ch] truncate'
              title={Author ? Author : 'Author not found'}>
              {Author ? Author : 'Author not found'}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        component={'td'}
        className='align-top'>
        <Typography
          className=' text-alt leading-1 line-clamp-2 pt-4 mr-5'
          title={Description ? Description : ' Description not found'}>
          {Description ? Description : ' Description not found'}
        </Typography>
      </Box>
      <Box
        component={'td'}
        className='text-center'>
        <Typography
          className='text-alt mr-3'
          variant='body1'>
          <DateFormat date={Date} />
        </Typography>
      </Box>
      <Box
        component={'td'}
        className='text-center'>
        <Typography
          className='text-alt'
          variant='body1'>
          <Time duration={Duration} />
        </Typography>
      </Box>
    </Box>
  )
}

export default EpisodeListItem
