
type MyEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type IndexOf<T extends unknown[], U, Arr extends unknown[] = []> = 
  T extends [infer F, ...infer R]
    ? MyEqual<F, U> extends true
      ? Arr['length']
      : IndexOf<R, U, [...Arr, F]>
    : -1