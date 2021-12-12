export {};

class Person {
  //アクセス修飾子 メンバー変数の宣言時に記述する。
  //public アクセス可能(修飾子なしでも同じ、通常は書かない、制御対象にのみ記載するのが普通)
  //private 外部からのアクセス不可、クラス内からのアクセス可
  //protected 外部からのアクセス不可、クラス内からのアクセス可、
  public name: string;
  //private age: number;
  //privateのままだと小クラスからのアクセスができないため、protectedに変更
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

//Personクラス継承クラスの宣言
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    //ageはprivateなので、子クラスからは親クラスのprivateにはアクセスできない(Personクラス内のみ)
    //nationalityはprotectedなので子クラスからのアクセスが可能になる。
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Android('Taro', 30, 'Japan');

//通常はこのように書けばそれぞれのメンバーのname,ageにアクセス可能なので、
//Taro
//30
//のように出力されるが、ageがprivate、かつクラス外からの参照なので、エラーになる。
console.log(taro.name);
// console.log(taro.age); //エラー

//profileメソッドはクラス内に記述されているため、privateのメンバー変数でもアクセスが可能なので、問題なく出力が可能
console.log(taro.profile());
