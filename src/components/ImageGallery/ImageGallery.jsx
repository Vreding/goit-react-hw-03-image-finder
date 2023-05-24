import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={s.ImageGallery}>
        {this.props.images.map(image => (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
