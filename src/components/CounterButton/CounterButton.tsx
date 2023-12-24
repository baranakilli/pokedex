import { Component } from 'react';

interface CounterButtonState {
  count: number;
}

class CounterButton extends Component<{}, CounterButtonState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps: {}, nextState: CounterButtonState) {
    return this.state.count !== nextState.count;
  }

  updateCount = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <button
        id="counter"
        className="mb3 ph3 pv1 br4 bw1"
        onClick={this.updateCount}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
