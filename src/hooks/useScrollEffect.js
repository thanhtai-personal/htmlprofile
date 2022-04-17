import { useEffect } from 'react'

const useScrollEffect = (scrollClassName = 'scroll-effect', scrollingClassName = 'scrolling') => {
  const handleScroll = () => {
    const useScrollElements = document.querySelectorAll(`.${scrollClassName}`);
    if (!useScrollElements) return
    useScrollElements.forEach(elem => {
      elem.className = scrollingClassName;
      setTimeout(() => {
        elem.className = scrollClassName;
      }, 1000)
    })
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export default useScrollEffect