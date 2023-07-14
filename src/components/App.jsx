import React, {useState} from "react";
import './App.css';
import Counter from "./Counter";
import InputText from "./InputText";
import PostList from "./PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {
  const [jsPosts, setJsPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "JavaScript1", body: "Description"},
    {id: 3, title: "JavaScript2", body: "Description"},
    {id: 4, title: "JavaScript3", body: "Description"}
  ]);

  const [titlePost, setTitlePost] = useState("");
  const [descriptionPost, setDescriptionPost] = useState("");


  const changeInputValue = (event) => {
    setTitlePost(event.target.value)
  }

  const changeDescriptionValue = (event) => {
    setDescriptionPost(event.target.value)
  }
  const addNewPost = (event) => {
    // setTitle(event.target.value)
  }

  return (
    <>
      <header className="App-header"></header>

      <form style={{display: "flex", flexDirection: "column", gap: "10px", width: "25%"}}>
        <MyInput value={titlePost} onChange={changeInputValue} type={"text"} placeholder={"Name post"}/>
        <MyInput value={descriptionPost} onChange={changeDescriptionValue} type={"text"} placeholder={"Description post"}/>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList props={jsPosts} title={"JavaScrip Post"}/>
      <Counter/>
      <InputText/>
      <footer>

      </footer>
    </>
  );
}

export default App;
