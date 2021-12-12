export {};

//クラス
class Person {
  //最初にアノテーションしておく
  name: string;
  age: number;

  //コンストラクタ
  //インスタンス生成時の初期化処理を行う
  //引数にアノテーション
  //コンストラクタ自体はリターンを行わないので、コンストラクタ自体の戻り値の型宣言(アノテーション)は不要
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //メソッドの追加
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

//インスタンス
let taro = new Person('Taro', 30);
let hanako = new Person('Hanako', 20);

//それぞれのPersonのprofileメソッドを返却
console.log(taro.profile());
console.log(hanako.profile());
//返り値
// name: Taro, age: 30
// name: Hanako, age: 20
