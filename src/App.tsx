import './App.scss';

import { useState } from 'react';
import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

type Todo = {
  id: number;
  title: string;
  userId: number,
  completed: boolean
}
function getNewIdTodo(todos: Todo[]) {
  const maxId = Math.max(
    ...todos.map((todo) => todo.id)
  );
  return maxId + 1;
}
export const App = () => {
  const [todos, setTodos] = useState(todosFromServer);

  const addTodo = (newTodo: Omit<Todo, 'id'>) => {
    const todoNew = {
      ...newTodo,
      id: getNewIdTodo(todos)
    };
    setTodos(prev => [...prev, todoNew]);
  }
  return (
    <div className="App">
      <h1>Add todo form</h1>

      <TodoForm 
       users={usersFromServer}
       onAddTodo={addTodo}
      />

      <TodoList
       todos={todos}
       users={usersFromServer}
      />
    </div>
  );
};
