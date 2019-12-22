import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './styles';

export default function InputMasked({
    type,
    options,
    value,
    onChangeText,
    width,
    marginTop,
    placeholder,
}) {
    return (
        <Input
            type={type}
            options={options}
            value={value}
            onChangeText={text => onChangeText(text)}
            width={width}
            marginTop={marginTop}
            placeholder={placeholder}
        />
    );
}

InputMasked.propTypes = {
    type: PropTypes.string.isRequired,
    options: PropTypes.oneOfType([PropTypes.object]),
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    marginTop: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
};

InputMasked.defaultProps = {
    options: {},
};
