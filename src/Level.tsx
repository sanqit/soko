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
    console.log(`x=${yx};y=${yy}`);
    this.setState({ levelRender: levelRender, x: yx, y: yy });
  }

  keyDownHandler = (event: any) => {
    let { level, x, y } = this.state;
    if (event.defaultPrevented || level.finished) {
      return; // Do nothing if the event was already processed
    }
    let dx = 0,
      dy = 0;
    const data = level.data;
    if (event.keyCode == 37) (dx = -1), (dy = 0);
    else if (event.keyCode == 39) (dx = 1), (dy = 0);
    else if (event.keyCode == 38) (dx = 0), (dy = -1);
    else if (event.keyCode == 40) (dx = 0), (dy = 1);
    else return;
    if (data[y + dy][x + dx] == "w") return;

    if (data[y + dy][x + dx] == "b" || data[y + dy][x + dx] == "a") {
      if (
        data[y + dy + dy][x + dx + dx] == "w" ||
        data[y + dy + dy][x + dx + dx] == "b" ||
        data[y + dy + dy][x + dx + dx] == "a"
      ) {
        this.setState({ level: level, x: x, y: y });
        return;
      }
      data[y + dy + dy][x + dx + dx] =
        data[y + dy + dy][x + dx + dx] == "p" ? "a" : "b";
      data[y + dy][x + dx] = data[y + dy][x + dx] == "a" ? "p" : "_";
    }
    if (data[y + dy][x + dx] == "w") {
      this.setState({ level: level, x: x, y: y });
      return;
    }
    data[y][x] = data[y][x] == "Y" ? "p" : "_";

    data[y + dy][x + dx] = data[y + dy][x + dx] == "p" ? "Y" : "y";
    x += dx;
    y += dy;

    for (var n = 0; n < data.length; n++)
      for (var m = 0; m < data[n].length; m++)
        if (data[n][m] == "b") {
          this.setState({ level: level, x: x, y: y }, this.createLevel);
          return;
        }

    level.finished = true;
    window.removeEventListener("keydown", this.keyDownHandler);
    this.setState({ level: level, x: x, y: y }, this.props.goToMenu);
    event.preventDefault();
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
    const { level, levelRender } = this.state;
    return (
      <div>
        <div>{level.name}</div>
        <div className="level">
          {levelRender}
          <div className="menu-buttons">
            <button className="btn" onClick={this.restartHandle}>
              <span>Заново</span>
            </button>
            <button className="btn" onClick={this.goToMenuHandle}>
              <span>Главное меню</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
