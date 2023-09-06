import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash/Splash';
import {NavigationContainer} from '@react-navigation/native';
import SplashTwo from '../screens/SplashTwo/SplashTwo';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='SplashTwo' component={SplashTwo} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;
