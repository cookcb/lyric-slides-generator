/*
Create a button component that has the following props:

- label: string
- variant: string

It should also import the Button.css 

It should also have an onclick event handler

*/

import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    variant: string;
    onClick: () => void;
};

interface variantClassMap {
    [key: string]: string;
}

export default function Button({
    label,
    variant,
    onClick
}: ButtonProps){
    const variantClasses: variantClassMap = {
        default: 'button-variant-default',
        success: 'button-variant-success',
        danger: 'button-variant-danger'
    }

    return (
        <button 
        className={['button-base', variantClasses[variant]].join(' ')} 
        onClick={onClick}>
            {label}
        </button>
    )
}