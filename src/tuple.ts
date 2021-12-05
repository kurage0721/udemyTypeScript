export {};

//ユニオンタイプス指定　1つめの要素がstring 2番目がnumber
let badProfile: (string | number)[] = ["Hum", 43];

//ユニオンタイプスの型指定の場合は | (or)で型指定がされているため、型の順序性を保てない → 順序が違っていてもエラーにならない
badProfile = [42, "suzuki"];
// console.log(badProfile);


//tuple型の指定 (エディタの型推論では表示されない)
let profile: [string, number] = ["Hum", 43];

//下記はコンパイルエラー
// profile = [39, "tanaka"];

//順序があっていれば有効
profile = ["tanaka", 39];

console.log(profile);