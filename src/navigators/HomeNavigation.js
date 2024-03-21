import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SignInScreen, SignUpScreen , DetailsScreen , QuizDetailScreen , Quizs , Hangman } from '../screens';

const Stack = createStackNavigator();

const HomeSatckNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
        }}
    >
      <Stack.Screen name="SignInScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="QuizDetailScreen" component={QuizDetailScreen} />
      <Stack.Screen name="Quizs" component={Quizs} />
      <Stack.Screen name="Hangman" component={Hangman} />
    </Stack.Navigator>
  );
}

export default HomeSatckNavigator;