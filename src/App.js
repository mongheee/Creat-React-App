import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((saveToDos) => [toDo, ...saveToDos]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos [Count : {toDos.length}]</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
