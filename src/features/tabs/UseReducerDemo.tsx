import React from "react";

interface IState {
    count: number
}

interface IAction {
    type: string,
    payload?: number
}

const initialState: IState = {count: 0};

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + (action.payload ?? 1)};
    case 'decrement':
      return {count: state.count - (action.payload ?? 1)};
    default:
      throw new Error();
  }
}

function UseReducerDemo() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment', payload: 2})}>+</button>
    </>
  );
}

export default UseReducerDemo