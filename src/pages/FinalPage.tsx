import { useParams } from 'react-router-dom'
import { movies_Q3 } from '../data'

type MyParams = {
    id: string
}

function FinalPage() {
    const {id} = useParams() as MyParams
    const movie = movies_Q3.filter(movie => movie.id === +id)

  return (
    <div className='page'>
        <div className='final-page-box'>
          <h4>WATCH NEW MOVIES FOR FREE!</h4>
          <p>Watch any movies online for free without ads!</p>
          <p>Have fun watching your favourite movies!</p>
          <a href={movie[0].link} target="_blank" rel='noreferrer'>
            <p>WATCH HERE!</p>
            </a>
        </div>
    </div>
  )
}

export default FinalPage