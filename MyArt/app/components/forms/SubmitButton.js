import { View, Text } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik';

import AppButton from '../AppButton'

export default function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext
    return (
    <AppButton title={title} type="submit" onPress={handleSubmit} />
  )
}