import React from 'react';
import './Button.css';
import '../../../styles/variables.css';

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
    onClick: onClick
}: ButtonProps){
    const variantClasses: variantClassMap = {
        primary: 'button-variant-primary',
        secondary: 'button-variant-secondary',
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