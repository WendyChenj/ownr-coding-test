import React, { useContext, useState, useEffect } from 'react';
import { ImagesStateContext } from '../page/Homepage';
import ImageContainer from './ImageContainer';

import './imagesContainer.css';

const ImagesContainer = () => {
  const {images, isFetching} = useContext(ImagesStateContext);
  const [imagePage, setImagePage] = useState(0);

  useEffect(() => {
    setImagePage(0)
  }, [isFetching]);

  const handlePrevImage = () => {
    if(imagePage > 0) {
      setImagePage(imagePage - 1);
    }
  }

  const handleNextImage = () => {
    if (images && imagePage < images.length - 1) {
      setImagePage(imagePage + 1);
    }
  }

  return (
    <div className='images-container'>
      <button 
        disabled={imagePage === 0}
        onClick={handlePrevImage}
        className='arrow-button-prev'
      />
       
      <div className='images-image-container'>
        <ImageContainer imageUrl={images ? images[imagePage] : null} loading={isFetching} />
      </div>

      <button 
        disabled={images? imagePage === images.length - 1: imagePage === 0}
        onClick={handleNextImage}
        className='arrow-button-next'
      />
    </div>
  );
}

export default ImagesContainer;