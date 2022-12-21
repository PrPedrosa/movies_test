import {movies_Q1} from "../data"
import Movies from "../components/Movies"

function Question1() {
  return (
    <div>
      <Movies movies={movies_Q1} next="q2"/>
    </div>
  )
}

export default Question1