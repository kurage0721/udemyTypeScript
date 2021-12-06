export {};

//returnなしの関数
//関数にreturnを含まない、データを返さない場合はanyまたはvoidを指定する必要がある。
//void : 明示的に何も返さないことを表す(期待する)型。

//もしくは return undefind;を関数内に記載する。
//このようにするとエラーは出なくなるが、関数の本来の目的とことなるため、使用してはならない。

// function returnNothing(): undefined {
//   return undefined;
// }

//void使用例
function returnNothing(): void {
  console.log("I don't return anything!");
}

console.log(returnNothing());