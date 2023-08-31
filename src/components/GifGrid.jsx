import { GifItem } from '../components'
import useGifs from '../hooks/useGifs'

export function GifGrid ({ category }) {
  const { gifs, isLoading } = useGifs({ category })

  return (
    <>
      {
        isLoading && <h1>Cargando...</h1>
      }

      <h1>{category}</h1>
      <section className='card-grid'>
        {
          gifs.map((image) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }
      </section>
    </>
  )
}
