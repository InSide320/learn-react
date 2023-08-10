import React, {useEffect, useRef, useState} from 'react';
import '../assets/styles/App.css';
import Counter from '../components/Counter';
import InputText from '../components/InputText';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import ModalWindow from '../components/UI/modal/ModalWindow';
import MyButton from '../components/UI/buttons/MyButton';
import {usePosts} from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import {useFetching} from '../hooks/useFetching';
import {getPageCount} from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import {useObserver} from '../hooks/useObserver';
import MySelect from '../components/UI/dropdown/MySelect';

function Posts() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limitPostsCount, setLimitPostsCount] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, postError] = useFetching(async (limitPostsCount, page) => {
    const response = await PostService.getAll(limitPostsCount, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limitPostsCount));
  });

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limitPostsCount, page).then(r => r);
  }, [page, limitPostsCount]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(itemPost => itemPost.id !== post.id));
  };

  // useEffect(
  //   page => {
  //     setPage(page);
  //     fetchPosts(limitPostsCount, page).then(r => r);
  //   },
  //   [page]
  // );

  const changePage = page => {
    setPage(page);
    fetchPosts(limitPostsCount, page).then(r => r);
  };

  return (
    <>
      <MyButton onClick={fetchPosts}>Fetch posts</MyButton>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create new Post
      </MyButton>
      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalWindow>
      <hr style={{margin: '15px 0', width: '100%'}} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limitPostsCount}
        onChange={value => setLimitPostsCount(value)}
        defaultValue={'Counts elements on page'}
        option={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'View all'},
        ]}
      />
      {postError && <h1>Error ${postError}</h1>}
      {isPostLoading && <Loader />}
      <PostList posts={sortedAndSearchedPosts} remove={removePost} title={'JavaScrip Post'} />
      <div ref={lastElement} style={{height: 20, width: '100%', background: 'red'}} />

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
      <Counter />
      <InputText />
    </>
  );
}

export default Posts;
