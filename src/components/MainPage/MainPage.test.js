import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestPokemons: jest.fn(),
    pokemons: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters Pokemons", () => {
  const mockProps = {
    onRequestPokemons: jest.fn(),
    pokemons: [],
    searchField: "a",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterPokemons()).toEqual([]);
});

it("filters Pokemons correctly", () => {
  const filteredPokemons = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
  ];
  const mockProps = {
    onRequestPokemons: jest.fn(),
    pokemons: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ],
    searchField: "Leanne",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterPokemons()).toEqual(filteredPokemons);
});

it("filters Pokemons correctly 2", () => {
  const mockProps = {
    onRequestPokemons: jest.fn(),
    pokemons: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ],
    searchField: "Xavier",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterPokemons()).toEqual([]);
});

it("isPending working", () => {
  const mockProps = {
    onRequestPokemons: jest.fn(),
    pokemons: [],
    searchField: "a",
    isPending: true,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});

it("error display working", () => {
  const mockProps = {
    onRequestPokemons: jest.fn(),
    pokemons: [],
    searchField: "a",
    isPending: false,
    error: true,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});
