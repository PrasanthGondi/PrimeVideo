// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {item} = props
  console.log('Item URL:', item.thumbnailUrl)
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img src={item.thumbnailUrl} className="im1" alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              id="closeButton"
            >
              <IoMdClose testid="closeButton" />
            </button>
            <ReactPlayer url={item.videoUrl} />
          </>
        )}
      </Popup>
      {/* <img src={item.thumbnailUrl} className="im1" /> */}
    </div>
  )
}

export default MovieItem
