import React from 'react'

function QBanner({questionNum} : {questionNum : number}) {
  return (
    <div className='banner'>
        <p>QUESTION {questionNum} OF 3</p>
        <div className='circle-box'>
            <div className={`circle ${questionNum === 1 && "fill"}`}></div>
            <div className={`circle ${questionNum === 2 && "fill"}`}></div>
            <div className={`circle ${questionNum === 3 && "fill"}`}></div>
        </div>
    </div>
  )
}

export default QBanner