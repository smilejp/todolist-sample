import * as React from 'react';
import './TodoListTemplate.css';

interface IProps {
  form?: any;
}

const TodoListTemplate: React.FunctionComponent<IProps> = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">Todo</div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
