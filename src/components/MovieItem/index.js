// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {item} = props
  console.log('Item URL:', item.thumbnailUrl)
  return (
    <div>
      <Popup modal trigger={<button>Hello</button>}>
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={item.videoUrl} />
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
