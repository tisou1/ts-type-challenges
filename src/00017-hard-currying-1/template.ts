declare function Currying<T>(fn: T): EX<T>


type EX<T> = T extends (...arg: infer Arg) => infer R
? Arg extends [infer F, ...infer Rest]
  ? (k: F) => EX<(...arg: Rest) => R>
  : R
: never


//extends infer 