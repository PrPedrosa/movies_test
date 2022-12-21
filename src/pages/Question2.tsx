import {movies_Q2} from "../data"
import Movies from "../components/Movies"
import { useParams } from "react-router-dom"

function Question2() {
  const {id} = useParams()
  const filteredMovies = movies_Q2.filter(movie => id?.split("-").includes(movie.id.toString()))

  return (
    <Movies movies={filteredMovies} next="q3"/>
  )
}

export default Question2