// type Integer<T> = 
//   `${T & number}` extends `${number}.${number}`
//     ? never
//     : 0.1 extends T
//       ? never
//       : T

// type Integer<T extends number> =
//   number extends T 
//     ? never
//     : `${T}` extends `${string}.${string}` ? never : T

type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never

