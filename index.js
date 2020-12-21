import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/screens/Home';

Navigation.registerComponent('app.MyBooksy.HomeScreen', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: '#4d089a',
        },
        topBar: {
            drawBehind: true,
            largeTitle: {
                visible: true,
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
                                    selectedTextColor: 'white',
                                },
                            },
                        },
                    },
                ],
            },
        },
    });
});
