// import { PropTypes } from 'prop-types';
import { Formik } from 'formik';
import { SearchbarHeader, SearchForm, SubmitButton, SubmitLabel, Input } from 'components/Searchbar/Searchbar.styled';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';

// const InitialValues = {
//     searchQuery: '',
// }


export const SearchbarForm = ({ onSubmit }) => {

    const handleSubmit = (values, actions) => {
        actions.resetForm();
        onSubmit(values.searchQuery);
        actions.setSubmitting(false);

    };

    return (
        <SearchbarHeader>
            <Formik
                initialValues={{ searchQuery: '' }} 
                onSubmit={handleSubmit}
            >
            {({isSubmitting}) => (
               <SearchForm>
                    <SubmitButton type="submit" disabled={ isSubmitting }>
                        <SubmitLabel aria-label="Search">
                            <SearchIcon />  
                        </SubmitLabel>     
                    </SubmitButton>
                    <Input
                        name='searchQuery'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>     
            )}
            </Formik>
        </SearchbarHeader>
    );
};

