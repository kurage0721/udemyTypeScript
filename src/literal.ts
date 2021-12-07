export {};

//曜日を指定する
//日~土の曜日の文字列のみ許容したい
// let dayOftheWeek: string = '日';
// dayOftheWeek = '月';
//このままだと以下のように想定しない文字列がはいってしまう
// dayOftheWeek = '31';

//リテラル型の指定方法、指定した文字列'のみ'を許容する
//文字列のリテラル型
let dayOftheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';

dayOftheWeek = '月';
// dayOftheWeek = '31';　//error!

//数値のリテラル型
//1~12までの数値を許可する
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 12 = 1;
month = 12;

//真偽値のリテラル型
//リテラル型はそもそもtrue or false の2つしかない

//以下でtrueのみを許容するという限定化が可能
let TRUE: true = true;
