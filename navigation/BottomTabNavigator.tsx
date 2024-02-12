/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {DarkTheme, LightTheme} from '../theme/Colors';
import {BottomTabNames, BottomTabParamList} from '../types';
import TabOneNavigator from "./TabOneStackNavigator";
import TabTwoNavigator from "./TabTwoStackNavigator";
import {themeColors, useTheme} from "../theme/Theme";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const theme = useTheme();
    return (
        <BottomTab.Navigator
            initialRouteName={BottomTabNames.MEAL}
            screenOptions={{tabBarActiveTintColor: theme === themeColors.light ? LightTheme.colors.tint : DarkTheme.colors.tint, headerShown: false}}>
            <BottomTab.Screen
                name={BottomTabNames.MEAL}
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-code" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name={BottomTabNames.SETTINGS}
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-code" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}
