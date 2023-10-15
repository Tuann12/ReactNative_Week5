import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './UI/HomeScreen';
import PickColor from './UI/PickColor';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        // <HomeScreen />
        // <PickColor />
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="PickColor" component={PickColor} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
