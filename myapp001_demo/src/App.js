import "./App.css";
// 쓰이지 않는 것은 지우기
import Myjsx001 from "./components/ex01_jsx/Myjsx001";
import MyJsx002 from "./components/ex01_jsx/MyJsx002";
import MyJsx003 from "./components/ex01_jsx/MyJsx003";
import MyJsx004 from "./components/ex01_jsx/MyJsx004";
import MyBasic001 from "./components/ex02_useState/MyBasic001";
import MyUseState002 from "./components/ex02_useState/MyUseState002";
import MyUseState003 from "./components/ex02_useState/MyUseState003";
import MyUseState004 from "./components/ex02_useState/MyUseState004";
import MyUseState005 from "./components/ex02_useState/MyUseState005";
import MyUseState006 from "./components/ex02_useState/MyUseState006";
import MyUseRef001 from "./components/ex03_useRef/MyUseRef001";
import MyUseRef002 from "./components/ex03_useRef/MyUseRef002";
import MyUseEffect001 from "./components/ex04_useEffect/MyUseEffect001";
import MyuseEffect002 from "./components/ex04_useEffect/MyuseEffect002";
import MyuseStateSync001 from "./components/ex05_async/MyuseStateSync001";
import MyuseStateSync002 from "./components/ex05_async/MyuseStateSync002";
import Myprops001 from "./components/ex06_props/Myprops001";
import Myprops002 from "./components/ex06_props/Myprops002";
import Myprops003 from "./components/ex06_props/Myprops003";
import MyuseContext01 from "./components/ex07_context/MyuseContext01";

function App() {
  return (
    <div className="App">
      {/* <Myjsx001 /> */}
      {/* <MyJsx002 /> */}
      {/* <MyJsx003 /> */}
      {/* <MyJsx004 /> */}

      {/* <MyBasic001 /> */}
      {/* <MyUseState002 /> */}
      {/* <MyUseState003 /> */}
      {/* <MyUseState004 /> */}
      {/* <MyUseState005 /> */}
      {/* <MyUseState006 /> */}

      {/* <MyUseRef001 /> */}
      {/* <MyUseRef002 /> */}

      {/* <MyUseEffect001 /> */}
      {/* <MyuseEffect002 /> */}

      {/* <MyuseStateSync001 /> */}
      {/* <MyuseStateSync002 /> */}

      {/* <Myprops001 name={"홍길동"} /> */}
      {/* <Myprops002 name={"홍길동"} age="30" loc="서울" /> */}
      {/* <Myprops003 name={"홍길동"} age="30" loc="서울" /> */}
      {/* <Myprops003 name={"홍길동"} loc="서울" /> */}

      <MyuseContext01 />
    </div>
  );
}

export default App;
