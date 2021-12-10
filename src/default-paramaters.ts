export {};
//rateにデフォルトで1.1の値を与える
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};
//以下では1000がcurrentSalaryに与えられるため、1000*1.1の演算結果がログに出力される
console.log(nextYearSalary(1000)); //1100

//以下ではcurrentSalaryとrate両方に値が入るため、1000*1.05の演算結果がログに出力される
console.log(nextYearSalary(1000 * 1.05)); //1050

//同様にcurrentSaralyにもcurrentSalary: number = 2000のようなデフォルト引数の指定が可能
//その場合は下記のように引数なしでも2000*1.1の結果が返る
//console.log(nextYearSalary()); // 2200
