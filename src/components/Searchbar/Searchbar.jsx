import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { Oval } from 'react-loader-spinner';

export default class Searchbar extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const newSearchTerm = event.target.elements.search.value;
    this.props.onSubmit(newSearchTerm);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className="form" onSubmit={this.handleSubmit}>
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
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={this.props.loading}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </form>
      </header>
    );
  }
}
