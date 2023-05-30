import React from 'react'
import Tweed from './Tweed'
import './TweedList.css'

const TweedList = ({posts}) => {
    const allPosts = posts.map((post, index) =>{
        return <Tweed key={index}itemKey={post+index} post={post} />
    })
    if(!posts.length <= 0) {
        return(
            <div className='post-board-ctn'>
                {allPosts}
            </div>
        )
    } else {
        return(
            <h3>Tweed Here</h3>
        )
    }
}

export default TweedList