import React from 'react';

interface ButtonProps {
    isOn: any;
    onClick: any;
}

export const Button = (props:ButtonProps) => {
    return <button onClick={props.onClick}>Test</button>
}