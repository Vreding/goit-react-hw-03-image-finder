import React, { Component } from 'react';
import s from './Button.module.css';

export default class Button extends Component {
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
