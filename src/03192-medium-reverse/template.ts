// type Reverse<T, R extends any[]=[]> = 
//   T extends [infer P, ...infer U]
//     ? Reverse<U, [P, ...R]>
//     : R
    
// type Reverse<T, U extends unknown[] = []> = 
//   T extends [...infer F, infer L]
//     ? Reverse<F, [...U, L]>
//     : U

//不借助第二个参数
type Reverse<A> = A extends [...infer P, infer L] ? [L, ...Reverse<P>] : A


type LOp = Reverse<['a', 'b', 'c']>