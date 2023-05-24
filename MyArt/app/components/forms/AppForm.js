import { View, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

export default function AppForm({ handleSubmit, initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
    >
        { () => <>{children}</> }
    </Formik>
  )
}