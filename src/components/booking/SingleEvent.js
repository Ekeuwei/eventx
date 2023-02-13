import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import thumbnail from 'public/images/thumbnail.jpeg'

const baseurl = "http://ec2-54-245-130-236.us-west-2.compute.amazonaws.com:8080/api/downloadFile/"

const SingleEvent = ({
    title,
    category,
    salesEndDate,
    fromDate,
    toDate,
    eventLogoUrl,
    eventType,
    location,
    thumbnail
}) => {
  const [imageUrl, setImageUrl] = useState(thumbnail);

  const handleImageLoad = () => {
    setImageUrl(baseurl+eventLogoUrl);
  };

  const handleImageError = () => {
    setImageUrl(thumbnail);
  };
  return (
    <div className="grid">
      <div className="image-holder">
        <img src={imageUrl} alt="Display_Photo" onLoad={handleImageLoad} onError={handleImageError}/>
        {eventType!==0 && <span className="tag">Free</span>}
      </div>
      <h5 className='ellipsis'>{title}</h5>
      <p className="txt-primary ellipsis">
        <small>{`${fromDate} - ${toDate}`}</small>
      </p>
      <div className="venue">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p className="ellipsis">{location[0].town}</p>
        <i class="fa fa-heart-o" aria-hidden="true"></i>
      </div>
    </div>
  )
}

SingleEvent.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    salesEndDate: PropTypes.string.isRequired,
    fromDate: PropTypes.string.isRequired,
    toDate: PropTypes.string.isRequired,
    eventLogoUrl: PropTypes.string.isRequired,
    eventType: PropTypes.number.isRequired,
    location: PropTypes.arrayOf({
        state: "Bayelsa",
        lga: "Nembe",
        town: "Nembe",
        street: "Okia Hotels, Agudama-epie",
        num_entries: 3,
        capacity: 400,
        alert_point: 300
    }).isRequired
}

SingleEvent.defaultProps = {
    title: "Art Workshop",
    category: "Art",
    salesEndDate: "",
    fromDate: "Mon, Dec 24 · 18.00",
    toDate: "23.00PM",
    // eventLogoUrl: imageUrl,
    eventType: 0,
    location: [{
        state: "Bayelsa",
        lga: "Yenagoa",
        town: "New York",
        street: "Grand Park",
        num_entries: 3,
        capacity: 400,
        alert_point: 300
    }]
}

export default SingleEvent