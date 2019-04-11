import React, { FunctionComponent, useState, useCallback } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

interface IProps {
  //
}

function useCreate() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    { id: 0, text: 'Test1', checked: false },
    { id: 1, text: 'Test2', checked: true },
    { id: 2, text: 'Test3', checked: false },
  ]);
  const [id, setId] = useState(3);

  const handleCreate = useCallback(() => {
    if (input.length === 0) return;

    setInput('');
    setTodos(
      todos.concat({
        id: id + 1,
        text: input,
        checked: false,
      })
    );
    setId(id + 1);
  }, [input]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleCreate();
      }
    },
    [input]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    },
    [input]
  );

  const handleToggle = useCallback(
    (id?: number) => {
      const index = todos.findIndex(todo => todo.id === id);
      const selected = todos[index];
      const nextTodos = [...todos];
      nextTodos[index] = {
        ...selected,
        checked: !selected.checked,
      };

      setTodos(nextTodos);
    },
    [id, todos]
  );

  const handleRemove = useCallback(
    (id?: number) => {
      const index = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    },
    [id, todos]
  );

  return { handleCreate, handleKeyPress, handleChange, handleToggle, handleRemove, todos, input };
}

const App: FunctionComponent<IProps> = () => {
  const {
    input,
    handleKeyPress,
    handleChange,
    handleCreate,
    todos,
    handleRemove,
    handleToggle,
  } = useCreate();
  console.log(`render App timestamp:${new Date()}`);
  return (
    <TodoListTemplate
      form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      }
    >
      <TodoItemList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
    </TodoListTemplate>
  );
};

export default App;
