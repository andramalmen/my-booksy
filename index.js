import { Navigation } from 'react-native-navigation';

import registerScreens from './src/screens/register';
import Routes from './src/screens/routes';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        statusBar: {
            visible: true,
            style: 'light',
        },
        topBar: {
            drawBehind: true,
            largeTitle: {
                visible: true,
                color: '#EF2E8B',
            },
            subtitle: {
                visible: true,
                color: '#EF6CB7',
            },
        },
        bottomTab: {
            iconColor: 'white',
            selectedIconColor: '#EF2E8B',
            textColor: 'white',
            selectedTextColor: '#EF2E8B',
        },
        bottomTabs: {
            drawBehind: true,
        },
    });

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
                                    icon: require('./src/resources/ic_home_48px.png'),

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
                                    icon: require('./src/resources/ic_search_48px.png'),
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
                                    icon: require('./src/resources/ic_settings_48px.png'),
                                    text: 'Settings',
                                },
                            },
                        },
                    },
                ],
            },
        },
    });
});
