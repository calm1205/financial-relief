type FIXED_COST = {
  /** 固定費名 */
  name: string;
  /** 費用 */
  cost: number;
};

const FIXED_COSTS: FIXED_COST[] = [
  { name: "光熱費", cost: 18_000 },
  { name: "家賃", cost: 110_000 },
  { name: "通信料", cost: 3_000 },
  { name: "サブスクリプション", cost: 5_000 },
];
