import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SignInScreen, SignUpScreen } from '../screens';

const Stack = createStackNavigator();

const AuthSatckNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
        }}
    >
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

    </Stack.Navigator>
  );
}

export default AuthSatckNavigator;