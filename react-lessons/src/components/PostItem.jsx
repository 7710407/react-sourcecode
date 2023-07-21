import React from 'react'
import MyButton from '../UI/button/MyButton'

const PostItem = (props) => {
    
    return (
    <div className='post'>
        <div className='post_content'>
            <strong>{props.number}. {props.post.title}</strong>
            <p>{props.post.body}</p>
        </div>
        <div className='post_btns'>
            <MyButton>Delete</MyButton>
        </div>
    </div>
    )
}

export default PostItem