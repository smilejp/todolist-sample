import * as React from 'react';
import './TodoItem.css';

interface IProps {
  text: string;
  checked?: boolean;
  id?: number;
  onToggle: (id?: number) => void;
  onRemove: (id?: number) => void;
}

const TodoItem: React.FunctionComponent<IProps> = ({ text, checked, id, onToggle, onRemove }) => {
  return (
    <div className="todo-item" onClick={() => onToggle(id)}>
      <div
        className="remove"
        onClick={e => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        &times;
      </div>
      <div className={`todo-text ${checked && 'checked'}`}>
        <div>{text}</div>
      </div>
      {checked && <div className="check-mark">✓</div>}
    </div>
  );
};

export default TodoItem;
