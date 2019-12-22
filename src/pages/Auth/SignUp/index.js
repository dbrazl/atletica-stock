import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../../store/modules/auth/actions';

import { SignUpSchema } from '../../../schema/index';

import logo from '../../../assets/images/logo.png';

import Background from '../../../components/Background';
import Input from '../../../components/Input';
import InputMasked from '../../../components/InputMasked';
import Button from '../../../components/Button';

import { Container, Image, Erro, Scroll } from './styles';

export default function SignUp(props) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [validate, setValidate] = useState({});
    const [schemaErroUsername, setSchemaErroUsername] = useState('');
    const [schemaErroName, setSchemaErroName] = useState('');
    const [schemaErroPassword, setSchemaErroPassword] = useState('');
    const [schemaErroEmail, setSchemaErroEmail] = useState('');
    const [schemaErroPhone, setSchemaErroPhone] = useState('');

    const [erroUsername, setErroUsername] = useState(false);
    const [erroName, setErroName] = useState(false);
    const [erroPassword, setErroPassword] = useState(false);
    const [erroEmail, setErroEmail] = useState(false);
    const [erroPhone, setErroPhone] = useState(false);

    function navigateToSignIn() {
        const { navigation } = props;

        navigation.navigate('SignIn');
    }

    function navigateToSuccessSignUp() {
        const { navigation } = props;

        navigation.navigate('SuccessSignUp');
    }

    async function handleSubmit() {
        try {
            await SignUpSchema.validate(validate, {
                abortEarly: false,
            });

            const personality = 'member';
            const cellphone = phone;

            dispatch(
                signUpRequest(
                    username,
                    name,
                    email,
                    password,
                    personality,
                    cellphone
                )
            );
            navigateToSuccessSignUp();
        } catch (err) {
            err.errors.forEach(error => {
                function setBoolErro() {
                    if (error.indexOf('usuário') !== -1) {
                        setErroUsername(true);
                    }
                    if (error.indexOf('nome') !== -1) {
                        setErroName(true);
                    }
                    if (error.indexOf('senha') !== -1) {
                        setErroPassword(true);
                    }
                    if (error.indexOf('e-mail') !== -1) {
                        setErroEmail(true);
                    }
                    if (
                        error.indexOf('telefone') !== -1 ||
                        error.indexOf('pequeno') !== -1
                    ) {
                        setErroPhone(true);
                    }
                }

                function setSchemaErroMessage() {
                    if (error.indexOf('usuário') !== -1) {
                        setSchemaErroUsername(error);
                    }
                    if (error.indexOf('nome') !== -1) {
                        setSchemaErroName(error);
                    }
                    if (error.indexOf('senha') !== -1) {
                        setSchemaErroPassword(error);
                    }
                    if (error.indexOf('e-mail') !== -1) {
                        setSchemaErroEmail(error);
                    }
                    if (
                        error.indexOf('telefone') !== -1 ||
                        error.indexOf('pequeno') !== -1
                    ) {
                        setSchemaErroPhone(error);
                    }
                }

                setBoolErro();
                setSchemaErroMessage();
            });
        }
    }

    function onChangeUsername(text) {
        setUsername(text);
        setValidate({ ...validate, username });
        setErroUsername(false);
    }

    function onChangeName(text) {
        setName(text);
        setValidate({ ...validate, name });
        setErroName(false);
    }

    function onChangePassword(text) {
        setPassword(text);
        setValidate({ ...validate, password });
        setErroPassword(false);
    }

    function onChangeEmail(text) {
        setEmail(text);
        setValidate({ ...validate, email });
        setErroEmail(false);
    }

    function onChangePhone(text) {
        setPhone(text);
        setValidate({ ...validate, cellphone: phone });
        setErroPhone(false);
    }

    return (
        <Background>
            <Scroll>
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
                    {erroUsername && (
                        <Erro width={250}>{schemaErroUsername}</Erro>
                    )}

                    <Input
                        textContentType="name"
                        keyboardType="default"
                        autoCorrect={false}
                        placeholder="Nome"
                        width={250}
                        marginTop={30}
                        value={name}
                        onChangeText={text => onChangeName(text)}
                    />
                    {erroName && <Erro width={250}>{schemaErroName}</Erro>}

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
                    {erroPassword && (
                        <Erro width={250}>{schemaErroPassword}</Erro>
                    )}

                    <Input
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCorrect={false}
                        placeholder="E-mail"
                        width={250}
                        marginTop={30}
                        value={email}
                        onChangeText={text => onChangeEmail(text)}
                    />
                    {erroEmail && <Erro width={250}>{schemaErroEmail}</Erro>}

                    <InputMasked
                        type="cel-phone"
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) ',
                        }}
                        value={phone}
                        width={250}
                        marginTop={30}
                        placeholder="Telefone"
                        onChangeText={text => onChangePhone(text)}
                    />
                    {erroPhone && <Erro width={250}>{schemaErroPhone}</Erro>}

                    <Button
                        color="#28241F"
                        text="Cadastrar"
                        textColor="#fff"
                        width={250}
                        marginTop={30}
                        onPress={handleSubmit}
                    />
                    <Button
                        color="transparent"
                        text="Voltar"
                        textColor="#fff"
                        width={250}
                        marginTop={30}
                        onPress={navigateToSignIn}
                    />
                </Container>
            </Scroll>
        </Background>
    );
}

SignUp.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
