// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {movies} = props
  console.log('Movies:', movies)
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Slider {...settings}>
        {movies.map(movie => (
          <MovieItem item={movie} />
        ))}
      </Slider>
    </>
  )
}

export default MovieSlider
