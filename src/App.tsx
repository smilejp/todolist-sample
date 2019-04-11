import React, {
  FunctionComponent,
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
  useEffect,
} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

interface IProps {
  //
}

const App: FunctionComponent<IProps> = () => {
  const {
    input,
    todos,
    handleKeyPress,
    handleChange,
    handleCreate,
    handleRemove,
    handleToggle,
  } = useMangeTodo();
  console.log(`App render`);

  useEffect(() => {
    console.log('App useEffect');
  });

  useLayoutEffect(() => {
    console.log('App useLayoutEffect');
  });

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

function useMangeTodo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    { id: 0, text: 'Test1', checked: false },
    { id: 1, text: 'Test2', checked: true },
    { id: 2, text: 'Test3', checked: false },
  ]);
  const id = useRef(3);

  const handleCreate = useCallback(() => {
    console.log('App handleCreate');

    if (input.length === 0) return;

    setInput('');
    setTodos(
      todos.concat({
        id: id.current,
        text: input,
        checked: false,
      })
    );

    id.current += 1;
  }, [input]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      console.log('App handleKeyPress');

      if (e.key === 'Enter') {
        handleCreate();
      }
    },
    [input]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log('App handleChange');

      setInput(e.target.value);
    },
    [input]
  );

  const handleToggle = useCallback(
    (id?: number) => {
      console.log('App handleToggle id:', id);
      const index = todos.findIndex(todo => todo.id === id);
      const selected = todos[index];
      const nextTodos = [...todos];
      nextTodos[index] = {
        ...selected,
        checked: !selected.checked,
      };

      setTodos(nextTodos);
    },
    [todos]
  );

  const handleRemove = useCallback(
    (removeId?: number) => {
      console.log('App handleRemove');
      const index = todos.findIndex(todo => todo.id === removeId);
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
      id.current -= 1;
    },
    [todos]
  );

  return { handleCreate, handleKeyPress, handleChange, handleToggle, handleRemove, todos, input };
}
