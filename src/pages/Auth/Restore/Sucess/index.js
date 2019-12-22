import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/Fontisto';

import Lottie from 'lottie-react-native';
import loader from '../../../../assets/animations/loader.json';
import error from '../../../../assets/animations/erro.json';
import success from '../../../../assets/animations/success2.json';

import Background from '../../../../components/Background';
import Button from '../../../../components/Button';
import logo from '../../../../assets/images/logo.png';

import { Container, Animation, ReportMessage } from './styles';

export default function Sucess(props) {
    const loading = useSelector(state => state.auth.loading);
    const erro = useSelector(state => state.auth.erro);
    const erroMessage = useSelector(state => state.auth.erroMessage);

    function navigateToSignIn() {
        const { navigation } = props;

        navigation.navigate('SignIn');
    }

    function successRestoreAccount() {
        return (
            <>
                <Animation width={200} height={200}>
                    <Lottie
                        resizeMode="contain"
                        size={{ width: 200, height: 200 }}
                        source={success}
                        autoPlay
                        loop={false}
                    />
                </Animation>
                <ReportMessage>Uma nova senha foi enviada!</ReportMessage>
            </>
        );
    }

    function erroRestoreAccount() {
        return (
            <>
                <Animation width={150} height={150}>
                    <Lottie
                        resizeMode="contain"
                        style={{ width: 150, height: 150 }}
                        source={error}
                        autoPlay
                        loop={false}
                    />
                </Animation>
                <ReportMessage>{erroMessage}</ReportMessage>
            </>
        );
    }

    function setAnimation() {
        if (loading) {
            return (
                <Animation width={300} height={300}>
                    <Lottie
                        resizeMode="contain"
                        size={{ width: 300, height: 300 }}
                        source={loader}
                        autoPlay
                        loop
                    />
                    <Icon name="email" size={50} color="#000" />
                </Animation>
            );
        }

        if (erro) {
            return erroRestoreAccount();
        }

        return successRestoreAccount();
    }

    return (
        <Background source={logo}>
            <Container>
                {setAnimation()}
                {!loading && (
                    <Button
                        color="#28241F"
                        text="Voltar"
                        textColor="#fff"
                        width={250}
                        marginTop={30}
                        onPress={navigateToSignIn}
                    />
                )}
            </Container>
        </Background>
    );
}

Sucess.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
