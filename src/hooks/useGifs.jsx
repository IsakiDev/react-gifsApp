import { useEffect, useState } from 'react'
import { getGifs } from '../services/gifs'

export default function useGifs ({ category }) {
  const [gifs, setGifts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getGifsCategory = async () => {
    const gifs = await getGifs(category)
    setGifts(gifs)
    setIsLoading(false)
  }

  useEffect(() => {
    getGifsCategory()
  }, [])

  return {
    gifs,
    isLoading
  }
}
