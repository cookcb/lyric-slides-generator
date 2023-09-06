import React from 'react';
import './Textarea.css'

interface TextareaProps {   
    label: string;
    value: string;
    placeholder?: string;
    onChange?: (e: any) => void;
};

export default function TextareaEditor({
    label,
    value,
    placeholder,
    onChange: onchange
}: TextareaProps){
    return (
        <div>
            <h1>{label}</h1>
            <textarea 
                className="textarea-base"
                placeholder={placeholder} 
                value={value}
                onChange={onchange}></textarea>
        </div>
    )

};
