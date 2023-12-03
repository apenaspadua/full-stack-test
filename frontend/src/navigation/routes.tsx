import { createStackNavigator } from '@react-navigation/stack';
import Details from 'presentation/Details';
import Hello from 'presentation/Hello';
import Home from 'presentation/Home';
import Login from 'presentation/Login';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName='Hello'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Hello' component={Hello} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  );
}