import "./App.css";
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef("");
  // 페이지에서 포커스를 주기위한거래
  const wrap = {
    width: "500px",
    border: "1px solid black",
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
  const [input, setInput] = useState("");
  //아래 폼태그안에 input 태그 쓰려고하면 이거 해줘야 박스 나타남
  const updateTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: todo.completed === 1 ? 0 : 1 } : todo)));
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
      <form onSubmit={insertTodo}>
        <input type="text" required={true} value={input} onChange={handleChangeText} ref={inputRef} />
        <input type="submit" value="Create" onChange={insertTodo} />
      </form>
      {todos.map((todo) => {
        return (
          <div className="todo" key={todo.id}>
            <h3>
              <label className={todo.completed === 1 ? "completed" : null} onClick={() => updateTodo(todo.id)}>
                {todo.todoname}
              </label>
              {/* 함수를 호출할때 넘겨주는값이 잇을때는 온클릭에 ={()=>updateTodo(todo.id)}>이렇게 표현해줘야함 */}
              <label onClick={() => deleteTodo(todo.id)}>&nbsp;&nbsp;삭제</label>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
