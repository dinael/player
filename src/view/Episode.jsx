import MainHeader from '../components/header/Header'
import EpisodeDetail from '../components/episode-detail/EpisodeDetail'

import { AppStyle as App } from '../App.style.js'

const Home = () => {
  return (
    <>
      <MainHeader />
      <App.Main>
        <EpisodeDetail />
      </App.Main>
    </>
  )
}

export default Home