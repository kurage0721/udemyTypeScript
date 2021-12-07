export{};

//union型　共用体型の宣言
// | で区切り型を宣言することで複合的に型の指定が可能になる。
let value: number | string = 1;
value = 'foo';
console.log(value);//foo
value = 100;

console.log(value);//100