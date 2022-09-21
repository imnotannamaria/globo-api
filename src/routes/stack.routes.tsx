import { 
  createNativeStackNavigator 
} from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { ProgramDetails } from '../screens/ProgramDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='ProgramDetails'
        component={ProgramDetails}
      />
    </Navigator>
  )
}