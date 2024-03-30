import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SignInScreen, SignUpScreen , DetailsScreen , QuizDetailScreen , Quizs , Hangman , Quiz , Contact , Youtubemulti} from '../screens';

const Stack = createStackNavigator();

const HomeSatckNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="QuizDetailScreen" component={QuizDetailScreen} />
      <Stack.Screen name="Quizs" component={Quiz} />
      <Stack.Screen name="Hangman" component={Hangman} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="YouTube" component={Youtubemulti} />
    </Stack.Navigator>
  );
}

export default HomeSatckNavigator;