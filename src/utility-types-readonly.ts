export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Shogo',
  age: 41,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'HogeTaro',
  age: 40,
};

// friend.age++;
console.log(friend);

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
