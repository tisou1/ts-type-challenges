type Subsequence<T extends any[]> = 
  T extends [infer F, ...infer R]
    ? [F, ...Subsequence<R>] | Subsequence<R>
    : []


    //Subsequence总是返回当前整个数组和这个数组少一位之后的递归([F, ...Subsequence<R>] | Subsequence<R>)
    type asd2f = Subsequence<[1, 2, 3]>