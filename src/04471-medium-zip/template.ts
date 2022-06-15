
type Zip<T extends unknown[], U extends unknown[]> = 
  T extends [infer F, ...infer R]
    ? U extends [infer UF,...infer UR]
      ?[[F, UF], ...Zip<R, UR>]
      : []
    : []
