import { useState } from 'react'
import { Movie } from '../data'
import { Link } from "react-router-dom"

type Props = {
    movies: Movie[]
    next: string
}

function Movies({movies, next} : Props) {
  
  return (
    <div>
        {movies.map(movie => <Link to={`/${next}/${movie.connections.join("-") === "0"? movie.id: movie.connections.join("-")}`}>
            {movie.title}
            </Link>)}
    </div>
  )
}

export default Movies