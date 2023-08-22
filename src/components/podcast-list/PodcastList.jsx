import { useState, useEffect } from 'react'

import PodcastSearch from '../search/Search'
import PodcastListHeader from './PodcastListHeader'
import PodcastListItem from './PodcastListItem'

import PodcastListControllers from '../list-controllers/list-controllers'

import { Box, Typography } from '@mui/material'

const ListHeader = ({ children }) => (
  <>{children}</>
)

const PodcastList = ({
  items,
  children,
  header
}) => {

  const [SearchPodcast, setSearchPodcast] = useState('')
  const [filteredPodcast, setFilteredPodcast] = useState([])
  const [sortType, setSortType] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    if (items) {
      const filteredPodcast = items.filter((item) =>
        item.name.toLowerCase().includes(SearchPodcast.toLowerCase())
      )
      setFilteredPodcast(filteredPodcast)
    }
  }, [SearchPodcast, items])

  useEffect(() => {
    if (items) {
      let sortedPodcast = [...items]

      if (sortType === 'name') {
        sortedPodcast.sort((a, b) => {
          const nameA = a.name.toLowerCase()
          const nameB = b.name.toLowerCase()
          return sortOrder === 'asc'
            ? nameA.localeCompare(nameB)
            : nameB.localeCompare(nameA)
        })
      } else if (sortType === 'date') {
        sortedPodcast.sort((a, b) => {
          const dateA = new Date(a.date)
          const dateB = new Date(b.date)
          return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
        })
      }

      const filteredAndSortedPodcast = sortedPodcast.filter((item) =>
        item.name.toLowerCase().includes(SearchPodcast.toLowerCase())
      )

      setFilteredPodcast(filteredAndSortedPodcast)
    }
  }, [SearchPodcast, items, sortType, sortOrder])

  useEffect(() => {
    if (items) {
      setFilteredPodcast(items)
    }
  }, [items])

  const handleChange = (event) => {
    setSearchPodcast(event.target.value)
  }

  if (!items) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Box
        className='flex items-center gap-3 pt-8 pb-5'
        role='search'>
        <PodcastSearch
          label={'Search podcast'}
          placeholder={'Search your favorite podcast'}
          value={SearchPodcast}
          type={'search'}
          onChange={handleChange}
        />
      </Box>
      {header && <ListHeader>{header}</ListHeader>}
      <PodcastListControllers
        sortType={sortType}
        onSortTypeChange={(e) => setSortType(e.target.value)}>
        <Typography className='text-alt'>
          {`Total results: ${filteredPodcast.length}`}
        </Typography>
      </PodcastListControllers>
      {/* ## podcast-table */}
      {filteredPodcast.length === 0
        ? <Typography className='text-center pt-8'>
          Results not found.
        </Typography>
        : <Box className='podcast-table my-6 overflow-auto'>
          <Box
            className='w-full'
            component={'table'}>
            <PodcastListHeader fixHead />
            <Box component={'tbody'}>
              {filteredPodcast.map((item) => (
                <PodcastListItem
                  key={item.name}
                  Title={item.name}
                  Author={item.author}
                  Description={item.description}
                  Img={item.img}
                  ImgAlt={item.name}
                  Date={item.date}
                  Url={`/podcast/${item.id}`}
                />
              ))}
            </Box>
          </Box>
        </Box>
      }
    </>
  )
}

export default PodcastList
