import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { useProfile } from './useProfile'
import Layout from '../../layouts/Layout'
import Heading from '../../ui/Heading'
import Padding from '../../ui/Padding'
import Loader from '../../ui/Loader'
import Field from '../../ui/Field'

const Profile:FC = () => {
  const {isLoading: isProfileLoading, name, setName} = useProfile()
  return (
    <Layout>
      <Heading text='Profile'></Heading>
      <Padding>
        {isProfileLoading ? <Loader/> : <>
        <Field onChange={setName} val={name} placeholder='Enter name'></Field>
        </>}
      </Padding>
    </Layout>
  )
}

export default Profile