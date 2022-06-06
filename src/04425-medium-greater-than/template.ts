
type BuildArr<Len extends number, Arr extends unknown[] = []> = 
  Arr['length'] extends Len
    ? Arr
    : BuildArr<Len, [...Arr, unknown]>

type GreaterThan<T extends number, U extends number> = 
  T extends U //相等情况
    ? false
    : BuildArr<T> extends [...BuildArr<U>, ...unknown[]]  //比较T构造出来的数组长度是否比U构造出来的数组长度大
      ? true
      : false

