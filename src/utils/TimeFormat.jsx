const TimeFormatter = ({ time }) => {
  if (time && !isNaN(time)) {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = Math.floor(time % 60)

    const formattedHours = hours < 10 ? `0${hours}` : hours
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return (
      <>
        {formattedHours}:{formattedMinutes}:{formattedSeconds}
      </>
    )
  }
  return <>00:00:00</>
};

export default TimeFormatter;
