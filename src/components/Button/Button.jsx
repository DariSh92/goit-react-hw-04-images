import { PropTypes } from 'prop-types';
import { OnLoadMoreButton, ButtonWrapp } from 'components/Button/Button.styled';

export const Button = ({ onLoadMore }) => {
    return (
        <ButtonWrapp>
            <OnLoadMoreButton type='button' onClick={() => onLoadMore()}>
                Load more
            </OnLoadMoreButton>
        </ButtonWrapp>
    );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};