/*
Create a react input component

Should have an interface with the following props
- label: string
- value: string

Should have a state with the following properties
- value: string

Should render a div with the following
- a label
- an input

*/

import React from 'react';

interface InputProps {
    label: string;
    value: string;
    placeholder?: string;
};  

export default function Input({
    label,
    value,
    placeholder
}: InputProps){
    return (
        <div>
            <h1>{label}</h1>
            <input 
                placeholder={placeholder}
                value={value}>    
            </input>
        </div>
    )
}

