import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TodoListTemplate from '../components/TodoListTemplate';

describe('<TodoListTemplate/>', () => {
  let component: ShallowWrapper<React.Component>;

  it('renders with test props', () => {
    component = shallow(<TodoListTemplate form={'test'} />);

    expect(
      component
        .find('section')
        .first()
        .text()
    ).toEqual('test');
  });
});
