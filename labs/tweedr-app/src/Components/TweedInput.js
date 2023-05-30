import React from 'react'
import './TweedInput.css'

const TweedInput = ({handleChange, handleSubmit}) => {
    return(
        <div className='post-form'>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" />
                <button>Post</button> 
            </form>
        </div>
    )
}

export default TweedInput