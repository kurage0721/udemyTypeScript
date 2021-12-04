//ファイルのモジュール化
//これがないとグローバル変数と同名の変数、定数をアノテーション下際にエラーになってしまうのでエラー回避ように記述
export {};

//export {};がないと下記がエラーになる
//let name = 'Typescript';

//変数宣言　真偽値としてアノテーション(宣言)する
let isFinished: boolean = true;

//変数 let なので再代入可能 false
isFinished = false;

//以下の代入はnum型なのでエラーになる
//isFinished = 1;

//ログに出力
console.log( { isFinished } );