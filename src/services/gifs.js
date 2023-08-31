const API_KEY = process.env.REACT_APP_API_KEY

export const getGifs = async (category) => {
  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`)
    const { data } = await res.json()

    const gifs = data.map(gif => (
      {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
      }
    ))

    return gifs
  } catch (error) {
    return error
  }
}
