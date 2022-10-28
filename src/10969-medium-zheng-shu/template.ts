type Integer<T> = 
  `${T & number}` extends `${number}.${number}`
    ? never
    : 0.1 extends T
      ? never
      : T