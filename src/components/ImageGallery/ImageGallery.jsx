import { PropTypes } from 'prop-types';
import { ImageGalleryList } from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({ items }) => (
  <ImageGalleryList>
    { items.map(({ webformatURL,  largeImageURL, id , tags }) => (
      <ImageGalleryItem
          key={ id }
          webformatURL={ webformatURL }
          largeImageURL={ largeImageURL }
          tags={ tags }

      />
    )) }
  </ImageGalleryList>
);


ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      
    })
  ),
};