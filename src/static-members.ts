export {};

class Me {
  //staticアクセス修飾子による静的メンバの宣言
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'ishida';

  static work() {
    // return 'Hey Guys! Are You interested in TypeScript?';
    return `Hey Guys! This is ${this.firstName}! Are You interested in TypeScript?`;
  }
}

let me = new Me();
//以下はstaticメンバにアクセスできないためエラーになる
// console.log(me.isProgrammer);
//staticメンバには下記のようにアクセスできるので、let me = new Me();のようにインスタンスを毎回生成する必要はない
console.log(Me.isProgrammer);
//メソッドの呼び出しは以下 ※メソッドにもstaticが付与されていることが前提
console.log(Me.work());
