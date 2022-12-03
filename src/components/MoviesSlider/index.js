// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const MovieSlider = props => {
  const {movies} = props
  console.log('Movies:', movies)
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map(movie => (
          <MovieItem item={movie} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
