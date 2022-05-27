//数组展平
type FlattenOnce<T extends unknown[]> = 
  T extends [infer F, ...infer R] 
    ? F extends Array<unknown> 
      ? [...F, ...FlattenOnce<R>]   //这里对F不能用递归了, 只需要解开偶一次即可
      : [F, ...FlattenOnce<R>] 
    : T;


//这里使用加法, 是避免N比较大, 但是真实的嵌套层级并不深的时候
type FlattenDepth<T extends unknown[], N extends number = 1, Arr extends unknown[] = []> =  
  Arr['length'] extends N
    ? T
    : FlattenOnce<T> extends T
      ? T
      : FlattenDepth<FlattenOnce<T>, N, [...Arr, unknown]>


type ijk = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>
type lgj = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 19260817>

