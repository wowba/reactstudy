import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("always running");
  // state 값이 변하면 React는 무조건 다시 컴포넌트를 render 시키는데
  // useEffect를 사용해서 코드 반복에 제한을 둘 수 있다. API 호출등에 사용.
  useEffect(() => {
    console.log("Call the API");
  }, []);
  //  state에서 저장하고 있는 keyword가 변화될때만 해당 코드가 동작하게 바꿀 수 있다 !!!!!
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH BAR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
