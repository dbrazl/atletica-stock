import React from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator } from 'react-native';

import { useSelector } from 'react-redux';

import Lottie from 'lottie-react-native';
import creatingUserAnimation from '../../../../assets/animations/createUserAnimation.json';
import successSignUp from '../../../../assets/animations/success2.json';
import erroSignUp from '../../../../assets/animations/erro.json';

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

    function successSignUpReport() {
        return (
            <>
                <Animation width={200} height={200}>
                    <Lottie
                        resizeMode="contain"
                        size={{ width: 200, height: 200 }}
                        source={successSignUp}
                        autoPlay
                        loop={false}
                    />
                </Animation>
                <ReportMessage>Usuário cadastrado com sucesso!</ReportMessage>
            </>
        );
    }

    function erroSignUpReport() {
        return (
            <>
                <Animation width={150} height={150}>
                    <Lottie
                        resizeMode="contain"
                        size={{ width: 200, height: 200 }}
                        source={erroSignUp}
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
                <Animation width={250} height={250}>
                    <Lottie
                        resizeMode="contain"
                        size={{ width: 250, height: 250 }}
                        source={creatingUserAnimation}
                        autoPlay
                        loop={false}
                    />
                </Animation>
            );
        }

        if (erro) {
            return erroSignUpReport();
        }

        return successSignUpReport();
    }

    return (
        <Background source={logo}>
            <Container>
                {setAnimation()}
                {loading ? (
                    <ActivityIndicator size="large" color="#000" />
                ) : (
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
