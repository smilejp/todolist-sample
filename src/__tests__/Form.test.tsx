import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Form from '../components/Form';
import '../testSetup';

describe('<Form/>', () => {
  let component: ShallowWrapper<React.Component>;

  it('renders with no props', () => {
    component = shallow(<Form />);
    expect(component).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
