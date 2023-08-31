export function GifItem ({ title, url }) {
  return (
    <article className='card'>
      <img src={url} alt={`Imagen del Gif ${title}`} />
      <p>{title}</p>
    </article>
  )
}
