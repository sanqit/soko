import * as React from "react";

import gameData, { IGame, ILevel } from "./GameData";
import Level from "./Level";

interface IGameState {
  game: IGame;
  selectedLevel?: ILevel;
}

export default class Game extends React.Component<any, IGameState> {
  constructor(props: any) {
    super(props);
    this.state = {
      game: gameData,
    };
  }

  render() {
    const { game, selectedLevel } = this.state;

    if (selectedLevel) {
      return (
        <Level
          key={Math.random()}
          level={selectedLevel}
          goToMenu={() => {
            this.setState({ selectedLevel: undefined });
          }}
        />
      );
    }

    return (
      <div className="level-buttons">
        {game.levels.map((x, index) => {
          return (
            <button
              key={`level${index}`}
              disabled={!x.unlocked && !game.levels[index - 1].finished}
              className={`btn ${x.finished ? "" : "btn-orange"}`}
              onClick={() => this.setState({ selectedLevel: x })}
            >
              <span>Уровень {index + 1}</span>
            </button>
          );
        })}
      </div>
    );
  }
}
