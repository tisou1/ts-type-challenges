type Combination<T extends string[], U = T[number], A = U> =
  U extends string
    ? `${U} ${Combination<T, Exclude<A, U>>}` | U
    : never


//先把tlupe转为union, 利用union在泛型中使用extends触发分布特性,来进行循环和递归
    type asdas12 = Combination<['foo', 'bar', 'baz']>