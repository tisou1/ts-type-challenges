//主要是转化一下U为基础类型情况.
type TupleToUnion1<T extends unknown[] | unknown > = T extends unknown[] ? T[number] : T

type Without<T, U, Result extends unknown[] = []> =
  T extends [infer F, ...infer R]
    ? F extends TupleToUnion1<U>
      ? Without<R, U, Result>
      : Without<R, U, [...Result, F]>
    : Result


    type ol3  = Without<[1, 2], 1>

    type ol333 =  Without<[1, 2, 4, 1, 5], [1, 2]>