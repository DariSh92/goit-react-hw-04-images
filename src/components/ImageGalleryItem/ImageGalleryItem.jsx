import { PropTypes } from 'prop-types';
import { ImageGalleryCards, ImageGalleryImage } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';


export class ImageGalleryItem extends Component {
    state = {
        isModalVisible: false,

    }
    
    handleCloseModal = () => {
    this.setState({ isModalVisible: false });
}
    
  handleOpenModal = () => {
      this.setState({ isModalVisible: true });
  
  }
    render() {
         return (

        <ImageGalleryCards>
                 {this.state.isModalVisible && (
                     <Modal
                         largeImageURL={this.props.largeImageURL}
                         tags={this.props.tags}
                         handleClose={ this.handleCloseModal }
                     />
            ) }
            <ImageGalleryImage
                src={ this.props.webformatURL }
                alt={ this.props.tags }
                onClick={ this.handleOpenModal }
            />
        </ImageGalleryCards>

    )


 }
}




ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired
};

