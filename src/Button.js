import React from 'react';

const Button = (props) => {
    return (
        <button className='AddItem' onClick={props.onClick}>{props.text}</button>
    )
}


export {Button}