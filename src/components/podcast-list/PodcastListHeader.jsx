import { Box, Typography } from '@mui/material'

const PodcastListHeader = ({
  fixHead
}) => {
  return (
    <Box
      className={fixHead &&'bg-app-bg sticky top-0 w-full'}
      component={'thead'}>
      <Box component={'tr'}>
        <Box
          className='w-11 align-top'
          component={'th'}>
          <Typography
            className='sr-only'
            variant={'p'}>
            Podcast cover
          </Typography>
        </Box>
        <Box
          className='text-left align-top'
          component={'th'}
          sx={{width: 200}}>
          <Typography
            className='text-alt font-semibold block h-10'
            variant={'span'}>
            Name
          </Typography>
        </Box>
        <Box
          className='text-left align-top'
          component={'th'}>
          <Typography
            className='text-alt font-semibold'
            variant={'p'}>
            Description
          </Typography>
        </Box>
        <Box
          className='text-center align-top'
          component={'th'}>
          <Typography
            className='text-alt font-semibold'
            variant={'p'}>
            Released
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PodcastListHeader
