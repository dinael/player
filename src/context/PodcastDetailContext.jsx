import { createContext, useContext, useState } from 'react'

const PodcastDetailContext = createContext()

const PodcastDetailProvider = ({ children }) => {
  const [error, setError] = useState(null)
  const [podcastItem, setPodcastItem] = useState([])

  const fetchData = async (podcastId) => {
    try {
      const cachedData = localStorage.getItem(`podcast-${podcastId}`);
      if (cachedData) {
        const data = JSON.parse(cachedData);
        setPodcastItem(data); // Cambiado a setPodcastItems para reflejar un array
      } else {
        const response = await fetch(
          `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=10`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setPodcastItem(data.results); // Cambiado a setPodcastItems para reflejar un array
          localStorage.setItem(`podcast-${podcastId}`, JSON.stringify(data.results));
        } else {
          setError('Results not found');
        }
      }
    } catch (error) {
      setError('Episode not found');
    }
  };

  const episodeList = podcastItem.slice(1);

  return (
    <PodcastDetailContext.Provider
      value={{
        fetchData,
        error,
        podcastItem,
        episodeList,
      }}>
      {children}
    </PodcastDetailContext.Provider>
  )
}

export const usePodcastDetailContext = () => useContext(PodcastDetailContext)

export default PodcastDetailProvider
