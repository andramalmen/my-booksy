import * as React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { Navigation } from 'react-native-navigation';

import { NavigationComponent } from '../types/navigation';
import BookDetails from './BookDetails';
import HomeScreen from './Home';
import Routes from './routes';
import SearchScreen from './Search';
import SettingsScreen from './Settings';

const map = new Map<Routes, NavigationComponent<any>>();

map.set(Routes.HomeScreen, HomeScreen);
map.set(Routes.SearchScreen, SearchScreen);
map.set(Routes.BookDetails, BookDetails);
map.set(Routes.SettingsScreen, SettingsScreen);

const registerScreens = () => {
    map.forEach((Screen, route) => {
        Navigation.registerComponent(
            route,
            () => props => (
                <AppearanceProvider>
                    <Screen {...props} />
                </AppearanceProvider>
            ),
            () => Screen
        );
    });
};

export default registerScreens;
