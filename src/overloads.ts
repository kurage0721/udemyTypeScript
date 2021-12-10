export {};

//シグネチャーを書く
//num型とstr型のみ受け付ける
function double(value: number): number;
function double(value: string): string;

//関数
//anyで書く、シグネチャーで設定した型以外は弾かれる
function double(value: any): any {
  console.log(typeof value); // 型タイプを調べる
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
//console.log(double(true)); //エラー ただしシグネチャーがなければエラーにならない(anyなので。)
