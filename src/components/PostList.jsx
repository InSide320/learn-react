import React from 'react';
import PostItem from "./PostItem";

const PostList = ({props, title}) => {


  return (
    <div className={"post_list"}>
      <h1 style={{textAlign: "center"}}>{title}</h1>
      {props.map(post =>
        <PostItem key={post.id} post={post}/>
      )}
    </div>
  );
};

export default PostList;
