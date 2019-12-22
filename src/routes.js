import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';

import IconFeather from 'react-native-vector-icons/Feather';

import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Restore from './pages/Auth/Restore';
import SuccessRestore from './pages/Auth/Restore/Sucess';
import SuccessSignUp from './pages/Auth/SignUp/Sucess';
import Profile from './pages/Profile';
import Delivery from './pages/Delivery';
import Product from './pages/Product';
import NewRequest from './pages/Request/New';

const tabBarOptions = {
    keyboardHidesTabBar: true,
    activeTintColor: '#ffa944',
    inactiveTintColor: '#626262',
    style: {
        backgroundColor: '#fff',
        height: 50,
    },
    showLabel: false,
};

function selectBottomMenu(isSigned, personality) {
    if (isSigned && personality === 'director') {
        return 'Director';
    }

    if (isSigned) {
        return 'Member';
    }

    return 'Sign';
}

function productNavigate() {
    return createSwitchNavigator({
        Delivery,
        Product,
    });
}

const deliveryNavigateOption = {
    tabBarIcon: ({ tintColor }) => (
        <IconFeather name="file-text" size={32} color={tintColor} />
    ),
};

const navigation = (isSigned, personality) =>
    createSwitchNavigator(
        {
            Sign: createSwitchNavigator({
                SignIn,
                SignUp,
                Restore,
                SuccessRestore,
                SuccessSignUp,
            }),
            Member: createBottomTabNavigator(
                {
                    Delivery: {
                        screen: productNavigate(),
                        navigationOptions: deliveryNavigateOption,
                    },
                    NewRequest,
                    Profile,
                },
                {
                    tabBarOptions,
                }
            ),
            Director: createBottomTabNavigator(
                {
                    Delivery: {
                        screen: productNavigate(),
                        navigationOptions: deliveryNavigateOption,
                    },
                    NewRequest,
                    Profile,
                },
                {
                    tabBarOptions,
                }
            ),
        },
        {
            initialRouteName: selectBottomMenu(isSigned, personality),
        }
    );

export default (isSigned = false, personality = 'member') =>
    createAppContainer(navigation(isSigned, personality));
