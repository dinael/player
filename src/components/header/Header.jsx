import {
  Box,
  Typography
} from '@mui/material'

function MainHeader() {
  return (
    <Box
      component={'header'}
      className='sr-only'>
      <Typography variant='app-title'>
        Podcaster
      </Typography>
      <Typography>
        the app to search your favorite podcast
      </Typography>
    </Box>
  )

}

export default MainHeader
