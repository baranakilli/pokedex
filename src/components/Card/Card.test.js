import { shallow } from 'enzyme';
import Card from './Card';

it('expect to render Card component', () => {
  // console.log(shallow(<Card />));
  expect(shallow(<Card />)).toMatchSnapshot();
});
