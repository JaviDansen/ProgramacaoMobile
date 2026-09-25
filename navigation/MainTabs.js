import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EventsScreen from '../screens/EventsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Eventos" component={EventsScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
