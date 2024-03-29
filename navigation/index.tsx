/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList} from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import {LinkingConfiguration} from './LinkingConfiguration';
import {themeColors, useTheme} from "../theme/Theme";
import {LightTheme, DarkTheme} from '../theme/Colors';
export default function Navigation() {
    const theme = useTheme();

    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={theme === themeColors.light ? LightTheme : DarkTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={BottomTabNavigator}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
        </Stack.Navigator>
    );
}
