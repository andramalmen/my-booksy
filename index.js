import { Navigation } from 'react-native-navigation';

import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';

Navigation.registerComponent('app.MyBooksy.HomeScreen', () => HomeScreen);
Navigation.registerComponent('app.MyBooksy.SearchScreen', () => SearchScreen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: '#4d089a',
        },
        topBar: {
            drawBehind: true,
            largeTitle: {
                visible: true,
                color: '#EF2E8B',
            },
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
                                        options: {
                                            topBar: {
                                                searchBar: {
                                                    visible: true,
                                                    hideOnScroll: true,
                                                    placeholder: 'Search your library ...',
                                                },
                                                title: {
                                                    text: 'My Booksy',
                                                },
                                            },
                                        },
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    icon: require('./src/resources/ic_home_48px.png'),
                                    iconColor: 'white',
                                    textColor: 'white',
                                    text: 'Home',
                                    selectedTextColor: '#EF2E8B',
                                    selectedIconColor: '#EF2E8B',
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
                                        options: {
                                            topBar: {
                                                searchBar: {
                                                    visible: true,
                                                    hideOnScroll: true,
                                                    placeholder:
                                                        'Look for titles, authors, ISBN...',
                                                },
                                                title: {
                                                    text: 'Search',
                                                },
                                            },
                                        },
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    icon: require('./src/resources/ic_search_48px.png'),
                                    iconColor: 'white',
                                    textColor: 'white',
                                    text: 'Search',
                                    selectedTextColor: '#EF2E8B',
                                    selectedIconColor: '#EF2E8B',
                                },
                            },
                        },
                    },
                ],
            },
        },
    });
});
