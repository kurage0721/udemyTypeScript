export {};

//下記のように、変数であるため再代入が可能だが、これにアサーションを行うことにより定数化し、再代入を禁止(readonly)することが可能。
// let name = 'Shogo';

// name = 'Takeshi';

//アサーションの方法 as constを与える
let name = 'Shogo' as const;

//オブジェクトに対しアサーションする場合 末尾の}のあとにas constを与える
let profile = {
  name: 'shogo',
  height: 173,
} as const;
