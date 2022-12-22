import { movies_Q2 } from "../data"
import { useParams } from "react-router-dom"
import Movies from "../components/Movies"
import QBanner from "../components/QBanner"

function Question2() {
  const {id} = useParams()
  const filteredMovies = movies_Q2.filter(movie => id?.split("-").includes(movie.id.toString()))

  return (
    <div className="page">
      <QBanner questionNum={2}/>
      <h3>Which one do you like the most?</h3>
      <Movies movies={filteredMovies} next="q3"/>
    </div>
  )
}

export default Question2