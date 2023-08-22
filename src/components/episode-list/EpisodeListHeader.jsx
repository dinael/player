import { Box, Typography } from '@mui/material'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'

const EpisodeListHeader = ({
  fixHead
}) => {
  return (
    <Box
      className={fixHead &&'bg-app-bg sticky top-0'}
      component={'thead'}>
      <Box component={'tr'}>
        <Box
          className='w-11 align-top'
          component={'th'}>
          <Typography
            className='text-alt text-center font-semibold'
            variant={'p'}
            aria-hidden='true'>
            #
          </Typography>
          <Typography
            className='sr-only'
            variant={'p'}>
            Play column
          </Typography>
        </Box>
        <Box
          className='text-left align-top'
          component={'th'}
          sx={{width: 200}}>
          <Typography
            className='text-alt font-semibold block h-10'
            variant={'span'}>
            Title
          </Typography>
        </Box>
        <Box
          className='text-left align-top'
          component={'th'}>
          <Typography
            className='text-alt font-semibold'
            variant={'p'}>
            Topic
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
        <Box
          className='text-center align-top'
          component={'th'}>
          <Typography className='sr-only'>
            Duration
          </Typography>
          <QueryBuilderIcon
            fontSize='small'
            className='text-alt' />
        </Box>
      </Box>
    </Box>
  )
}

export default EpisodeListHeader
