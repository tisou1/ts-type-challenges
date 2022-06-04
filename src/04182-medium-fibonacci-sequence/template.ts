

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// type BuildArray<L extends number, Ele = unknown, Arr extends unknown[] = []> =
//   Arr['length'] extends L
//     ? Arr
//     : BuildArray<L, Ele, [...Arr, Ele]>

type Fibonacci<
  T extends number, 
  Arr extends unknown[] = [unknown], 
  Cur extends unknown[] = [unknown], 
  Pre extends unknown[] = []
  > = 
    Arr['length'] extends T
      ? Cur['length']
      : Fibonacci<T, [...Arr, unknown],  [...Cur, ...Pre], Cur>