import { createContext, useContext, useState, useEffect } from 'react'

const PodcastContext = createContext()

const PodcastProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [podcasts, setPodcasts] = useState([])
  const [podcastItem2, setPodcastItem2] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const UrlApi = 'https://itunes.apple.com/us/rss/toppodcasts/genre=1310/limit=100/json'

  useEffect(() => {
    const fetchData = async () => {
      const currentTime = new Date().getTime()
      try {
        const storedData = localStorage.getItem('podcastData')
        const storedTime = localStorage.getItem('podcastTime')
        const isDataValid = storedData && storedTime && currentTime - parseInt(storedTime) < 24 * 60 * 60 * 1000

        if (isDataValid) {
          const data = JSON.parse(storedData)
          setItems(data.feed.entry)
        } else {
          const response = await fetch(UrlApi)
          const data = await response.json()

          localStorage.setItem('podcastData', JSON.stringify(data))
          localStorage.setItem('podcastTime', currentTime.toString())

          setItems(data.feed.entry)
        }
        setLoading(false)
      } catch (error) {
        console.log('Error fetching data:', error)
        setError('Ocurrió un error al obtener los datos.')
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const podcastDetail = () => {
      const podcastList = items.map((podcast) => ({
        id: podcast.id.attributes['im:id'],
        img: podcast['im:image'][2].label,
        name: podcast['im:name'].label,
        title: podcast['im:name'].label,
        author: podcast['im:artist'].label,
        description: podcast['summary'].label,
        date: podcast['im:releaseDate'].attributes.label
      }))
      setPodcasts(podcastList)
    }

    podcastDetail()
  }, [items])

  useEffect(() => {
    const podcastItems2 = () => {
      const podcastListItem2 = items.map((podcast) => ({
        id: podcast.id.attributes['im:id'],
        img: podcast['im:image'][2].label,
        name: podcast['im:name'].label,
        title: podcast['im:name'].label,
        author: podcast['im:artist'].label,
        description: podcast['summary'].label,
        date: podcast['im:releaseDate'].attributes.label
      }))
      setPodcastItem2(podcastListItem2)
    }

    podcastItems2()
  }, [items])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  if (!items.length) {
    return <p>Results not found.</p>
  }

  return (
    <PodcastContext.Provider
      value={{
        podcasts,
        loading,
        podcastItem2,
        error
      }}>
      {children}
    </PodcastContext.Provider>
  )
}

export const usePodcastContext = () => useContext(PodcastContext)

export default PodcastProvider
