type EVENT = {
  /** イベント名 */
  name: string;
  /** イベントが発生する（した）歳 */
  age: number;
  /** 費用 */
  cost: number;
  /** 一年ごとに繰り返すか */
  isAnualLoop: boolean;
};

export const EVENTS: EVENT[] = [
  { name: "結婚", age: 30, cost: 3_000_000, isAnualLoop: false },
  { name: "住宅", age: 35, cost: 30_000_000, isAnualLoop: false },
  { name: "学費", age: 40, cost: 3_000_000, isAnualLoop: false },
];
