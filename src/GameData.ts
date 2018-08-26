export interface ILevel {
  name: string;
  data: string[][];
  defaultState?: ILevel;
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
      name: "1",
      data: createData([
        "wwwwwwww",
        "w___w__w",
        "w___bypw",
        "w___w__w",
        "wwwwwwww",
      ]),
    },
    {
      name: "2",
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
      name: "3",
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
      name: "4",
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
    {
      name: "5",
      data: createData([
        "___wwww",
        "wwww_yw",
        "w__ab_w",
        "w_____w",
        "ww_pwww",
        "_wb_w__",
        "_w_pw__",
        "_wwww__",
      ]),
    },
    {
      name: "6",
      data: createData([
        "www_www",
        "wpwwwpw",
        "w_w__pw",
        "w_bb_yw",
        "w__b__w",
        "w__w__w",
        "w__wwww",
        "wwww___",
      ]),
    },
    {
      name: "7",
      data: createData([
        "___wwww_",
        "___w_yww",
        "wwww___w",
        "wp_wbb_w",
        "w_____ww",
        "wp__bww_",
        "wwp__w__",
        "_wwwww__",
      ]),
    },
    {
      name: "8",
      data: createData([
        "wwwww___",
        "w_ppwwww",
        "w_b____w",
        "w__wbw_w",
        "w_y_pb_w",
        "wwwwwwww",
      ]),
    },
    {
      name: "9",
      data: createData([
        "__wwwww",
        "www__pw",
        "w_b_w_w",
        "w_ab__w",
        "w_pwy_w",
        "w____ww",
        "w___ww_",
        "wwwww__",
      ]),
    },
    {
      name: "10",
      data: createData([
        "wwwwwww_",
        "wp__ypw_",
        "w__bw_ww",
        "w_w_bp_w",
        "w___bw_w",
        "wwww___w",
        "___wwwww",
      ]),
    },
    {
      name: "11",
      data: createData([
        "wwwww__",
        "wp_pwww",
        "wpwbb_w",
        "w___y_w",
        "w_bw__w",
        "ww___ww",
        "_wwwww_",
      ]),
    },
    {
      name: "12",
      data: createData([
        "wwwww__",
        "wp__www",
        "w_w___w",
        "w_p_w_w",
        "w_bab_w",
        "wwy_www",
        "_w__w__",
        "_wwww__",
      ]),
    },
    {
      name: "13",
      data: createData([
        "wwwwwwww",
        "wp___p_w",
        "w_w_w__w",
        "wyb__bpw",
        "wwwww_bw",
        "____w__w",
        "____wwww",
      ]),
    },
    {
      name: "14",
      data: createData([
        "_wwwwww",
        "ww__p_w",
        "w_a_w_w",
        "w_pb__w",
        "w__wbww",
        "ww_y_w_",
        "_wwwww_",
      ]),
    },
    {
      name: "15",
      data: createData([
        "_wwwww__",
        "_w_y_www",
        "ww_p___w",
        "wp_bpb_w",
        "wwbw_www",
        "_w___w__",
        "_wwwww__",
      ]),
    },
    {
      name: "16",
      data: createData([
        "_wwwww_",
        "ww___w_",
        "w_bw_w_",
        "w_p_yww",
        "w_a___w",
        "ww_wb_w",
        "_wp__ww",
        "_wwwww_",
      ]),
    },
    {
      name: "17",
      data: createData([
        "_wwww___",
        "ww__wwww",
        "wppb__pw",
        "w_wb_b_w",
        "wy__w__w",
        "wwwww__w",
        "____wwww",
      ]),
    },
    {
      name: "18",
      data: createData([
        "_wwwwww_",
        "_w__pyww",
        "_w___bpw",
        "_wwwaw_w",
        "ww_____w",
        "w__b__ww",
        "w___www_",
        "wwwww___",
      ]),
    },
    {
      name: "19",
      data: createData([
        "_wwww___",
        "_wy_w___",
        "_w__w___",
        "wwp_wwww",
        "w_bbp_pw",
        "w__b_www",
        "www__w__",
        "__wwww__",
      ]),
    },
    {
      name: "20",
      data: createData([
        "wwwww__",
        "wp__w__",
        "w_w_www",
        "w_ab__w",
        "w__bp_w",
        "w__ywww",
        "wwwww__",
      ]),
    },
    {
      name: "21",
      data: createData([
        "__wwwww",
        "__w___w",
        "__w_wpw",
        "www__pw",
        "wy_bb_w",
        "w__pb_w",
        "wwwwwww",
      ]),
    },
    {
      name: "22",
      data: createData([
        "wwwwww__",
        "w___yw__",
        "w_bw_www",
        "w_a_b__w",
        "w___ww_w",
        "wwp__p_w",
        "_ww___ww",
        "__wwwww_",
      ]),
    },
    {
      name: "23",
      data: createData([
        "wwwwww_",
        "w___yww",
        "w__w__w",
        "wp__b_w",
        "w_bbwpw",
        "www__pw",
        "__wwwww",
      ]),
    },
    {
      name: "24",
      data: createData([
        "__wwww__",
        "wwwp_w__",
        "w_p__www",
        "w___bb_w",
        "ww_p_byw",
        "_wwwwwww",
      ]),
    },
    {
      name: "25",
      data: createData([
        "_wwwwww_",
        "wwyp__w_",
        "w_bba_w_",
        "w__w__ww",
        "w__w__pw",
        "wwww_w_w",
        "___w___w",
        "___wwwww",
      ]),
    },
  ],
};

gameData.levels.map(x => {
  x.defaultState = JSON.parse(JSON.stringify(x)) as ILevel;
});

export default gameData;
