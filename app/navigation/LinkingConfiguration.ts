/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from '@react-navigation/native';

export const LinkingConfiguration: LinkingOptions<any> = {
    prefixes: ['myapp://'],
    config: {
        screens: {
            Root: {
                path: 'root',
                screens: {
                    TabOne: {
                        path: 'tab-one',
                        screens: {
                            TabOneScreen: 'one',
                            MealDetailScreen: 'meal-detail',
                        },
                    },
                    TabTwo: {
                        path: 'tab-two',
                        screens: {
                            TabTwoScreen: 'two',
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};
