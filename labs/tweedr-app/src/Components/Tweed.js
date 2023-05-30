import React from 'react'
import './Tweed.css'

const Tweed = ({itemKey, post}) => {
   return(
    <p key={itemKey} className='post-msg'>{post}</p>
   )
    
}

export default Tweed