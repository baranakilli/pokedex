import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters Robots', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: 'a',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters Robots correctly', () => {
  const filteredRobots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
  ];
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
    ],
    searchField: 'Leanne',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
});

it('filters Robots correctly 2', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
    ],
    searchField: 'Xavier',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('isPending working', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: 'a',
    isPending: true,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});

it('error display working', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: 'a',
    isPending: false,
    error: true
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});
