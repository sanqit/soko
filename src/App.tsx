import * as React from "react";
import Game from "./Game";
import "./assets/btn.css";

export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Game />
        <div>
          from <a href="http://t.me/sanqit">sanqit</a> with love
        </div>
      </div>
    );
  }
}
