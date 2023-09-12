import "./App.css";
import { useRef, useState } from "react";
import Todo1 from "./components/Todo1";
import Input1 from "./components/Input1";

//App1 : App1을 시작으로 라벨1인풋1이런것들은 app에서는 한페이지에 몰아넣엇던거를 각각 나눠서 app1에서는 언급? 하는식으로만 해서 간단하게 보이게 해주는 작업임
// 그래서 app에서 있던 부분 파일명과 같은 부분 뽑아서 다 옮겨줫음
function App1() {
  const inputRef = useRef("");
  // 페이지에서 포커스를 주기위한거래
  const wrap = {
    width: "500px",
    border: "2px solid black",
    margin: "10px auto",
  };

  // 아직 디비에 접근안하고 임의로 만들어서 시작할거야
  let boardList = [
    { id: 1, todoname: "운동하기", completed: 0 },
    { id: 2, todoname: "SNS꾸미기", completed: 1 },
    // completed를 1로 바꿔주면 sns꾸미기에 줄이 쫙그어짐
    { id: 3, todoname: "사진정리하기", completed: 0 },
  ];

  const [todos, setTodos] = useState([...boardList]);
  // todos 정의는 여기서 해준거임
  // 보드리스트에 잇느거를 복사해와서 그거를 초기값으로 두고 setTodos를 통해서 todos를 업데이트 해줌

  const [input, setInput] = useState("");
  //아래 폼태그안에 input 태그 쓰려고하면 이거 해줘야 박스 나타남

  //여기 id는 위에 보드리스트에서 정의된 id임
  const updateTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: todo.completed === 1 ? 0 : 1 } : todo)));
    // map함수를 사용하여 순회하면서 각 항목을 검사하고 변경된 내용으로 새로운 배열을 생성함
    //map 함수 내에서 조건문을 사용하여 현재 항목의 id가 매개변수로 받은 id와 일치하는 경우 해당 항목을 업데이트하고, 일치하지 않는 경우 그대로 반환합니다.
    // 한번누르면 줄그어지고 그거다시누르면 줄 사라지게 하는 함수
    // 할일 다하면 줄긋는 그거
    // 3항조건문? 이라해야하나 그거를 이중으로 사용함
    //(todo.id === id ?  여기서 뒤의 id는 이벤트가 발생햇을 때 함께 넘어온 id값
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    //submit 버튼 함수
    e.preventDefault();
    // 기본으로 일어나는 폼태그의 action속성을 막아주는거...>?
    setTodos([...todos, { id: todos.length + 1, todoname: input, completed: 0 }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    //참거짓 으로 결과가 나오는건데 이럴때는 트루인것만 반환됨
  };

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>
      <Input1 insertTodo={insertTodo} input={input} handleChangeText={handleChangeText} inputRef={inputRef} />

      <Todo1 todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App1;
