export{};

//関数の定義
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;


//以下unknown型のためコンパイルエラーになる 
// let sumUnknown = numberUnknown + 10;

// typeofで型を取得できる
// console.log(typeof numberUnknown);
// 下記のように、typeofを使って、型を確認しながらコードを安全に実行させる仕組みを'タイプガード'(型ガード)と呼ぶ

if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

