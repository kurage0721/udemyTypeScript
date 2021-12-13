export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 途中変更不可
//   * 参照できる
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる
//   * 途中変更が可能
//   * 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(_owner: string, _secretNumber: number) {
    this._owner = _owner;
    this._secretNumber = _secretNumber;
  }

  //getter
  //ゲッターの名前とメンバー変数とかぶらないようにするため、メンバー変数にはアンスコを付与する
  get owner() {
    return this._owner;
  }
  //setter
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  //_secretNumberに外部から直接アクセスできないため、出力用のメソッドを定義
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 1234567890);
// card.owner = 'Ham'; //読み込み専用なので外部からの途中・代入不可
// card._secretNumber;//読み込み専用なので外部参照不可
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 1111111111; //setter
console.log(card.debugPrint());
console.log(card.secretNumber); //参照不可のためundefindになる
