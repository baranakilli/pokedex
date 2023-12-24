import { shallow } from 'enzyme';
import CardList from './CardList';

const mockRobots = [
  {
    id: 1,
    name: 'John Snow',
    username: 'JohnJohn',
    email: 'john@gmail.com'
  }
];

it('expect to render CardList component', () => {
  // console.log(shallow(<CardList />));
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});
 