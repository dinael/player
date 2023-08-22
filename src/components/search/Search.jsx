import {
  Stack,
  Typography
} from '@mui/material'

import { Input } from '@mui/base'

import { Search } from '@mui/icons-material'

const PodcastSearch = ({
  type,
  label,
  value,
  placeholder,
  className,
  onChange }) => {

  return (
    <Stack
      className='podcast-search-main w-full'
      role='search'>
      <Typography
        className='sr-only'
        variant={'label'}>
        {`${label}:`}
      </Typography>
      <Input
        type={type ? type : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='flex items-center w-full rounded-lg bg-dark'
        aria-label={label}
        slotProps={{
          input: {
            'aria-label': 'Search your favorite podcast',
            'placeholder': 'Search',
            'className': 'bg-transparent rounded-lg w-full p-2.5 placeholder-alt'
          }
        }}
        startAdornment={
          <Search className='ml-3 mr-1' />
        }
      />
    </Stack>
  )
}

export default PodcastSearch