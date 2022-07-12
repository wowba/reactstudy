// Router에는 브라우저 라우터, 해쉬 라우터 두 종류가 있다.
// Switch의 역할은 Route를 찾는것이고, Route는 보통 URL을 말한다. 찾으면 그걸 렌더링 한다.
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

// 기존에는 바로 컴포넌트를 렌더링하다가, 라우트 폴더를 분리한 뒤에는 router를 render 한다.
// router는 URL을 바라보고 있는 컴포넌트 이다.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* /movie/id 라고 하면 그대로 url이 나가버린다. ":" 를 꼭 붙일것! */}
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
