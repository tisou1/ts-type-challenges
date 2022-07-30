type Subsequence<T extends any[]> = 
  T extends [infer F, ...infer R]
    ? [F, ...Subsequence<R>] | Subsequence<R>
    : []

    type asd2f = Subsequence<[1, 2, 3]>