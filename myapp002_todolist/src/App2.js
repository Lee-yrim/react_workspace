import "./App.css";
import { useEffect, useRef, useState } from "react";
import Input2 from "./components/Input2";
import Todo2 from "./components/Todo2";

import axios from "axios";

/*
비동기처리
AJAX, fetch, axios

// axios설치와 import
npm install axios
import axios from 'axios';

//axios 동기화
async()=>{
    await axios.get(),then(),catch();
    console.log('program');
}
*/

//App2 : app1은 진짜 디ㄷ비랑은 연결안햇엇는데 2들은 진자 디비랑 연결하는거임
function App2() {
  const inputRef = useRef("");
  const wrap = {
    width: "500px",
    border: "2px solid black",
    margin: "10px auto",
  };

  // 임시엿으니까 지금은 주석
  //   let boardList = [
  //     { id: 1, todoname: "운동하기", completed: 0 },
  //     { id: 2, todoname: "SNS꾸미기", completed: 1 },
  //     { id: 3, todoname: "사진정리하기", completed: 0 },
  //   ];

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const updateTodo = async (id) => {
    let completed = todos.filter((todo) => todo.id === id)[0].completed;
    //filter의 역할 : 주어진 조건과 일치하는 것들을 필터링 해주는거
    // todo.id가 주어진 id값과 일치하는 항목들을 골라내고 그 결과들 중 0번째 항목의 completed속성을 completed변수에 할당
    await axios
      .put(`/todo/${id}/${completed}`)
      //put 안에는 스프링가서 그 각 매핑 뒤에 형식있잖아 그거랑 같게해줘야함
      .then((response) => {
        console.log(response);
        getTodos();
        //getTodos하는거는 그 리스트 그대로 가져오는거임
      })
      .catch((error) => {
        console.log(error);
      });
    // setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: todo.completed === 1 ? 0 : 1 } : todo)));
  };
  //이까지하면 남궁민에 줄그어지면 sql가보면 1로바뀌어있음

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = async (e) => {
    e.preventDefault();
    await axios
      .post("/todo", { todoname: input })
      .then((response) => {
        console.log(response.data);
        getTodos();
        setInput("");
      })
      .catch((error) => {
        console.log(error);
      });
    //todoname은 스프링에서 지정한 디티오에있는 변수명
    // setTodos([...todos, { id: todos.length + 1, todoname: input, completed: 0 }]);
    //62줄이 디비랑 연결할때는 55줄에 해당함
    setInput("");
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(`/todo/${id}`)
      .then((response) => {
        console.log(response);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getTodos = async () => {
    await axios
      .get("/todo/all") //서버에 get요청을 보내는부분
      .then((response) => {
        // get요청 성공하면 then부분 실행
        console.log(response);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //   console.log('program');

    //스프링에서 get방식이어서 get을 지정해준거임
    //get괄호안에 localhost8090이 주소 썻어야되는데 항상 반복되니까 package.json파일에 공통적인부분 뺏음
    //요청해서 온값이 then에서 처리됨
    // 요청에 예외가 발생해서 제대로 안오면 케치에서 처리
    // async랑 awiat는 잠깐 저부분에서 기다리라는 의미/ 왜지=> axios가 비동기화 에이작스 같은 역할이라서 기다리라고 하지않으면 동시에 쫘라락 실행해버림 그거를 막기위해서 잠시 기다리라고 하는거임
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>
      <Input2 insertTodo={insertTodo} input={input} handleChangeText={handleChangeText} inputRef={inputRef} />
      {/* 윗줄 형식이 무슨 말이냐면 Input2컴포넌트를 사용할건데 거기에 props를 Input2컴포넌트에 전달하고 있는거임 */}
      {/* insertTodo : 칸에 입력된 내용을 처리하고 다루기 위해  */}
      <Todo2 todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App2;
