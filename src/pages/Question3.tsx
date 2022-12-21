import {movies_Q3} from "../data"
import Movies from "../components/Movies"
import { useParams } from "react-router-dom"

function Question3() {
  const {id} = useParams()
  const filteredMovies = movies_Q3.filter(movie => id?.split("-").includes(movie.id.toString()))

  return (
    <Movies movies={filteredMovies} next="watch"/>
  )
}

export default Question3