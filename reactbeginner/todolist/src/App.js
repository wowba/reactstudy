import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  // array를 사용하는 useState 생성
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // array 앞에 ... 을 붙임으로써 array가 아닌 array 안의 데이터를 가져올 수 있다.
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      {/* submit 이벤트를 가진 form 생성. */}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write to do list"
        />
        {/* submit을 하게 될 버튼 생성. */}
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
