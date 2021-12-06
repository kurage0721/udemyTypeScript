export{};

//関数の定義
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown);

//以下unknown型のためエラーになる 
// let sumUnknown = numberUnknown + 10;
