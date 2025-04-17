import React from 'react';
import { InputWrapper } from './Input.styles';
import { SearchIcon } from '../../assets/icons';

function Input(props) {
    const typeSearch = props?.type === "search";

    return (
        <InputWrapper>
            <input {...props} />
            {typeSearch ? (
                <button>
                    <SearchIcon />
                </button>
            ) : null}
        </InputWrapper>
    );
}

export default Input;