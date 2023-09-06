import React from 'react';

interface InputProps {
    label: string;
    value: string;
    placeholder?: string;
    onChange?: (e: any) => void;
};  

export default function Input({
    label,
    value,
    placeholder,
    onChange: onchange
}: InputProps){
    return (
        <div>
            <h2>{label}</h2>
            <input 
                placeholder={placeholder}
                value={value}
                onChange={onchange}>    
            </input>
        </div>
    )
}

