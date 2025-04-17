import React from 'react';
import { ButtonWrapper } from './Button.styles';

function Button(props) {
    const { children, type = "light" } = props;

    return (
        <ButtonWrapper>
            {children}
        </ButtonWrapper>
    );
}

export default Button;