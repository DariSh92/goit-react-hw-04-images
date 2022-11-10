import { ColorRing } from 'react-loader-spinner';
import { LoadWrapp } from 'components/Loader/Loader.styled';

export const Loader = () => {
    return (
        <LoadWrapp>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </LoadWrapp>
    );
};