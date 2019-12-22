import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Input = styled(TextInputMask)`
    height: 44px;
    width: ${props => props.width && props.width}px;
    border-radius: 10px;
    background: #fff;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-family: 'Nunito';
    font-size: 18px;
    margin-top: ${props => props.marginTop && props.marginTop};
`;
