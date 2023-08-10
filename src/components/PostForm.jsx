import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/buttons/MyButton';

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = event => {
    event.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);

    setPost({title: '', body: ''});
  };

  return (
    <form
      style={{
        minWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'flex-end',
      }}
    >
      {/*controlled component*/}
      <MyInput
        value={post.title}
        onChange={event => setPost({...post, title: event.target.value})}
        type={'text'}
        placeholder={'Name post'}
      />
      <MyInput
        value={post.body}
        onChange={event => setPost({...post, body: event.target.value})}
        type={'text'}
        placeholder={'Description post'}
      />
      {/*/!*Not controlled component*!/*/}
      {/*<MyInput ref={bodyInputRef}  type={"text"} placeholder={"Description post"}/>*/}
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
