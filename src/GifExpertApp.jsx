import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export function GifExpertApp () {
  const [categories, setCategories] = useState([''])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return

    setCategories(prevState => [newCategory, ...prevState])
  }

  return (
    <>
      <header className='items-header'>
        <h1>GifsApp</h1>
        <AddCategory
          onNewCategory={onAddCategory}
        />
      </header>

      <ul>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
            // <li key={category}>{category}</li>
          ))
        }
      </ul>
    </>
  )
}
