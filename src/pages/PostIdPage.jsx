import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async id => {
    const response = await PostService.getById(id);
    setPost(response.data[0]);
  });

  const [fetchCommentsById, isComLoading, comError] = useFetching(async id => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id).then(r => r);
    fetchCommentsById(params.id).then(r => r);
  }, []);

  return (
    <div>
      <h1>You have opened Post Page ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Comments: </h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div style={{display: 'flex', flexDirection: 'column', gap: 15, margin: 35}}>
          {comments.map(comment => (
            <div key={comment.id} style={{border: '1px solid teal', padding: 10}}>
              <h5>{comment.name}</h5>
              <h6>{comment.email}</h6>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
