import { createStackNavigator } from '@react-navigation/stack';
import Login from 'presentation/Login';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
}