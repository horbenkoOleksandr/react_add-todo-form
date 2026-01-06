import React from "react";
import { TodoInfo } from "../TodoInfo";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};
type Props = {
    todos: Todo[];
    users: User[]
}
export const TodoList: React.FC<Props> = ({todos, users}) => {
    return (
        <section className="TodoList">
            {todos.map((todo) => {
                const userFind = users.find((user) => user.id === todo.userId);
                if (!userFind) {
                  return null;
                };
                return (
                    <TodoInfo
                      key={todo.id}
                      todo={todo}
                      user={userFind}
                    />
                )
            })}
        </section>
    )
};
