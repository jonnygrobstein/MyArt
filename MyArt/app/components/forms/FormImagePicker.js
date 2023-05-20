import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInput from '../ImageInput';


export default function FormImagePicker({ name }) {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    const imageUris = values[name]

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
    }
    
    const handleRemove = (uri) => {
        setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri))
    }
    
    return (
        <>
            <ImageInput 
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove} />
            <ErrorMessage  error={errors[name]} visible={touched[name]} />
        </>
  );
}

