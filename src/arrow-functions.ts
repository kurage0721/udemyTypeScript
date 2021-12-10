export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};
//numberの部分は下記のように省略して書くことができる
//number => weight / (height * height);
//returnを書かなくても、値が返る、こちらのほうが実践的か。

console.log(bmi(1.78, 86));
