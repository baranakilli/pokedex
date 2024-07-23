import * as actions from "./actions";
import * as types from "./constants";
import fetchMock from "jest-fetch-mock";
import thunkMiddleware from "redux-thunk";
import configureMockStore from "redux-mock-store";

export const mockStore = configureMockStore([thunkMiddleware]);

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("actions", () => {
  it("should create an action to search", () => {
    const text = "Finish docs";
    const expectedActions = {
      type: types.CHANGE_SEARCH_FIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedActions);
  });
});

describe("fetchMock pokemons action", () => {
  it("should create a Pending action on request Pokemons", () => {
    const store = mockStore();
    store.dispatch(actions.requestPokemons());
    const action = store.getActions();
    expect(action[0]).toEqual({ type: "REQUEST_POKEMONS_PENDING" });
  });

  it("should create a Sucess action on request Pokemons", () => {
    const store = mockStore();
    fetchMock.mockResponse(
      JSON.stringify([
        {
          id: 123,
          name: "Peter",
          email: "peter.spidey@gmail.com",
        },
      ])
    );
    const expectedActions = [
      { type: types.REQUEST_POKEMONS_PENDING },
      {
        type: types.REQUEST_POKEMONS_SUCCESS,
        payload: [
          {
            id: 123,
            name: "Peter",
            email: "peter.spidey@gmail.com",
          },
        ],
      },
    ];
    return store.dispatch(actions.requestPokemons()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create a Fail action on request Pokemons", () => {
    const store = mockStore();
    fetchMock.mockReject(new Error("IMPOOOSSIBLEEE!!"));
    const expectedActions = [
      { type: types.REQUEST_POKEMONS_PENDING },
      {
        type: types.REQUEST_POKEMONS_FAILED,
        payload: Error("IMPOOOSSIBLEEE!!"),
      },
    ];
    return store.dispatch(actions.requestPokemons()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
