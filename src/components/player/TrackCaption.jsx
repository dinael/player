import { Link } from 'react-router-dom'

import {
  Typography,
  Box
} from '@mui/material'

const EpisodeCaption = ({
  Title,
  Author,
  Img,
  ImgAlt,
}) => {
  return (
    <>
      <Box className='flex flex-col min-w-[280px]'>
        <Typography
          className='font-medium truncate'
          variant={'Body1'}
          id='podcast-track-name'>
          { Title }
        </Typography>
        <Typography
          className='text-alt font-medium truncate'
          variant={'Body1'}>
          <Link
            className='hover:underline'
            to={'/podcast'}>
            { Author }
          </Link>
        </Typography>
      </Box>
      <img
        className='flex order-first w-[110px] h-[110px]'
        src={ Img }
        alt={ ImgAlt } />
    </>
  )
}

export default EpisodeCaption
