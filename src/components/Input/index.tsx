import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

export const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    },[])

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value); // se tiver algum valor ele vai setar "true" dentro do useState
    },[])

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [registerField, fieldName])

    return (
        <Container isFocused={isFocused} isFilled={isFilled}>
            { Icon && <Icon /> }

            <input 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue} 
                ref={inputRef} 
                {...rest} 
            />
        </Container>
  );
}