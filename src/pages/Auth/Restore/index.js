import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { restoreAccountRequest } from '../../../store/modules/auth/actions';
import { RestoreAccountSchema } from '../../../schema';

import logo from '../../../assets/images/logo.png';

import Background from '../../../components/Background';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Image, Erro } from './styles';

export default function Restore(props) {
    const [email, setEmail] = useState('');
    const [validate, setValidate] = useState({});
    const [erro, setErro] = useState(false);

    const [schemaErroEmail, setSchemaErroEmail] = useState('');

    const dispatch = useDispatch();

    function navigateToSignIn() {
        const { navigation } = props;

        navigation.navigate('SignIn');
    }

    function navigateToSucessRestore() {
        const { navigation } = props;

        navigation.navigate('SuccessRestore');
    }

    async function handleSubmit() {
        try {
            await RestoreAccountSchema.validate(validate, {
                abortEarly: false,
            });
            dispatch(restoreAccountRequest(email));
            navigateToSucessRestore();
        } catch (err) {
            setErro(true);
            setSchemaErroEmail(err.message);
        }
    }

    return (
        <Background>
            <Container>
                <Image source={logo} />
                <Input
                    textContentType="username"
                    keyboardType="default"
                    autoCorrect={false}
                    placeholder="E-mail"
                    width={250}
                    marginTop={30}
                    value={email}
                    onChangeText={text => {
                        setEmail(text);
                        setValidate({ email });
                    }}
                />
                {erro && <Erro width={250}>{schemaErroEmail}</Erro>}
                <Button
                    color="#28241F"
                    text="Recuperar"
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
        </Background>
    );
}

Restore.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
