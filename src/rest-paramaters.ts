export {};

const reducer = (accumurator: number, currentValue: number) => {
  console.log({ accumurator, currentValue });
  return accumurator + currentValue;
};

//引数に数値を適当に与えた場合、すべての数値の総和を求める
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5)); //結果15
