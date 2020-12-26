import { Navigation } from 'react-native-navigation';

import registerScreens from './src/screens/register';
import { setMainAsRoot } from './src/utils/navigation';

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

    setMainAsRoot();
});
