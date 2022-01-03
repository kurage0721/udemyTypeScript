export {};

//tsconfig.jsonで
//"strictNullChecks": true,
//にfalseを設定すると、下記でもエラーにならず、stringやnumberにもnullが代入できてしまう
// let profile: { name: string; age: number } = {
//   name: 'Shogo',
//   age: null,
// };

// profile = null;

//下記のとおり、union型を指定すればnullも許容できるようになり、エラーにならなくなる
let profile: { name: string; age: number | null } = {
  name: 'Shogo',
  age: null,
};
