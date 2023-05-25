import React, { Component } from 'react';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  onChangeQuery = event => {
    event.preventDefault();
    const newSearchTerm = event.target.elements.search.value;
    this.props.onSubmit(newSearchTerm);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className="form" onSubmit={this.onChangeQuery}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
        </form>
      </header>
    );
  }
}
