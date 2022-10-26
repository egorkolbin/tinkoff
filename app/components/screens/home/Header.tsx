import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import Padding from '../../ui/Padding'
import Avatar from '../../ui/Avatar'


const Header:FC = () => {
  return (
    <Padding style={styles.headerPadding}>
      <Avatar name="Max"></Avatar>
    </Padding>
  )
}

const styles = StyleSheet.create({
    headerPadding: {

    }
})
export default Header