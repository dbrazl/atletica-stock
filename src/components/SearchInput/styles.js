import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${props => props.width && props.width + 60}px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    border-radius: 22px;
    background: #e5e5e5;
    margin-top: ${props => props.marginTop && props.marginTop};
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
})`
    height: 44px;
    width: ${props => props.width && props.width}px;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 10px;
    font-family: 'Nunito';
    font-size: 18px;
`;
