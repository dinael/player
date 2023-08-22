import { usePodcastContext } from '../context/PodcastContext'

import PodcastList from '../components/podcast-list/PodcastList'

const Home = () => {
  const { podcasts } = usePodcastContext()

  return (
    <>
      <PodcastList  items={podcasts} />
    </>
  )
}

export default Home
