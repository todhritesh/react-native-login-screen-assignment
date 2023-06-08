import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { useTheme } from 'native-base';
import NAVIGATIONROUTES from '../navigation-routes';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const theme = useTheme()
  return (
    <>
        <NavigationContainer >
        <StatusBar backgroundColor={theme.colors.blue['500']} />

        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name={NAVIGATIONROUTES.Login} component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name={NAVIGATIONROUTES.Home} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}