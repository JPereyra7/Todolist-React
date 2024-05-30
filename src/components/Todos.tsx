import { Todo } from "../models/Todo";
import { TodoPresentation } from "./Todo";

interface ITodoProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const Todos = ({todos, toggleTodo, deleteTodo}: ITodoProps) => {
  return (
    <div>
        {todos.map((todo) => (
            <TodoPresentation key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={deleteTodo}
            />
        ))}
    </div>
  );
};

export default Todos