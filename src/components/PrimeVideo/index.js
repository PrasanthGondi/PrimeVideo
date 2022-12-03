// Write your code here
import './index.css'
import MovieSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="bg1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="im1"
      />
      <h1>Action Movies</h1>
      <MovieSlider movies={moviesList.filter(x => x.categoryId === 'ACTION')} />
      <h1>Comedy Movies</h1>
      <MovieSlider movies={moviesList.filter(x => x.categoryId === 'COMEDY')} />
    </div>
  )
}

export default PrimeVideo
