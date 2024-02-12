/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Meal: undefined;
  Settings: undefined;
};
export enum BottomTabNames {
  MEAL = 'Meal',
  SETTINGS = 'Settings',
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  MealDetailScreen: { itemId: number };
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export enum ScreenNames {
  MEAL_DETAIL_SCREEN = 'MealDetailScreen',
  TAB_ONE_SCREEN = 'TabOneScreen',
  TAB_TWO_SCREEN = 'TabTwoScreen',
}

export type TabOneScreenProps = BottomTabScreenProps<TabOneParamList, ScreenNames.TAB_ONE_SCREEN>;

export type TabTwoScreenProps = BottomTabScreenProps<TabTwoParamList, ScreenNames.TAB_TWO_SCREEN>;
