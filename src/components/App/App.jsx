import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import axios from 'axios';
import Loader from 'components/Loader/Loader';

class App extends Component {
  state = {
    images: null,
    page: 1,
    searchTerm: '',
    loadMore: false,
    loading: false,
  };

  handleSubmit = newSearchTerm => {
    axios
      .get(
        `https://pixabay.com/api/?key=35174443-6d9c66fd3ae2eb6a6d3c5c31a&q=${newSearchTerm}&image_type=photo&per_page=12&page=${this.state.page}`
      )
      .then(response => {
        const images = response.data.hits;

        this.setState({
          images: images,
          page: 1,
          searchTerm: newSearchTerm,
          loadMore: true,
          loading: true,
        });
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  handlLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        axios
          .get(
            `https://pixabay.com/api/?key=35174443-6d9c66fd3ae2eb6a6d3c5c31a&q=${this.state.searchTerm}&image_type=photo&per_page=12&page=${this.state.page}`
          )
          .then(response => {
            const newImages = response.data.hits;

            this.setState(prevState => ({
              images: prevState.images.concat(newImages),
              loading: true,
            }));
          })
          .catch(error => {
            console.error(error);
          })
          .finally(() => {
            this.setState({
              loading: false,
            });
          });
      }
    );
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} loading={this.state.loading} />
        {this.state.images && <ImageGallery images={this.state.images} />}
        {this.state.loadMore && <Loader handlLoadMore={this.handlLoadMore} />}
      </div>
    );
  }
}

export default App;
