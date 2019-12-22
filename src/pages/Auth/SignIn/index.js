import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { signInRequest } from '../../../store/modules/auth/actions';

import logo from '../../../assets/images/logo.png';

import { SignInSchema } from '../../../schema/index';

import Background from '../../../components/Background';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Container, Image, Erro } from './styles';

export default function SignIn(props) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [validate, setValidate] = useState({});

    const [schemaErroUsername, setSchemaErroUsername] = useState('');
    const [schemaErroPassword, setSchemaErroPassword] = useState('');

    const [erroUsername, setErroUsername] = useState(false);
    const [erroPassword, setErroPassword] = useState(false);

    function navigateToSignUp() {
        const { navigation } = props;

        navigation.navigate('SignUp');
    }

    function navigateToRestore() {
        const { navigation } = props;

        navigation.navigate('Restore');
    }

    async function handleSubmit() {
        try {
            await SignInSchema.validate(validate, {
                abortEarly: false,
            });

            const name = username;
            dispatch(signInRequest(name, password));
        } catch (err) {
            err.errors.forEach(error => {
                function setBoolErro() {
                    if (error.indexOf('nome') !== -1) {
                        setErroUsername(true);
                    }
                    if (error.indexOf('senha') !== -1) {
                        setErroPassword(true);
                    }
                }

                function setSchemaErroMessage() {
                    if (error.indexOf('nome') !== -1) {
                        setSchemaErroUsername(error);
                    }
                    if (error.indexOf('senha') !== -1) {
                        setSchemaErroPassword(error);
                    }
                }

                setBoolErro();
                setSchemaErroMessage();
            });
        }
    }

    function onChangeUsername(text) {
        setUsername(text);
        setValidate({ ...validate, name: username });
        setErroUsername(false);
    }

    function onChangePassword(text) {
        setPassword(text);
        setValidate({ ...validate, password });
        setErroPassword(false);
    }

    return (
        <Background>
            <Container>
                <Image source={logo} />
                <Input
                    textContentType="username"
                    keyboardType="default"
                    autoCorrect={false}
                    placeholder="Usuário"
                    width={250}
                    marginTop={30}
                    value={username}
                    onChangeText={text => onChangeUsername(text)}
                />
                {erroUsername && <Erro width={250}>{schemaErroUsername}</Erro>}

                <Input
                    textContentType="password"
                    keyboardType="default"
                    secureTextEntry
                    autoCorrect={false}
                    placeholder="Senha"
                    width={250}
                    marginTop={30}
                    value={password}
                    onChangeText={text => onChangePassword(text)}
                />
                {erroPassword && <Erro width={250}>{schemaErroPassword}</Erro>}

                <Button
                    color="#28241F"
                    text="Entrar"
                    textColor="#fff"
                    width={250}
                    marginTop={30}
                    onPress={handleSubmit}
                />
                <Button
                    color="#FFA944"
                    text="Cadastrar"
                    textColor="#000"
                    width={250}
                    marginTop={50}
                    onPress={navigateToSignUp}
                />
                <Button
                    color="transparent"
                    text="Recuperar conta"
                    textColor="#fff"
                    width={250}
                    marginTop={30}
                    onPress={navigateToRestore}
                />
            </Container>
        </Background>
    );
}

SignIn.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
