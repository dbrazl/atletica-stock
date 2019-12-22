import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/AntDesign';

import { Container, TextInput } from './styles';

export default function SearchInput({
    textContentType,
    autoCorrect,
    autoCapitalize,
    keyboardType,
    placeholder,
    width,
    marginTop,
    value,
    onChangeText,
}) {
    return (
        <Container width={width} marginTop={marginTop}>
            <TextInput
                textContentType={textContentType}
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                placeholder={placeholder}
                width={width}
                value={value}
                onChangeText={onChangeText}
            />
            <Icon name="search1" size={24} color="rgba(0,0,0, 0.5)" />
        </Container>
    );
}

SearchInput.propTypes = {
    textContentType: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool.isRequired,
    autoCapitalize: PropTypes.string,
    keyboardType: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    marginTop: PropTypes.number,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
};

SearchInput.defaultProps = {
    marginTop: 0,
    autoCapitalize: 'none',
    value: '',
    onChangeText: () => {},
};
