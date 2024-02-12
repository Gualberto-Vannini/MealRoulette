import {createStackNavigator} from "@react-navigation/stack";
import {ScreenNames, TabOneParamList} from "../types";
import TabOneScreen from "../screens/TabOneScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import * as React from "react";

const TabOneStack = createStackNavigator<TabOneParamList>();

export default function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name={ScreenNames.TAB_ONE_SCREEN}
                component={TabOneScreen}
                options={{headerTitle: 'Life Meal'}}
            />
            <TabOneStack.Screen
                name={ScreenNames.MEAL_DETAIL_SCREEN}
                component={MealDetailScreen}
                options={{headerTitle: 'Meal Detail Page'}}
            />
        </TabOneStack.Navigator>
    );
}
