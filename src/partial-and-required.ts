export {};

//＊以下はutility types

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

//すべてのプロパティをオプショナル(値が入っていないor削除されてもエラーにならない)方法
//これまでの方法 keyの末尾に?をつけることによりオプショナルになる。
type Profile2 = {
  name?: string;
  age?: number;
};

//Partialを使う方法
//ユーティリティ:Partialを使用し、type Profileを型として指定するとすべてのプロパティがオプショナルとなる。
type PartialType = Partial<Profile>;

//required
//ユーティリティ:Requiredを使用し、type Profile2を型として指定するとすべてのプロパティが必須項目となる。

type RequiredType = Required<Profile2>;
