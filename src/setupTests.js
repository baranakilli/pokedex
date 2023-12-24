import { configure } from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import fetchMock from 'jest-fetch-mock';

configure({ adapter: new Adapter() });

fetchMock.enableMocks();