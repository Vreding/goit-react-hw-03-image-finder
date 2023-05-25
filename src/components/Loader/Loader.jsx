import React, { Component } from 'react';
import s from './Loager.module.css';

export default class Loader extends Component {
  render() {
    return (
      <div className={s.ButtonWrapper}>
        <button className={s.Button} onClick={this.props.incrementPage}>
          Load More
        </button>
      </div>
    );
  }
}
