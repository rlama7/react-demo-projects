import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './styles.css';

const ToDoLists = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editId, setEditId] = useState(null);

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (!inputText.trim()) return;

    if (editId) {
      handleUpdate();
    } else {
      const newTodo = { id: Date.now().toString(), text: inputText };
      setTodos([...todos, newTodo]);
    }

    setInputText('');
  };

  const handleUpdate = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editId ? { ...todo, text: inputText } : todo
    );
    setTodos(updatedTodos);
    setEditId(null);
  };

  const handleEdit = (todo) => {
    setInputText(todo.text);
    setEditId(todo.id);
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmission} className="input-group">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">{editId ? 'Update Todo' : 'Add Todo'}</button>
      </form>

      {/* */}
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoLists;
