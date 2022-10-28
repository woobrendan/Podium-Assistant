import { useState } from 'react'

const PodiumButton = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClick = () => {
    
  }
  return (
    <>
      {!isSubmitted && <Button variant="contained" color="error" onClick={handleSubmit}>Submit</Button>}
      {isSubmitted && <Button variant="contained" color="success" onClick={handleSubmit}>Update</Button>}
    </>
  )
}

export default PodiumButton