import { useState } from "react";
function Todo() {
  const [data, setdata] = useState("");
  const [todo, settodo] = useState([]);

  const handlechange = (event) => {
    setdata(event.target.value);
  };

  const addbtn = () => {
    console.log(data);
    settodo([...todo, data]);
  };
  console.log(todo);

  const list = todo.map((text) => <li>{text}</li>);
  console.log(list);
  return (
    <div>
      <h1>TODO List</h1>
      <input
        value={data}
        onChange={handlechange}
        placeholder="write something here"
      />
      {/* <div>{data}</div> */}
      <button onClick={addbtn}>add</button>
      <ol>{list}</ol>
    </div>
  );
}

export default Todo;
