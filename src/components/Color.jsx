import React from 'react';

const Color = (props) => {

    const myStyle = {
        color: props.text,
        backgroundColor: props.bg
    }

    return (
        <div>
            <h1 style={myStyle} > {props.word}</h1>
        </div>
    );
}

export default Color;
