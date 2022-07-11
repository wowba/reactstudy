import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((current) => current + 1);
  console.log("always running");
  const oneTime = () => console.log("only for first time");
  // state 값이 변하면 React는 무조건 다시 컴포넌트를 render 시키는데
  // useEffect를 사용해서 코드 반복에 제한을 둘 수 있다. API 호출등에 사용.
  useEffect(oneTime, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
