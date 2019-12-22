import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const Animation = styled.View`
    width: ${props => props.width && props.width};
    height: ${props => props.height && props.height};
    margin-bottom: 20px;
`;

export const ReportMessage = styled.Text`
    font-size: 18px;
    color: #000;
    text-align: center;
    margin-top: 5px;
`;
