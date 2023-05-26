import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={s.ImageGalleryItem} id={this.props.id}>
        <img
          src={this.props.webformatURL}
          alt=""
          onClick={() => {
            this.props.onImageClick(this.props.largeImageURL);
          }}
        />
      </li>
    );
  }
}
