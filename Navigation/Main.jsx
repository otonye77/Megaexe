import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash/Splash';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import SplashTwo from '../screens/SplashTwo/SplashTwo';
import Onboarding from '../screens/Onboarding/Onboarding';
import Register from '../screens/Register/Register';
import Signin from '../screens/SignIn/SignIn';
import BottomTab from './BottomTab'; 
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
           <StatusBar backgroundColor='white' translucent={true} />
            <Stack.Navigator  screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='SplashTwo' component={SplashTwo} />
                <Stack.Screen name='Onboarding' component={Onboarding} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Signin' component={Signin} />
                <Stack.Screen name='Home' component={BottomTab} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;
