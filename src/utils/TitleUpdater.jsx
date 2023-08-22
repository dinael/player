import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const getTitleFromPath = (path) => {
  const titleMap = {
    '/': 'Home | Podcaster',
    '/podcast/:podcastId': 'Podcast | Podcaster'
  }

  return titleMap[path] || 'Podcast | Podcaster'
}

const TitleUpdater = () => {
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    const title = getTitleFromPath(path);
    document.title = title
  }, [path])

  return null
};

export default TitleUpdater
