import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => (
  <div className="todo-item">
    <span>{todo.text}</span>
    <div className="actions">
      <button onClick={() => onEdit(todo)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  </div>
);

export default TodoItem;
