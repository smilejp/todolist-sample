import * as React from 'react';
import './Form.css';

interface IProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCreate?: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Form: React.FunctionComponent<IProps> = ({ value, onChange, onCreate, onKeyPress }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleCreate = React.useCallback(() => {
    console.log('Form handleCreate');
    if (onCreate) onCreate();
    if (inputRef && inputRef.current) inputRef.current.focus();
  }, [value]);

  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} ref={inputRef} />
      <div className="create-button" onClick={handleCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
