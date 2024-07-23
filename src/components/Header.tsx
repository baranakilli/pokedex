import { Component } from "react";

class Header extends Component {
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return false;
  }

  render() {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: "15vh", minHeight: "120px" }}
      >
        <img id="header" src={require("../images/Pokédex_logo.png")} alt="" />
      </div>
    );
  }
}
export default Header;
