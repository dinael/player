import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePodcastDetailContext } from '../../context/PodcastDetailContext'

import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { Button } from '@mui/base'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

import PodcastDetailHeader from '../podcast-detail-header/PodcastDetailHeader'
import PodcastListControllers from '../list-controllers/list-controllers'
import EpisodesList from '../episode-list/EpisodeList'

import SearchEpisode from '../search/Search'

const PodcastDetail = () => {
  const { podcastId } = useParams()
  const { fetchData, error, podcastItem, episodeList } = usePodcastDetailContext()

  const [filteredEpisodeList, setFilteredEpisodeList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortType, setSortType] = useState('')

  useEffect(() => {
    fetchData(podcastId)
  }, [podcastId])

  useEffect(() => {
    if (episodeList) {
      const filteredEpisodes = episodeList.filter((episode) =>
        episode.trackName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEpisodeList(filteredEpisodes)
    }
  }, [searchTerm, episodeList])


  if (error) {
    return <p>Error: {error}</p>
  }

  if (!episodeList || episodeList.length === 0) {
    return <p>Loading...</p>
  }

  const headerPodcast = {
    title: podcastItem[0].artistName,
    img: podcastItem[0].artworkUrl600
  }

  const handleChange = (event) => {
    setSortType(event.target.value);
  };

  let sortedEpisodeList = [...episodeList];

  if (sortType === 'top') {
    sortedEpisodeList.sort((a, b) => a.trackName.localeCompare(b.trackName));
  } else if (sortType === 'untop') {
    sortedEpisodeList.sort((a, b) => b.trackName.localeCompare(a.trackName));
  }

  return (
    <>
      <Box
        className='flex items-center gap-3 pt-8 pb-5'
        role='search'>
        <Link
          to='/'
          className='flex items-center justify-center w-11 h-11 rounded-lg bg-dark hover:bg-accent ease-in-out duration-300'>
          <ArrowBackIosNewIcon />
        </Link>
        <SearchEpisode
          label={'Search Episode'}
          placeholder={'Search your favorite Episode'}
          value={searchTerm}
          type={'search'}
          onChange={(event) => setSearchTerm(event.target.value)} // Actualiza el término de búsqueda
        />
      </Box>
      <Box
        component={'section'}
        className='overflow-y-auto'>
        <Box
          className='pt-6'
          aria-describedby='podcast-name'>
          <PodcastDetailHeader
            Title={headerPodcast.title}
            ImgSrc={headerPodcast.img}
          />
          <PodcastListControllers
            className='mb-6'
            sortType={sortType}
            onSortTypeChange={handleChange}>
            <Button
              title={`'Last track:' ${episodeList[0].trackName}`}
              className='bg-accent hover:bg-accent-dark rounded-full p-2 ease-in-out duration-300'>
              <PlayArrowIcon fontSize='large' />
            </Button>
          </PodcastListControllers>
        </Box>
        <Box className='w-full'>
          <EpisodesList episodes={filteredEpisodeList} />
        </Box>
      </Box>
    </>
  )
}

export default PodcastDetail
