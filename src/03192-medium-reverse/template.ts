// your answers
type Reverse<T, R extends any[]=[]> = 
  T extends [infer P, ...infer U]
    ? Reverse<U, [P, ...R]>
    : R
    
// type Reverse<T, U extends unknown[] = []> = 
//   T extends [...infer F, infer L]
//     ? Reverse<F, [...U, L]>
//     : U


type LOp = Reverse<['a', 'b', 'c']>