import { useParams, Navigate } from 'react-router-dom'
import { movies_Q3 } from '../data'

type MyParams = {
    id: string
}

function FinalPage() {
    const {id} = useParams() as MyParams
    const movie = movies_Q3.filter(movie => movie.id === +id)

  return (
    <div className='page'>
        {movie.length 
        ? <a href={movie[0].link} target='_blank' rel='noreferrer'>Watch {movie[0].title}</a>
        : <Navigate to={"/"}/>}
    </div>
  )
}

export default FinalPage