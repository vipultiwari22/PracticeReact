import React, { useState, useRef } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn useRef", status: "Pending" },
    { id: 2, text: "Go to Gym", status: "Pending" },
    { id: 3, text: "Build todo web App", status: "Pending" },
  ]);

  const handleUpdateStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === "Pending" ? "Completed" : "Pending",
            }
          : todo
      )
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // We can use the useref but i use onlu usestate but i write the code her about useref and how use it
  const todoInputRef = useRef(null);

  const handleAddTodo = () => {
    const text = todoInputRef.current.value.trim();
    if (text !== "") {
      setTodos([...todos, { id: todos.length + 1, text, status: "Pending" }]);
      todoInputRef.current.value = ""; // Clear the input field after adding todo
    }
  };

  return (
    <div className="md:max-auto min-h-screen px-4 p-10 md:container bg-gradient-to-tr from-purple-800 to-purple-950">
      <div className="w-full md:w-1/2 mx-auto p-5 text-black text-center flex flex-wrap items-center border rounded bg-white">
        <div className="w-full flex justify-between px-5">
          <p className="font-serif">Learn useRef</p>
          <button className=" bg-purple-800 w-20 rounded text-white">
            Add
          </button>
        </div>
      </div>
      <div className="md:max-auto md:container w-full  h-full p-10 flex flex-wrap justify-between gap-10">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="w-full md:w-1/3 h-full text-white bg-gray-900 rounded-3xl text-center "
          >
            <h1 className="p-5 text-start font-serif">
              {todo.id}. {todo.text}
            </h1>
            <p className="px-5 text-start font-serif">status: {todo.status}</p>
            <button
              onClick={() => handleUpdateStatus(todo.id)}
              className="w-[80%] h-10 mt-10 rounded-xl bg-blue-700 px-5 text-center"
            >
              Update Status
            </button>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="w-[80%] h-10 mt-10 rounded-xl bg-blue-700 px-5 text-center"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
