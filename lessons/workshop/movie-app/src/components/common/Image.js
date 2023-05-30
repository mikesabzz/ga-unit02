import React from 'react'

const Image = (props) => {
    return <div className="image">
        <img src={props.image} alt='movie poster' />
    </div>
}

export { Image }