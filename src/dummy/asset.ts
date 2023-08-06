import { EVENT } from "./event";
import { INVESTMENT } from "./investment";

type ASSET = {
  investment: INVESTMENT;
  event: EVENT;
};

/**
 * @deprecated DBとしては不要。メモリ上の計算で算出可能
 */
export const ASSETS: ASSET[] = [];
