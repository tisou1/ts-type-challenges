type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Result extends unknown[] = [],
  Flag extends boolean = false
> = T extends [infer F, ...infer R]
      ? Result['length'] extends End
        ? Fill<R, N, Start, End, [...Result, F], false> //达到长度
        : Result['length'] extends Start
          ? Fill<R, N , Start, End, [...Result, N], true>
          : Flag extends true //Flag主要使用标识有没有 达到边界(start和end)
            ? Fill<R, N, Start, End, [...Result, N], true>
            : Fill<R, N, Start, End, [...Result, F], false>
      : Result


  type oks1 = Fill<[1, 2, 3], true, 1, 3>