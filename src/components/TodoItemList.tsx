import * as React from 'react';
import TodoItem from './TodoItem';

interface ITodoType {
  id: number;
  text: string;
  checked: boolean;
}

interface IProps {
  todos: ITodoType[];
  onToggle: (id?: number) => void;
  onRemove: (id?: number) => void;
}

const TodoItemList: React.FunctionComponent<IProps> = ({ todos, onToggle, onRemove }) => {
  const todoList = todos.map(todo => (
    <TodoItem {...todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />
  ));

  return <div>{todoList}</div>;
};

export default TodoItemList;
