export {};

//インデックスシグネチャ
// Hoe to Write index signatures
//{[index: typeForIndex]:typeForValue}

//下記のように指定することで、変数宣言外でのkey:valueの追加の際に許容する型を指定することができる
let profile: { [index: string]: string | number } = {};

profile.name = 'Shogo'; //stringなのでOK
profile.age = 41; //numberなのでOK
profile.nationality = 'Japan'; //stringなのでok
//profile.iveInJapan = true; //booleanなのでNG

//console.log({ profile });

//interfaceを利用した場合の書き方
interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile2: Profile = { name: 'Shogo', underTwenty: false };

// console.log({ profile2 });
