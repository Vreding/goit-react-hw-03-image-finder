import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import { getImages } from 'api';
import { Oval } from 'react-loader-spinner';

class App extends Component {
  state = {
    images: null,
    page: 1,
    searchTerm: '',
    showLoadMore: false,
    loading: false,
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
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  incrementPage() {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  onChangeQuery = searchTerm => {
    this.setState({
      searchTerm,
      currentPage: 1,
      images: [],
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        {this.state.images && <ImageGallery images={this.state.images} />}
        {this.state.loading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
          >
            <Oval
              height={80}
              width={80}
              color="#4d5ea9"
              wrapperStyle={{}}
              wrapperClass=""
              visible="true"
              ariaLabel="oval-loading"
              secondaryColor="#4d5ea9"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
        {this.state.showLoadMore && (
          <Loader incrementPage={() => this.incrementPage()} />
        )}
      </div>
    );
  }
}

export default App;
