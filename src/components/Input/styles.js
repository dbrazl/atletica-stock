import styled from 'styled-components/native';

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
})`
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
