import {createStackNavigator} from "@react-navigation/stack";
import {ScreenNames, TabTwoParamList} from "../types";
import TabTwoScreen from "../screens/TabTwoScreen";

const TabTwoStack = createStackNavigator<TabTwoParamList>();

export default function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <TabTwoStack.Screen
                name={ScreenNames.TAB_TWO_SCREEN}
                component={TabTwoScreen}
                options={{headerTitle: 'Setting Page'}}
            />
        </TabTwoStack.Navigator>
    );
}
