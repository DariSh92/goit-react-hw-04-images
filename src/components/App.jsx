import { useState, useEffect } from 'react';
import { SearchbarForm } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import * as API from 'services/Api';
import { Container, ErrorMessage } from 'components/App.styled';


export const App = () => {
 
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, serError] = useState(null);
  const [query, setQuery] = useState('');


  useEffect(() => {
    if (page !== 1) {
      API.fetchImage(query, page).then((response) => {
        const updatedPictures = [...pictures, ...response.hits];
        setPictures(updatedPictures);
        setIsLoading(false);
      })
    }
  }, [page]);
  

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  
  const handleSubmit = (searchQuery) => {
    setIsLoading(true);

    API.fetchImage(searchQuery, 1).then((response) => {

      setPictures(response.hits);
      setQuery(searchQuery);
      setPage(1);
      setIsLoading(false);
      setTotal(response.total);
    });
  }

  
  return (
    <Container>
      <SearchbarForm onSubmit={handleSubmit} />
      <ImageGallery items={pictures} />
      {isLoading && <Loader />}
      {pictures.length < total && (
        <Button onLoadMore={handleLoadMore} />
      )}
      {pictures.length === 0 && (<ErrorMessage>Nothing found =(</ErrorMessage>)}
    </Container>
  );
};





