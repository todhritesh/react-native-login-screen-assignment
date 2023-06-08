import { View, Text } from 'react-native'
import React from 'react'
import Login from '../components/login'
import { Box } from 'native-base'

const LoginScreen = () => {
  return (
    <Box px={2} flex={1}>
        <Login/>
    </Box>
  )
}

export default LoginScreen