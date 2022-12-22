import { movies_Q3 } from "../data"
import { useParams } from "react-router-dom"
import Movies from "../components/Movies"
import QBanner from "../components/QBanner"

function Question3() {
  const {id} = useParams()
  const filteredMovies = movies_Q3.filter(movie => id?.split("-").includes(movie.id.toString()))

  return (
    <div className="page">
      <QBanner questionNum={3}/>
      <h3>Which one do you want to watch now?</h3>
      <Movies movies={filteredMovies} next="watch"/>
    </div>
  )
}

export default Question3