export {};

//タイプで別名を宣言 最初は必ず大文字で、中身の型はstring
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43
};

//下記のようにオブジェクトの型指定を外に出すことができる
type Profile = {
  name: string;
  age: number;
};

const example2:Profile = {
  name: 'Ham',
  age: 43
};

//定数をtypeofで指定してaliasを作成することができる。
type Profile2 = typeof example1;
/*型は
// name: string;
// age: number;
となる。*/