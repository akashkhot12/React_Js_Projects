import React, { useState } from "react";
import "./App.css";
import { FaCalendarTimes } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";

export default function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  const [allTodos, setTodos] = useState([]);

  const [newTitle, setNewTitle] = useState("");

  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {
    let newTodoItems = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItems);
    setTodos(updatedTodoArr);
  };

  return (
    <div>
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onClick={(e) => setNewTitle(e.target.value)}
              placeholder="What is your task tittle ?"
            />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onClick={(e) => setNewDescription(e.target.value)}
              placeholder="What is your task tittle ?"
            />
          </div>
          <div className="todo-input-item">
            <button
              onClick={handleAddTodo}
              type="button"
              className="primaryBtn"
            >
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button
            className={`secondaryBtn ${
              isCompletedScreen === false && "active"
            }`}
            onClick={() => setIsCompletedScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${isCompletedScreen === true && "active"}`}
            onClick={() => setIsCompletedScreen(true)}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          {allTodos.map((item, index) => {
            return (
              <div key={index} className="todo-list-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div>
                  <FaCalendarTimes className="icon" />
                  <FaCalendarPlus className="check-icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
