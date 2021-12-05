export {};

//基本的な配列 の宣言

// 数値型のみの配列
let numbers: number[] = [1,2,3];

//推奨されないが別の書き方、
let numbers2: Array<number> = [1,2,3];

//どちらも結果は同じ
console.log(numbers2);

//テキスト型の配列
let strings: string[] = ["Tokyo", "Osaka", "Kyoto"];
//推奨されないが別の書き方、
let strings2: Array<string> =  ["Tokyo", "Osaka", "Kyoto"];
//どちらも結果は同じ
console.log(strings2);


//2次元配列の宣言
let nijigenHairetsu: number[][] = [
  [100,150],
  [150,200]
]

//1列目の出力
console.log(nijigenHairetsu[0]);

//1列目の1つめの値の出力 : この場合100が出力される
console.log(nijigenHairetsu[0][0]);

//2列目の出力
console.log(nijigenHairetsu[1]);


//複数の型を持つ配列の宣言(ユニオンタイプス)
let hairetsu: (string | number | boolean)[] = [1, false, "japan"];