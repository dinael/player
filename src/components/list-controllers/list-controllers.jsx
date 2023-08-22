import { Box, Stack } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const ListControllers = ({
  sortType,
  onSortTypeChange,
  children,
  className
}) => {
  return (
    <Box className={`flex w-full items-center justify-between ${className}`}>
      {children ? <Stack>{children}</Stack> : null }
      <Stack
        direction='row'
        className='items-center gap-2 hover:bg-dark h-11 px-4 rounded-lg ease-in-out duration-300'>
        <FilterAltIcon />
        <select
          className='bg-transparent w-34'
          value={sortType}
          aria-label='Order by:'
          onChange={onSortTypeChange}>
          <option value='' disabled aria-hidden='true'>
            Order by
          </option>
          <option value="topDesc">Top ↓</option>
          <option value="topAsc">Top ↑</option>
        </select>
      </Stack>
    </Box>
  )
}

export default ListControllers
