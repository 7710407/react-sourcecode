import React from 'react'
import PostItem from './PostItem';



const PostList = ({posts, title}) => {
    let index = 0
    return (
    <div>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) => ( // via :: a[i] == v
                <PostItem number={index + 1} post={post} key={post.id} />
            ))}
    </div>
    )
}

export default PostList