import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/dropdown/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput placeholder={"search"} value={filter.query}
               onChange={e => setFilter({...filter, query: e.target.value})}/>
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue={"Sorted to"}
        option={[
          {value: "title", name: "Title name"},
          {value: "body", name: "Description"}
        ]}
      />
    </div>
  );
};

export default PostFilter;
