import type { Equal,Expect } from '@type-challenges/utils'


type IndexOf<T extends unknown[], U, Arr extends unknown[] = []> = 
  T extends [infer F, ...infer R]
    ? Equal<F, U> extends true
      ? Arr['length']
      : IndexOf<R, U, [...Arr, F]>
    : -1
