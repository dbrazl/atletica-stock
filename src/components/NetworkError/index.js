import React from 'react';

import Lottie from 'lottie-react-native';
import dino from '../../assets/animations/dino.json';

import Background from '../Background';
import { Container } from './styles';

export default function NetworkError() {
    return (
        <Background>
            <Container>
                <Lottie
                    resizeMode="contain"
                    size={{ width: 200, height: 200 }}
                    source={dino}
                    autoPlay
                    loop
                />
            </Container>
        </Background>
    );
}
