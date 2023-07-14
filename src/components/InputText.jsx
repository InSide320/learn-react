import React, {useState} from 'react';

const InputText = () => {
  const [value, setValues] = useState("Text input");

  return (
    <div className={"input"}>
      <h1>{value}</h1>
      <input type={"text"} value={value}
             onChange={event => setValues(event.target.value)}/>
    </div>
  );
};

export default InputText;
