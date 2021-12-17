export {};

//名前空間による同名クラスの宣言
namespace English {
  //クラスにexportをつけないとnew演算子によるインスタンス宣言などのアクセスができない
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}
const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);

//名前空間内の入れ子
namespace Japanese {
  //入れ子の名前空間にはexportをつけることによりJapanese.Tokyo.Personのようなアクセスが可能になる。
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  //同盟クラスを別の名前空間で宣言
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

const me = new Japanese.Tokyo.Person('はむさん');
const wai = new Japanese.Osaka.Person('はむさんやねん');
console.log(me.name);
console.log(wai.name);
