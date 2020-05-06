import React, { Component } from 'react';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Searchbar } from './searchbar/Searchbar';
import { LoaderText } from './loader/Loader';
import * as ImagesAPI from '../services/ImagesAPI';
import { ErrorNotification } from './errorNotification/ErrorNotification';
import { Button } from './button/Button';

const mapper = images => {
  return images.map(
    ({ webformatURL: url, largeImageURL: bigUrl, ...props }) => ({
      url,
      bigUrl,
      ...props,
    }),
  );
};

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
    const { query } = this.state;
    this.setState({ isLoading: true, images: [] });
    ImagesAPI.fetchImages(query, 1)
      .then(({ data }) => {
        data.hits.length < 1
          ? alert('Try again, your request does not exist')
          : this.setState({ images: mapper(data.hits), page: 1 });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleClick = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    ImagesAPI.fetchImages(query, page + 1)
      .then(({ data }) =>
        this.setState(prev => ({
          images: [...prev.images, ...mapper(data.hits)],
          page: prev.page + 1,
        })),
      )
      .then(() => this.scrollTo())
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading, error, query } = this.state;
    return (
      <>
        <Searchbar
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          query={query}
        />
        {error && <ErrorNotification />}
        {isLoading && <LoaderText />}
        {images.length > 0 && (
          <>
            <ImageGallery images={images} />
            <Button onClick={this.handleClick} />
          </>
        )}
      </>
    );
  }
}
