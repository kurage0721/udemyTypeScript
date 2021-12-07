export{};

//型エイリアスの宣言
type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
}

//オブジェクトの宣言
const DaimajinSasaki: Pitcher1 ={
  throwingSpeed: 154
};

const oshiaiaHiromitsu: Batter1 = {
  //throwingSpeed: 154, //存在しないプロパティのためエラーになる。
  battingAverage: 0.367
};

//intersection型を使わない場合下記のようにプロパティと型を指定する必要がある
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

//intersection型(交差型)の宣言
//既存の型を&で連結させることができる
type TwoWayPlayer = Pitcher1 & Batter1;

//intersection型を使うと正常に処理が動く
const OtaniShouhei: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286
}