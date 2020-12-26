import { Navigation } from 'react-native-navigation';

import Routes from '../screens/routes';

export const navigateTo = (componentId: string, route: Routes, passProps: any = {}) => {
    return Navigation.push(componentId, {
        component: {
            name: route,
            passProps,
        },
    });
};

export const setMainAsRoot = () =>
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: 'BOOKSY_BOTTOM_TABS',
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: Routes.HomeScreen,
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    icon: require('../resources/ic_home_48px.png'),

                                    text: 'Home',
                                },
                            },
                        },
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: Routes.SearchScreen,
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    icon: require('../resources/ic_search_48px.png'),
                                    text: 'Search',
                                },
                            },
                        },
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: Routes.SettingsScreen,
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    icon: require('../resources/ic_settings_48px.png'),
                                    text: 'Settings',
                                },
                            },
                        },
                    },
                ],
            },
        },
    });
