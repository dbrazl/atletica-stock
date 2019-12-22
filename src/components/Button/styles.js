import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler/GestureButtons';

export const DefaultButton = styled(RectButton)`
    height: 44px;
    width: ${props => props.width && props.width};
    border-radius: 10px;
    background: ${props => props.color && props.color};
    margin-top: ${props => props.marginTop && props.marginTop};
    align-items: center;
    justify-content: center;
`;

export const Placeholder = styled.Text`
    color: ${props => props.textColor && props.textColor};
    font-family: 'Nunito';
    font-size: 18px;
`;
