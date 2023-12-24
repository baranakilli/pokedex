import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('renders without crashing', () => {
  expect(shallow(<CounterButton/>)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
  const wrapper = shallow(<CounterButton/>);
  wrapper.find('#counter').simulate('click')
  expect(wrapper.state().count).toEqual(1)
  wrapper.find('#counter').simulate('click')
  wrapper.find('#counter').simulate('click')
  expect(wrapper.state().count).toEqual(3);
  expect(wrapper).toMatchSnapshot();
});
