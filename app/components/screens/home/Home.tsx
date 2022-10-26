import { View, Text } from 'react-native'
import React, { FC } from 'react'
import Header from './Header'

const Home:FC = () => {
  return (
    <View>
      <Header></Header>
      <Text>Home</Text>
    </View>
  )
}

export default Home