export {};

//エラーを発生させる関数 throw → 例外を発生させる
//エラーが必ず発生する(例外を発生させる)ので、明示的に何も返さない
function error(message: string): never {
  //例外を発生させる(スローさせる)処理
  throw new Error(message);
  //下記のように文字列を直接スローするのはスタックトレース(直前に実行していた処理の履歴)が取得できず、原因が特定できなくなるためNG
  //throw message;
}

//エラーハンドリング
//tryで実行
//resultでは何も帰らないが、catchでエラーをキャッチしてログに出力する。
try {
  let result = error('test');
  console.log({ result });
}catch (error){
  console.log({ error });
}