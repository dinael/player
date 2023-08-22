import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PodcastProvider from './context/PodcastContext'
import PodcastDetailProvider from './context/PodcastDetailContext'

import { Container } from '@mui/material'

import MainHeader from './components/header/Header'
import PodcastPlayer from './components/player/Player'

import TitleUpdater from './utils/TitleUpdater'

import Home from './view/Home'
import Podcast from './view/Podcast'
import NotFound from './view/NotFound'

function App() {
  const lastEpisodeList = [
    'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_650.mp3',
    'https://500songs.com/podcast-download/1833/episode-167-the-weight-by-the-band.mp3'
  ];

  return (
    <>
      <BrowserRouter>
        <PodcastProvider>
          <PodcastDetailProvider>
              <Container
                maxWidth='md'
                className='main-content flex flex-col min-h-full'
                component={'main'}>
                <TitleUpdater />
                <MainHeader />
                <Routes>
                  <Route
                    path="/"
                    exact
                    element={<Home />} />
                  <Route
                    path="/podcast/:podcastId"
                    element={<Podcast />} />
                  <Route
                    path='*'
                    element={<NotFound />} />
                </Routes>
              </Container>
              <PodcastPlayer
                className="player"
                episode={lastEpisodeList} />
          </PodcastDetailProvider>
        </PodcastProvider>
      </BrowserRouter>
    </>
  )
}

export default App
