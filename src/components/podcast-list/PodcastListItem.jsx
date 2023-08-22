import { Link } from 'react-router-dom'

import {
  Box,
  Typography
} from '@mui/material'

import DateFormat from '../../utils/DateFormat'

const PodcastListItem = ({
  Title,
  Author,
  Img,
  ImgAlt,
  Description,
  Date,
  Url
}) => {
  return (
    <Box
      component={'tr'}
      className='border-dark border-t'>
      <Box
        component={'td'}
        className='py-4'>
        <Link
          className='hover:border hover:border-accent'
          to={Url}>
            <img
              className='min-w-[44px] h-11 mr-5 rounded border border-transparent hover:border hover:border-accent ease-in-out duration-300'
              src={Img ? Img : 'https://picsum.photos/44'}
              alt={ImgAlt ? ImgAlt : 'Podcast cover'}/>
          </Link>
      </Box>
      <Box component={'td'}>
        <Typography
          className='leading-1 w-[16ch] truncate mr-5'
          title={Title ? Title : 'Podcast name not found'}>
          <Link
            className='hover:underline'
            to={Url}>
            { Title ? Title : 'Podcast name not found' }
          </Link>
        </Typography>
        <Typography
          className='text-alt leading-1 w-[16ch] truncate'
          title={Author ? Author : 'Author not found'}>
            { Author ? Author : 'Author not found'}
        </Typography>
      </Box>
      <Box
        component={'td'}
        className='align-top'>
        <Typography
          className=' text-alt leading-1 line-clamp-2 pt-4 mr-5'
          title={Description ? Description : ' Description not found'}>
          { Description ? Description : ' Description not found'}
        </Typography>
      </Box>
      <Box
        component={'td'}
        className='text-center'>
        <Typography
          className='text-alt'
          variant='body1'>
          <DateFormat date={ Date } />
        </Typography>
      </Box>
    </Box>
  )
}

export default PodcastListItem
