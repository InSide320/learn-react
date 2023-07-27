import React, {useEffect, useState} from "react";
import './assets/styles/App.css';
import Counter from "./components/Counter";
import InputText from "./components/InputText";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import ModalWindow from "./components/UI/modal/ModalWindow";
import MyButton from "./components/UI/buttons/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(itemPost => itemPost.id !== post.id))
  }

  return (
    <>
      <header></header>
      <MyButton onClick={fetchPosts}>Fetch posts</MyButton>
      <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>Create new Post</MyButton>
      <ModalWindow visible={modal} setVisible={setModal}><PostForm create={createPost}/></ModalWindow>
      <hr style={{margin: '15px 0', width: "100%"}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&
        <h1>Error ${postError}</h1>
      }
      {isPostLoading
        ? <Loader/>
        : <PostList posts={sortedAndSearchedPosts} remove={removePost} title={"JavaScrip Post"}/>
      }
      <Counter/>
      <InputText/>
      <footer></footer>
    </>
  );
}

export default App;
