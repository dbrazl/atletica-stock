import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from './styles';

export default function Input({
    textContentType,
    autoCorrect,
    autoCapitalize,
    keyboardType,
    secureTextEntry,
    placeholder,
    width,
    marginTop,
    value,
    onChangeText,
}) {
    return (
        <TextInput
            textContentType={textContentType}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            width={width}
            marginTop={marginTop}
            value={value}
            onChangeText={onChangeText}
        />
    );
}

Input.propTypes = {
    textContentType: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool.isRequired,
    autoCapitalize: PropTypes.string,
    keyboardType: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    marginTop: PropTypes.number,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
};

Input.defaultProps = {
    marginTop: 0,
    autoCapitalize: 'none',
    secureTextEntry: false,
    value: '',
    onChangeText: () => {},
};
