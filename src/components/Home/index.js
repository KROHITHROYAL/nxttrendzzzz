// Write your JS code here
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Clothes That Get You Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          alt="clothes that get you noticed"
          className="home-image"
        />
        <p className="home-description">
          Fashion is the part of the daily air and it fsdsf fdanfbfsd fjn
          wfjhjfgy huhfuh hhf huj hfdhf fdfgyd fiejfidj fgtgf hgdgf fdhf fdf
          fjfuh [pooji] fhjfdj fjfkjd fhjhfj fjkfjkdjfkdjfkj
        </p>
        <button type="button" className="home-shop-now-butn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
