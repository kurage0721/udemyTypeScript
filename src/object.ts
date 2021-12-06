export {};


let profile1: object = { name: "Ham" };
//下記のように変数を全く別の内容で上書きできてしまうためNG
profile1 = { birthYear: 1976 };

// console.log(profile1);

let profile2: {
  name: string;
} = { name: "Ham" };

profile2 = { name: "ore" };

