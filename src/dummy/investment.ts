type INVESTMENT = {
  /** 投資名 */
  name: string;
  /** 投資額/月 */
  cost: number;
  /** 年利（0の場合は貯金） */
  anualInterest: number;
};

export const INVESTMENTS: INVESTMENT[] = [
  { name: "つみたてNISA", cost: 60_000, anualInterest: 3 },
  { name: "S&P500", cost: 30_000, anualInterest: 3 },
  { name: "貯金", cost: 200_000, anualInterest: 0 },
];
