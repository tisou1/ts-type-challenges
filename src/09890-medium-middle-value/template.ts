type GetMiddleElement<T extends unknown[]> = 
  T['length'] extends 0 | 1 | 2
    ? T
      :  T extends [any, ...infer R, any]
        ? GetMiddleElement<R>
        : never
