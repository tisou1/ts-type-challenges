/**
 * L 要构造的数组长度
 * Ele 数组元素
 * Arr 数组
 */

type BuildArray<L extends number, Ele = unknown, Arr extends unknown[] = []> =
  Arr['length'] extends L
    ? Arr
    : BuildArray<L, Ele, [...Arr, Ele]>

type Add<n1 extends number, n2 extends number> = 
  [...BuildArray<n1>,...BuildArray<n2>]['length']

type Sub<N1 extends number, N2 extends number> = 
  // BuildArray<N1> extends [...arr1: BuildArray<N2>, ...arr2: infer Rest]
  BuildArray<N1> extends [...BuildArray<N2>, ...infer Rest]
    ? Rest['length']
    : never
// 4 * 3  2个3相加add(add(add(3,3),3))
type Mul<N1 extends number, N2 extends number, Result extends unknown[] = []> = 
  N2 extends 0 
    ? Result['length']
    : Mul<N1, Sub<N2, 1>, [...BuildArray<N1>, ...Result]>

  
type Div<N1 extends number, N2 extends number, Count extends unknown[] = []> = 
  N1 extends 0 ? Count['length'] : Div<Sub<N1, N2>, N2, [unknown, ...Count]>


type ol =  Add<11,22>

type sub1 = Sub<89, 89>

type mul1 = Mul<4, 5>

type div1 = Div<12, 3>
