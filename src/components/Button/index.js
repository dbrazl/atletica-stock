import React from 'react';
import PropTypes from 'prop-types';

import { DefaultButton, Placeholder } from './styles';

export default function Button({
    color,
    text,
    textColor,
    width,
    marginTop,
    onPress,
}) {
    return (
        <DefaultButton
            color={color}
            width={width}
            marginTop={marginTop}
            onPress={onPress}
        >
            <Placeholder textColor={textColor}>{text}</Placeholder>
        </DefaultButton>
    );
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    marginTop: PropTypes.number,
    onPress: PropTypes.func,
};

Button.defaultProps = {
    marginTop: 0,
    onPress: () => {},
};
