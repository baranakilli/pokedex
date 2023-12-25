import { Component } from 'react';

class Header extends Component {
      shouldComponentUpdate(nextProps: any, nextState: any) {
    return false;
  }

        render() {
      return <h1>RoboFriends</h1>;

  }
}
export default Header;
