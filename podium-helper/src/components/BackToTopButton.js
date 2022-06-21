import {useEffect, useState} from 'react'


function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 50,
      behavior: "smooth"
    })
  }
  return (
    <div className="backToTopButton">
      
    </div>
  )
}

export default BackToTopButton
