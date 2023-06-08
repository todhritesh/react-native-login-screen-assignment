import { View, Text } from 'react-native'
import React from 'react'
import StackNavigator from './src/navigators/StackNavigator'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NativeBaseProvider>
        <StackNavigator/>
    </NativeBaseProvider>
  )
}

export default App