import { useState } from 'react'
import { Button } from '@mui/material';

const PodiumButton = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClick = () => {
    setIsSubmitted(true)
  }
  return (
    <>
      {!isSubmitted && <Button variant="contained" color="error" onClick={handleClick}>Submit</Button>}
      {isSubmitted && <Button variant="contained" color="success" onClick={handleClick}>Update</Button>}
    </>
  )
}

export default PodiumButton