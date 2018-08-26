import * as React from "react";
import { ILevel } from "./GameData";

import "./assets/level.css";

interface ILevelProps {
  level: ILevel;
  goToMenu: () => void;
}

interface ILevelSate {
  levelRender?: any;
  level: ILevel;
  x: number;
  y: number;
}

export default class Level extends React.Component<ILevelProps, ILevelSate> {
  constructor(props: ILevelProps) {
    super(props);
    this.state = {
      level: props.level,
      x: 0,
      y: 0,
    };
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.createLevel = this.createLevel.bind(this);
    this.restartHandle = this.restartHandle.bind(this);
    this.goToMenuHandle = this.goToMenuHandle.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.keyDownHandler);
  }

  componentWillMount() {
    this.createLevel();
  }

  createLevel() {
    const { level } = this.state;
    let rowNumber = -1,
      cellNumber = -1;
    let yx = 0,
      yy = 0;
    var levelRender = level.data.map(x => {
      rowNumber++;
      cellNumber = -1;
      return (
        <div key={`row${rowNumber}`} className="level-row">
          {x.map(y => {
            cellNumber++;
            if (y == "y" || y == "Y") {
              yx = cellNumber;
              yy = rowNumber;
            }
            return (
              <div
                key={`${rowNumber};${cellNumber}`}
                className={`level-cell level-cell-${y}`}
              >
                <div className={`type-${y}`} />
              </div>
            );
          })}
        </div>
      );
    });
    this.setState({ levelRender: levelRender, x: yx, y: yy });
  }

  keyDownHandler = (event: any) => {
    if (event.defaultPrevented) {
      return;
    }
    if (this.step(event.keyCode)) {
      window.removeEventListener("keydown", this.keyDownHandler);
    }
    event.preventDefault();
  };
  step = (keyCode: number) => {
    let { level, x, y } = this.state;
    if (level.finished) {
      return false;
    }
    let dx = 0,
      dy = 0;
    const data = level.data;
    if (keyCode == 37) (dx = -1), (dy = 0);
    else if (keyCode == 39) (dx = 1), (dy = 0);
    else if (keyCode == 38) (dx = 0), (dy = -1);
    else if (keyCode == 40) (dx = 0), (dy = 1);
    else return false;
    if (data[y + dy][x + dx] == "w") {
      return false;
    }

    if (data[y + dy][x + dx] == "b" || data[y + dy][x + dx] == "a") {
      if (
        data[y + dy + dy][x + dx + dx] == "w" ||
        data[y + dy + dy][x + dx + dx] == "b" ||
        data[y + dy + dy][x + dx + dx] == "a"
      ) {
        this.setState({ level: level, x: x, y: y });
        return false;
      }
      data[y + dy + dy][x + dx + dx] =
        data[y + dy + dy][x + dx + dx] == "p" ? "a" : "b";
      data[y + dy][x + dx] = data[y + dy][x + dx] == "a" ? "p" : "_";
    }
    if (data[y + dy][x + dx] == "w") {
      this.setState({ level: level, x: x, y: y });
      return false;
    }
    data[y][x] = data[y][x] == "Y" ? "p" : "_";

    data[y + dy][x + dx] = data[y + dy][x + dx] == "p" ? "Y" : "y";
    x += dx;
    y += dy;

    for (var n = 0; n < data.length; n++)
      for (var m = 0; m < data[n].length; m++)
        if (data[n][m] == "b") {
          this.setState({ level: level, x: x, y: y }, this.createLevel);
          return false;
        }

    level.finished = true;
    this.setState({ level: level, x: x, y: y }, this.props.goToMenu);
    return true;
  };

  restartHandle() {
    var { level } = this.props;
    level.finished = false;
    level.data = JSON.parse(JSON.stringify((level.defaultState || level).data));
    this.setState({ level }, () => {
      window.addEventListener("keydown", this.keyDownHandler);
      this.createLevel();
    });
  }
  goToMenuHandle() {
    this.props.goToMenu();
  }
  render() {
    const controlButtonStyle = {
      display: "initial",
      width: 40,
      height: 40,
      margin: "0 0 5px 5px",
    };
    const { level, levelRender } = this.state;
    return (
      <div className="level">
        <div>{level.name}</div>
        {levelRender}
        <div className="menu-buttons">
          <button className="btn" onClick={this.restartHandle}>
            <span>Заново</span>
          </button>
          <button className="btn" onClick={this.goToMenuHandle}>
            <span>Главное меню</span>
          </button>
        </div>
        <div className="control-buttons">
          <button
            style={controlButtonStyle}
            className="btn"
            onClick={this.step.bind(this, 38)}
          >
            &uarr;
          </button>
          <div className="">
            <button
              style={controlButtonStyle}
              className="btn"
              onClick={this.step.bind(this, 37)}
            >
              &larr;
            </button>
            <button
              style={controlButtonStyle}
              className="btn"
              onClick={this.step.bind(this, 40)}
            >
              &darr;
            </button>
            <button
              style={controlButtonStyle}
              className="btn"
              onClick={this.step.bind(this, 39)}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
