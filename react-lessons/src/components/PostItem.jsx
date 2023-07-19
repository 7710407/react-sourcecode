import React from 'react'

const PostItem = (props) => {
    console.log(props)
    
    return (
    <div className='post'>
        <div className='post_content'>
            <strong>{props.post.id}. {props.post.title}</strong>
            <p>{props.post.body}</p>
        </div>
        <div className='post_btns'>
            <button>Delete</button>
        </div>
    </div>
    )
}

export default PostItem