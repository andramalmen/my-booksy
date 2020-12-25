import * as React from 'react';
import { Options } from 'react-native-navigation';

export interface NavigationComponentProps {
    componentId: string;
}

export interface NavigationComponentOptions<T> {
    options?: (passProps?: T) => Options;
}

export type NavigationComponent<P = {}> = React.FunctionComponent<P & NavigationComponentProps> &
    NavigationComponentOptions<P>;
