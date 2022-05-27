
type Reverse1<A> = A extends [...infer P, infer L] ? [L, ...Reverse<P>] : A
type FlipArguments<T> = 
  T extends (...args: infer Args) => infer R
    ? (...args: Reverse1<Args>) => R
    : never
  
type oLL = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
