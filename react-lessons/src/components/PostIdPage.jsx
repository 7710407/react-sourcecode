import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(
        async (id) => { 
            const response = await PostService.getById(id);
            setPost(response.data)
        }
    )
    const [fetchComments, isComLoading, comError] = useFetching(
        async (id) => { 
            const response = await PostService.getCommentsByPostId(id);
            setComments(response.data)
        }
    )
    useEffect(() => { 
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return <div>
        <h1>Post id: {params.id}</h1>
        {
            isLoading ? (
                <Loader />
            ) : (
                <div>
                    {post.id}. { post.title}
                </div>
            ) 
        }
        <h3>Comments</h3>
        {isComLoading ? (
            // <Loader />
            ""
        ) : (
                comments.map((comm) => (
                    <div key={comm.id} style={{ marginTop: '15px' }}>
                        <h4>{comm.email }</h4>
                        <h4>{comm.body }</h4>
                    </div>
            ))    
        )}
    </div>;
};

export default PostIdPage;
