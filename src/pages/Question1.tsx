import { movies_Q1 } from "../data"
import Movies from "../components/Movies"
import QBanner from "../components/QBanner"

function Question1() {
  return (
    <div className="page">
      <QBanner questionNum={1}/>
      <h3>Choose one of the three movies</h3>
      <Movies movies={movies_Q1} next="q2"/>
    </div>
  )
}

export default Question1