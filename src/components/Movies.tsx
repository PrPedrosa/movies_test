import { Movie } from '../data'
import { Link } from "react-router-dom"

type Props = {
    movies: Movie[]
    next: string
}

function Movies({movies, next} : Props) {

  function goTopOfPage() {
     document.documentElement.scrollTop = 0;
  }

  return (
    <div className='images-box'>
        {movies && movies.map(movie =>
          <Link to={`/${next}/${movie.connections.join("-") === "0"? movie.id: movie.connections.join("-")}`} onClick={goTopOfPage}>
            <div className='image-container'>
            <img src={movie.image} alt={movie.title} className="movie-poster"/>
            </div>
          </Link>)}
    </div>
  )
}

export default Movies