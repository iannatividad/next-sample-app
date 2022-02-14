import { Todo } from '@next-sample-app/data';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[];
}

const StyledTodos = styled.ul``;

export function Todos(props: TodosProps) {
  const { todos } = props;

  const todoList = todos.map((todo) => {
    const { title } = todo;
    return (
      <li className="todo" key={title}>
        {title}
      </li>
    );
  });

  return <StyledTodos>{todoList}</StyledTodos>;
}

export default Todos;
