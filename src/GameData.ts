export interface ILevel {
  name: string;
  data: string[][];
  finished?: boolean;
}

export interface IGame {
  levels: ILevel[];
}

function createData(arr: string[]) {
  var res: string[][] = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(arr[i].split(""));
  }
  return res;
}

const gameData: IGame = {
  levels: [
    {
      name: "Первый",
      data: createData([
        "wwwwwwww",
        "w___w__w",
        "w___bypw",
        "w___w__w",
        "wwwwwwww",
      ]),
    },
    {
      name: "Второй",
      data: createData([
        "__wwww_",
        "www__w_",
        "w_b_pww",
        "w_b___w",
        "wywp__w",
        "wwwwwww",
      ]),
    },
    {
      name: "Третий",
      data: createData([
        "wwww____",
        "w__w____",
        "w__wwwww",
        "w_pa___w",
        "wwb____w",
        "_w_wbwww",
        "_wp_yw__",
        "_wwwww__",
      ]),
    },
    {
      name: "Четвертый",
      data: createData([
        "wwwwwww",
        "w__py_w",
        "w_wpw_w",
        "w___b_w",
        "wpbb_ww",
        "w__www_",
        "wwww___",
      ]),
    },
  ],
};

export default gameData;
