import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { getImages } from 'api';
import Loader from 'components/Loader/Loader';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchTerm: '',
    showLoadMore: false,
    loading: false,
    isModalOpen: false,
    modalImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchTerm !== this.state.searchTerm ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { page, searchTerm } = this.state;

    this.setState({ loading: true });

    getImages(searchTerm, page)
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          showLoadMore: page < Math.ceil(data.totalHits / 12),
        }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  incrementPage() {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  onChangeQuery = searchTerm => {
    if (searchTerm === this.state.searchTerm) {
      return;
    }

    this.setState({
      searchTerm,
      currentPage: 1,
      images: [],
    });
  };

  onImageClick = modalImageURL => {
    this.setState({
      modalImageURL,
      isModalOpen: true,
    });
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {this.state.images.length && (
          <ImageGallery
            images={this.state.images}
            onImageClick={this.onImageClick}
          />
        )}
        {this.state.loading && <Loader />}
        {this.state.showLoadMore && (
          <Button incrementPage={() => this.incrementPage()} />
        )}
        {this.state.isModalOpen && (
          <Modal
            imageUrl={this.state.modalImageURL}
            isModalOpen={this.state.isModalOpen}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

export default App;
