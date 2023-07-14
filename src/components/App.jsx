import React, {useState} from "react";
import './App.css';
import Counter from "./Counter";
import InputText from "./InputText";
import PostList from "./PostList";
import MyButton from "./UI/button/MyButton";

function App() {
  const [jsPosts, setJsPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "JavaScript1", body: "Description"},
    {id: 3, title: "JavaScript2", body: "Description"},
    {id: 4, title: "JavaScript3", body: "Description"}
  ]);

  return (
    <>
      <header className="App-header">
        <form style={{display: "flex", flexDirection: "column", gap: "10px", width: "25%"}}>
          <input type={"text"} placeholder={"Name post"}/>
          <input type={"text"} placeholder={"Description post"}/>
          <MyButton>Create post</MyButton>
        </form>
        <PostList props={jsPosts} title={"JavaScrip Post"}/>
        <Counter/>
        <InputText/>
      </header>
    </>
  );
}

export default App;
