import * as React from 'react';
import './Form.css';

interface IProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCreate?: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Form: React.FunctionComponent<IProps> = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
