import React from 'react';
import './Textarea.css'

interface TextareaProps {   
    label: string;
    value: string;
    placeholder?: string;
};

export default function TextareaEditor({
    label,
    value,
    placeholder
}: TextareaProps){
    return (
        <div>
            <h1>{label}</h1>
            <textarea 
                className="textarea-base"
                placeholder={placeholder} 
                value={value}></textarea>
        </div>
    )

};
