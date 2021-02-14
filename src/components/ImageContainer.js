import React from 'react';
import Loader from './Loader';
import PropTypes from 'prop-types';

import './imageContainer.css';

const ImageContainer = ({imageUrl, loading}) => {

  let imageContainerComponent = (
    <div className='dialog-container' role="no-image">
      <div className='dialog-1'>
        <p>Wanna see some cute kitties or sharks?</p>
      </div>

      <div className='dialog-2'>
        <p>Sure!</p>
      </div>

      <div className='dialog-3'>
        <p>Choose your faviourite animal and click the button above!</p>
      </div>
    </div>
  );

  if (imageUrl) {
    imageContainerComponent = (
      <div>
        <img src={imageUrl} className='animal-image' />
      </div>
    );
  } else if (loading) {
    imageContainerComponent = (
      <div className='image-container-loader'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='image-container' role='image-container'>
      {imageContainerComponent}
    </div>
  );
}

ImageContainer.propTypes = {
  imageUrl: PropTypes.string,
  loading: PropTypes.bool
}

export default ImageContainer;