export {};

//bmiを計算する関数
// let bmi: (height: number, weight: number) => number = (
//   height: number,
//   weight: number
// ): number => weight / (height * height);

//2つの引数を使うことが必須になるので、以下はエラーになる
//bmi(1.78);

//オプショナルな引数を受け取る設計
//bmi(身長, 体重, console.logで出力するかどうか？)

//入力パターン
//bmi(1.78, 86, true)
//bmi(1.78, 86, false)
//bmi(1.78, 86) //三番目の引数に真偽値がない場合は出力しない

//オプショナルな引数(あってもなくても良い引数)を設定する場合は、引数名の後ろに?を付与する
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);

  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.78, 86);
