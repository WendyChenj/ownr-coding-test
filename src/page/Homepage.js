import React, { useState, useEffect } from "react";
import ImagesContainer from '../components/ImagesContainer';
import ToggleButton from '../components/ToggleButton';

import './homepage.css';

export const ImagesStateContext = React.createContext({
  images: null,
  isFetching: false
});

const Homepage = () => {
  const [catsDisplay, setCatsDisplay] = useState(false);
  const [sharksDisplay, setSharksDisplay] = useState(false);
  const [imagesState, setImagesState] = useState({
    images: null,
    isFetching: false
  });

  useEffect(() => {
    catsDisplay || sharksDisplay ? fetchImages(): initImagesState();
  }, [catsDisplay, sharksDisplay])

  const handleCatsDisplay = (event) => {
    event.preventDefault();
    setCatsDisplay(!catsDisplay);
  };

  const handleSharksDisplay = (event) => {
    event.preventDefault();
    setSharksDisplay(!sharksDisplay);
  };

  const fetchImages = () => {
    const urlParam = catsDisplay && sharksDisplay? 'images': (catsDisplay? 'cats': 'sharks');
    setImagesState({
      images: null,
      isFetching: true
    })
    fetch(`http://localhost:3000/api/${urlParam}`)
      .then(response => response.json())
      .then(data => {
        setImagesState({
          images: data,
          isFetching: false
        })
      })
      .catch(error => {
        console.log(error);
        setImagesState({
          ...imagesState,
          isFetching: false
        })
      }
    );
  }

  const initImagesState = () => {
    setImagesState({
      images: null,
      isFetching: false
    });
  }

  return (
    <div className='homepage'>
      
      <div className='buttonsGroup'>
        <ToggleButton handleClick={handleCatsDisplay} buttonTitle='Cats' buttonActive={catsDisplay} />
        <ToggleButton handleClick={handleSharksDisplay} buttonTitle='Sharks' buttonActive={sharksDisplay} />
      </div>

      <div className='homepage-images-container'>
        <ImagesStateContext.Provider value={imagesState}>
          <ImagesContainer />
        </ImagesStateContext.Provider>
      </div>
    </div>
  );
}

export default Homepage;
