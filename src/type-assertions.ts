export {};

let name: any = 'Shogo';

//変数に方を指定するのではなく、変数に代入する値に対して方を指定する
let length = (name as string).length;
//下記の記法も利用できるが、Reactの記法と被り、ややこしいので、非推奨
let length = (<string>name).length;

length = 'foo';
