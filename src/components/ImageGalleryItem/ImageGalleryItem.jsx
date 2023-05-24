import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    visible: false,
  };

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.hide();
    }
  };

  render() {
    return (
      <li
        className={s.ImageGalleryItem}
        id={this.props.id}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
      >
        <img
          src={this.props.webformatURL}
          alt=""
          onClick={this.show.bind(this)}
        />
        <Modal
          visible={this.state.visible}
          onClose={this.hide}
          width={1200}
          height={720}
          animation={'door'}
        >
          <img src={this.props.largeImageURL} alt="" />
        </Modal>
      </li>
    );
  }
}
