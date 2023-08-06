type Evaluation = 0 | 1 | 2 | 3 | 4 | 5;

type VARIABLE_COST = {
  /** 変動費名 */
  name: string;
  /** 費用 */
  cost: number;
  /** 日付 */
  date: Date;
  /** 評価（0~5） */
  evaluation: Evaluation;
};

const VARIABLE_COSTS: VARIABLE_COST[] = [
  { name: "参考書", cost: 1_000, date: new Date("2023/08/01"), evaluation: 3 },
  {
    name: "生活食品",
    cost: 1_000,
    date: new Date("2023/08/06"),
    evaluation: 5,
  },
  {
    name: "ゴルフクラブ",
    cost: 10_000,
    date: new Date("2023/08/07"),
    evaluation: 3,
  },
  { name: "カフェ", cost: 700, date: new Date("2023/08/09"), evaluation: 4 },
  { name: "ランチ", cost: 2_000, date: new Date("2023/08/02"), evaluation: 1 },
];
