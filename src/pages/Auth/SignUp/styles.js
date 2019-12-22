import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Scroll = styled.ScrollView``;

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 20px 0;
`;

export const Image = styled.Image.attrs(props => ({
    source: props.source,
}))`
    width: 200px;
    height: 200px;
`;

export const Erro = styled.Text`
    color: #fff;
    font-size: 15px;
    width: ${props => props.width && props.width};
    text-align: center;
    margin-top: 5px;
`;
