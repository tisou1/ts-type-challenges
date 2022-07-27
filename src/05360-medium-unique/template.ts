//判断数组中有这个值
type Includes1<T, U> = 
  T extends [infer F, ...infer R] 
    ? MyEqual<U, F> extends true
      ? true
      : Includes1<R, U>
    : false

type Unique<T extends unknown[], Arr extends unknown[] = []> = 
  T extends [infer F, ...infer R]
    ? Includes1<Arr, F> extends true
      ? Unique<R, Arr>
      : Unique<R, [...Arr, F]>
    : Arr


    type asd1 = Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>