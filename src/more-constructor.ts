export {};

class Person {
  //下記のようにコンストラクタの引数にアクセス修飾子を記述することで初期化処理を省略できる
  constructor(public name: string, protected age: number) {}
}

const me = new Person('はむさん', 43);
console.log(me); //Person{ name: 'はむさん', age: 43 }
