import { Box, Text, VStack, useColorMode, useTheme, useToast } from 'native-base'
import React, { useState } from 'react'
import CustomBtn from '../btn/CustomButton'
import CustomInput from '../input/CustomInput'
import Feather from 'react-native-vector-icons/Feather'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import NAVIGATIONROUTES from '../../navigation-routes'


const Login = () => {
  const navigation = useNavigation()
  const [loading,setLoading] = useState(false)
  const [passVisible,setpassVisible] = useState(false)
  const toast = useToast()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState("")
  const {colorMode} = useColorMode()
  const theme = useTheme()
  const iconColor = colorMode === 'light' ? theme.colors.blue['500'] :theme.colors.warmGray['400']
  async function handleLogin () {
    try {
      if(!email || !password ) {
        toast.show({
          title: 'All fields are required',
          bg:'error.600',
          duration: 3000,
        });
        return
      }
      toast.show({
        title:"Logged in Successfully !",
        bg:"success.500",
        duration:3000
      })
      navigation.navigate(NAVIGATIONROUTES.Home)

    }catch(err){
    } 
  }

  return (
    <Box justifyContent={'center'} alignItems={'center'} flex={1}  >
      <VStack space={6} w='full' >
      <VStack w="full" >
          <Text fontWeight="bold" fontSize={18} >Email</Text>
          <CustomInput value={email} onChangeText={val=>setEmail(val)} placeholder='eg : example@gmail.com' />
        </VStack>
        <VStack w="full" >
          <Text fontWeight="bold" fontSize={18} >Password</Text>
          <CustomInput value={password} onChangeText={val=>setPassword(val)} rightElement={passVisible?<Pressable onPress={()=>setpassVisible(false)} ><Feather color={iconColor} size={24} style={{marginRight:10}} name="eye"/></Pressable>:<Pressable onPress={()=>setpassVisible(true)} ><Feather color={iconColor} size={24} style={{marginRight:10}}  name="eye-off"/></Pressable>} secureTextEntry={!passVisible} placeholder='**********' />
        </VStack>
        <VStack w={'1/2'} alignSelf="center" >
         <CustomBtn loading={loading} label="Login" onPress={handleLogin} />
        </VStack>
        
      </VStack>
    </Box>
  )
}

export default Login