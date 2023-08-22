import {
  Box,
  Stack,
  Typography
} from '@mui/material'

import VerifiedIcon from '@mui/icons-material/Verified'

const PodcastDetailHeader = ({
  Title,
  ImgSrc,
  ImgAlt,
  Author,
  Genre,
  Description,
  ClassName
 }) => {
  return (
    <Box
      className='flex flex-col-reverse'
      component={'header'}>
      <Typography
        className='flex justify-center items-center font-bold text-3xl py-2 w-full'
        variant='h2'
        id='podcast-name'>
        {Title
          ? `${Title}`
          : 'Title not found'}
        {Title && <VerifiedIcon className='mx-2 text-verification' />}
      </Typography>
      <Stack className='flex items-center justify-center w-full rounded-2xl h-[280px] bg-dark overflow-hidden'>
        {
          ImgSrc
            ? <img
              src={ImgSrc}
              alt={ImgAlt}
              className='w-full h-[280px] object-cover object-top' />
            : <img
              className=' object-scale-down h-8 w-8 opacity-30'
              alt='Loading podcast cover'
              src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif' />
        }
      </Stack>
    </Box>
  )
}

export default PodcastDetailHeader
