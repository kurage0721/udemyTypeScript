export {};

// class VisaCard {
//   readonly owner: string;

//   constructor(owner: string) {
//     this.owner = owner;
//   }
// }

//簡略した記述
class VisaCard {
  //publicつけなくても動くが書いておく→protected、privateでreadonlyはありえないため。
  //tsの知見のない人が見ても意味が通るようにしておく
  constructor(public readonly owner: string) {}
}
let myVisaCard = new VisaCard('はむさん');

console.log(myVisaCard.owner);

//ownerはreadonlyで読み取り専用なので以下のような再代入はエラーになる。
// myVisaCard.owner = 'ベーコン';
