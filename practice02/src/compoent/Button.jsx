import React from 'react'

function Button(prop) {
    return (
        <>
            <button onClick={prop.onClick}>{prop.text}</button>
        </>
    )
}

export default Button