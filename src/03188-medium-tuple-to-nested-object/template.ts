   
type TupleToNestedObject<T extends unknown[], U> = 
   T extends [infer F, ...infer R]
    ? { [K in F & string]: TupleToNestedObject<R, U>}
    : U