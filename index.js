import { Navigation } from 'react-native-navigation';

import BookDetails from './src/screens/BookDetails';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import SettingsScreen from './src/screens/Settings';

Navigation.registerComponent('app.MyBooksy.HomeScreen', () => HomeScreen);
Navigation.registerComponent('app.MyBooksy.SearchScreen', () => SearchScreen);
Navigation.registerComponent('app.MyBooksy.SettingsScreen', () => SettingsScreen);
Navigation.registerComponent('app.MyBooksy.BookDetails', () => BookDetails);

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
                                        name: 'app.MyBooksy.HomeScreen',
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
                                        name: 'app.MyBooksy.SearchScreen',
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
                                        name: 'app.MyBooksy.SettingsScreen',
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
