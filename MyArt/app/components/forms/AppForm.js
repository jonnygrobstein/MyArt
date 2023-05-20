import { View, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

export default function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        { () => <>{children}</> }
    </Formik>
  )
}