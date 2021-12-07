export {};

//enum型の宣言
//宣言した時点でインデックスがつく マウスオーバで見れる
//わざわざオブジェクトにして{January:0,Februaly:1・・・}のようにする必要がない
enum Months {
  January,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months[0]); //January
console.log(Months.February); //1 インデックス番号が出力される

//インデックスのoverwrite
enum Months2 {
  January = 1, // インデックスのoverwriteによる初期化 これで開始のインデックスが0 → 1になる
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months2[1]); //January
console.log(Months2.February); //2 インデックス番号が出力される

//要素の付け足し
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = COLORS.GREEEN;
console.log('緑:' + green);

//以下はプロパティに存在しないためエラー
//COLORS.YELLOW;

//YELLOW,GRAYの追加
enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}
//以下で追加を確認
console.log(COLORS);
//追加分の出力が正常に行える
const yellow = COLORS.YELLOW;
console.log('黄色:' + yellow);
const black = COLORS.BLACK;
console.log('黒:' + black);
