import { Box } from '@mui/material'

import EpisodeListHeader from './EpisodeListHeader'
import EpisodeListItem from './EpisodeListItem'

const EpisodesList = ({ episodes }) => {
  return (
    <>
      {episodes.length === 0
        ? <p>Not found episodes</p>
        : <Box className='episode-table my-6 overflow-auto'>
            <Box
              className='w-full'
              component={'table'}>
              <EpisodeListHeader fixHead />
              <Box component={'tbody'}>
                {episodes.map((episode, index) => (
                  <EpisodeListItem
                    key={episode.trackName}
                    Img={episode.artworkUrl600}
                    Title={episode.trackName}
                    Author={episode.collectionName}
                    Description={episode.description}
                    Date={episode.releaseDate}
                    Duration={episode.trackTimeMillis}
                    Source={episode.episodeUrl}
                  />
                ))}
              </Box>
            </Box>
          </Box>
      }
    </>
  )
}

export default EpisodesList
