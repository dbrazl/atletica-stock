import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { Container } from './styles';

export default function Profile() {
    return <Container />;
}

Profile.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={32} color={tintColor} />
    ),
};
