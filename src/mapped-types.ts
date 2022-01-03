export {};

type Profile = {
  name: string;
  age: number;
};

type PartialType = Partial<Profile>;
type PropertyTypes = keyof Profile;

//in keyof でprofileのkeyに設定された型を一つずつ取り出して独自の方として定義している。
type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};

type OptionalProfile = Optional<Profile>;
