import React from "react";
import "../css/grid.css";
import "../css/homePage.css";
import logo from "../logo.svg";
import { GiCardboardBox } from "react-icons/gi";
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="root">
        <div className="row">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="row">
          <h1>
            Show your friends and favorite content creators that you care.
          </h1>
        </div>
        <div className="row">
          <div className="col bulletBox">
          <h1>
              <GiCardboardBox />
            </h1>
            <p>Give your audience a friendly way to thank you</p>
          </div>
          <div className="col bulletBox">
          <h1>
              <GiCardboardBox />
            </h1>
            <p>Send appreciation to your friends and family</p>
          </div>
          <div className="col bulletBox">
            <h1>
              <GiCardboardBox />
            </h1>
            <p>Connect with your favorite content creators</p>
          </div>
        </div>
      </div>
    );
  }
}
