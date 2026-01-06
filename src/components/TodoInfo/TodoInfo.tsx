import React from "react";
import { UserInfo } from "../UserInfo";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};
type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};
type Props = {
    todo: Todo;
    user: User | null
}
export const TodoInfo: React.FC<Props> = ({todo, user}) => {
    if (!user) return null;
    return (
        <article data-id={todo.id} className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
            <h2 className="TodoInfo__title">{todo.title}</h2>
            <UserInfo user={user} />
        </article>
    )
};
