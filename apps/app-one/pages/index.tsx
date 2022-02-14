import { Todo } from '@next-sample-app/data';
import { Todos } from '@next-sample-app/ui';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((res) => res.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/todos', {
      method: 'POST',
      body: '',
    })
      .then((res) => res.json())
      .then((todo) => {
        setTodos([...todos, todo]);
      });
  }

  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span> Welcome App One 👋
            </h1>
          </div>
          <button id="add-todo" onClick={addTodo}>
            Add Todo
          </button>
          <ul>
            <Todos todos={todos} />
          </ul>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
