import React, { useState } from "react"
import { Todo } from "../models/Todo"
import { AddTodo } from "./AddTodo";
import Todos from "./Todos";

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const createTodo = (todoText: string) => {
        setTodos([...todos, new Todo(todoText)]);
    };

    const toggleTodo = (id: number) => {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, done: !todo.done };
            } else {
              return todo;
            }
          })
        );
      };

      const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      }

  return (
    <React.Fragment>
        <AddTodo addTodo={createTodo} />
        <Todos todos={todos} toggleTodo={toggleTodo} deleteTodo={removeTodo}/>
    </React.Fragment>
  )
}

export default TodoApp